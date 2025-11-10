# MODULE MARKET - MySQL Version (with Receipt Storage)
import mysql.connector

products_file = "projectData.txt"

admin_password = "101010"


products = []  # global product list

def refresh_products():
    global products
    products = load_products_txt()

# ------------------ DATABASE CONNECTION ------------------

def get_connection():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="12345",  
            database="module_market"
        )
        print(" Database connection successful.")
        return connection
    except Exception as e:
        print(" Database connection failed:", e)
        return None


# ------------------ PRODUCT HANDLING ------------------


def load_products_txt():
    products = []
    try:
        with open(products_file, "r") as f:
            for line in f:
                parts = line.strip().split(",")
                if len(parts) == 3:
                    product_name, category, price = parts
                    products.append({
                        "product_name": product_name.strip(),
                        "category": category.strip(),
                        "price": float(price)
                    })
    except FileNotFoundError:
        print("\n Product file not found! No products loaded.")
    return products

products = load_products_txt()

def display_products():
    global products
    if len(products) == 0:
        refresh_products()
    print("\n--- Available Products ---")
    count = 1
    for product in products:
        print(str(count) + ". " + product["product_name"] + " - ₹" + str(product["price"]) + " (" + product["category"] + ")")
        count = count + 1



def add_product(name, category, price):
    try:
        with open(products_file, "a") as f:
            f.write(name + "," + category + "," + str(price) + "\n")
        refresh_products()  #  reloads updated product list
        print(" Product added to file successfully and list refreshed.")
    except Exception as e:
        print(" Could not add product:", e)


def admin_mode():
    password = input("Admin password: ")
    if password == admin_password:
        display_products()
        choice = input("\n Do you want to add a new product? (y/n): ").lower()
        if choice == 'y':
            product_name = input("Product Name: ")
            category = input("Category: ")
            price = float(input("Price: "))
            add_product(product_name, category, price)
            print(" Product added successfully!")
    else:
        print("Incorrect password.")


# ------------------ USER HANDLING ------------------

def user_register():
    username = input("Username: ")
    password = input("Password: ")

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
    if cursor.fetchone():
        print(" User already exists!")
        conn.close()
        return

    cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
    conn.commit()
    conn.close()
    print(f" User '{username}' registered successfully!")
    print(f"Welcome to Module Market, {username}!")

def user_login():
    username = input("Username: ")
    password = input("Password: ")

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        print(f"Welcome back, {username}!")
        return username
    else:
        print(" Login failed.")
        return None


# ------------------ CART & RECEIPT HANDLING ------------------

user_carts = {}

def add_to_cart(username):
    conn = get_connection()
    if not conn:
        print(" Database connection failed.")
        return

    cursor = conn.cursor(dictionary=True)

    product_input = input("Enter product number or name: ")

    # Fetch product by ID or name
    cursor.execute(
        "SELECT * FROM products WHERE id = %s OR product_name = %s",
        (product_input, product_input)
    )
    selected_product = cursor.fetchone()

    if selected_product:
        try:
            quantity = int(input(f"Add Quantity for {selected_product['product_name']}: "))
            cursor.execute(
                """
                INSERT INTO cart (username, product_name, price, quantity)
                VALUES (%s, %s, %s, %s)
                """,
                (username, selected_product['product_name'], selected_product['price'], quantity)
            )
            conn.commit()
            print(f" Added {quantity} x {selected_product['product_name']} to cart.")
        except ValueError:
            print(" Invalid quantity.")
    else:
        print(" Product not found!")

    conn.close()



def generate_receipt(username):
    conn = get_connection()
    if not conn:
        print(" Database connection failed.")
        return

    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT * FROM cart")
    cart_items = cursor.fetchall()

    if not cart_items:
        print(" Cart is empty!")
        conn.close()
        return

    print("\n Receipt:")
    print("-" * 60)
    total_amount = 0

    for item in cart_items:
        line_total = item['price'] * item['quantity']
        total_amount += line_total
        print(f"{item['product_name']} - ₹{item['price']} x {item['quantity']} = ₹{line_total}")

    print("-" * 60)
    print(f"Total: ₹{total_amount}")

    #  Step 1: Insert into receipts table
    cursor.execute(
        "INSERT INTO receipts (username, total_amount) VALUES (%s, %s)",
        (username, total_amount)
    )
    receipt_id = cursor.lastrowid  # get the generated receipt ID

    #  Step 2: Insert each item into receipt_items
    for item in cart_items:
        cursor.execute(
            """
            INSERT INTO receipt_items (receipt_id, product_name, price, quantity)
            VALUES (%s, %s, %s, %s)
            """,
            (receipt_id, item['product_name'], item['price'], item['quantity'])
        )

    conn.commit()
    conn.close()
    print(" Receipt saved successfully!")



def view_old_receipts(username):
    conn = get_connection()
    if not conn:
        print(" Database connection failed.")
        return

    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT * FROM receipts WHERE username = %s ORDER BY receipt_date DESC", (username,))
    records = cursor.fetchall()

    if not records:
        print(" No old receipts found.")
        conn.close()
        return

    print("\n --- Your Old Receipts ---")
    for receipt in records:
        print(f"\nReceipt ID: {receipt['id']} | Date: {receipt['receipt_date']} | Total: ₹{receipt['total_amount']}")
        
        # Fetch items linked to this receipt
        cursor.execute("SELECT * FROM receipt_items WHERE receipt_id = %s", (receipt['id'],))
        items = cursor.fetchall()
        
        for item in items:
            print(f"  - {item['product_name']} ({item['quantity']} x ₹{item['price']})")

    conn.close()


# ------------------ MAIN ------------------

def main():
    print("Welcome to Module Market (MySQL Version)")
    while True:
        print("\n1. Register\n2. Login\n3. Admin Mode\n4. Exit")
        choice = input("Choose an option: ")

        if choice == '1':
            user_register()
        elif choice == '2':
            username = user_login()
            if username:
                while True:
                    print(f"\n User: {username}")
                    print("1. View Products\n2. Add to Cart\n3. Generate Receipt\n4. View Old Receipts\n5. Logout")
                    user_choice = input("Choose an option: ")

                    if user_choice == '1':
                        display_products()
                    elif user_choice == '2':
                        add_to_cart(username)
                    elif user_choice == '3':
                        generate_receipt(username)
                    elif user_choice == '4':
                        view_old_receipts(username)
                    elif user_choice == '5':
                        break
                    else:
                        print(" Invalid option.")
        elif choice == '3':
            admin_mode()
        elif choice == '4':
            print(" Goodbye! Visit again at Module Market.")
            break
        else:
            print(" Invalid choice.")


if __name__ == "__main__":
    main()
