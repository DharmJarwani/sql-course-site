// colourful 20 % / 80 % layout component
import { useState } from "react";
import "./TutorLayout.css";       

const topics = [
  { title: "1. SELECT", file: "/pages/select.html" },
  { title: "2. WHERE", file: "/pages/where.html" },
  { title: "3. JOIN", file: "/pages/join.html" },
  { title: "4. GROUP BY", file: "/pages/groupby.html" },
  { title: "5. ORDER BY", file: "/pages/orderby.html" },
  { title: "6. HAVING", file: "/pages/having.html" },
  { title: "7. DISTINCT", file: "/pages/distinct.html" },
  { title: "8. LIMIT", file: "/pages/limit.html" },
  { title: "9. OFFSET", file: "/pages/offset.html" },
  { title: "10. BETWEEN", file: "/pages/between.html" },
  { title: "11. IN", file: "/pages/in.html" },
  { title: "12. LIKE", file: "/pages/like.html" },
  { title: "13. IS NULL", file: "/pages/isnull.html" },
  { title: "14. INNER JOIN", file: "/pages/innerjoin.html" },
  { title: "15. LEFT JOIN", file: "/pages/leftjoin.html" },
  { title: "16. RIGHT JOIN", file: "/pages/rightjoin.html" },
  { title: "17. FULL JOIN", file: "/pages/fulljoin.html" },
  { title: "18. UNION", file: "/pages/union.html" },
  { title: "19. UNION ALL", file: "/pages/unionall.html" },
  { title: "20. SUBQUERY", file: "/pages/subquery.html" },
  { title: "21. EXISTS", file: "/pages/exists.html" },
  { title: "22. CASE", file: "/pages/case.html" },
  { title: "23. COALESCE", file: "/pages/coalesce.html" },
  { title: "24. NULLIF", file: "/pages/nullif.html" },
  { title: "25. CAST", file: "/pages/cast.html" },
  { title: "26. CONVERT", file: "/pages/convert.html" },
  { title: "27. CREATE TABLE", file: "/pages/createtable.html" },
  { title: "28. DROP TABLE", file: "/pages/droptable.html" },
  { title: "29. ALTER TABLE", file: "/pages/altertable.html" },
  { title: "30. ADD COLUMN", file: "/pages/addcolumn.html" },
  { title: "31. UPDATE", file: "/pages/update.html" },
  { title: "32. DELETE", file: "/pages/delete.html" },
  { title: "33. INSERT", file: "/pages/insert.html" },
  { title: "34. PRIMARY KEY", file: "/pages/primarykey.html" },
  { title: "35. FOREIGN KEY", file: "/pages/foreignkey.html" },
  { title: "36. INDEX", file: "/pages/index.html" },
  { title: "37. AUTO INCREMENT", file: "/pages/autoincrement.html" },
  { title: "38. DEFAULT", file: "/pages/default.html" },
  { title: "39. CHECK", file: "/pages/check.html" },
  { title: "40. CONSTRAINT", file: "/pages/constraint.html" },
  { title: "41. TRANSACTION", file: "/pages/transaction.html" },
  { title: "42. COMMIT", file: "/pages/commit.html" },
  { title: "43. ROLLBACK", file: "/pages/rollback.html" },
  { title: "44. SAVEPOINT", file: "/pages/savepoint.html" },
  { title: "45. TRUNCATE", file: "/pages/truncate.html" },
  { title: "46. VIEWS", file: "/pages/views.html" },
  { title: "47. STORED PROCEDURE", file: "/pages/storedprocedure.html" },
  { title: "48. FUNCTIONS", file: "/pages/functions.html" },
  { title: "49. CURSORS", file: "/pages/cursors.html" },
  { title: "50. TEMP TABLE", file: "/pages/temptable.html" }
];


export default function TutorLayout() {
  const [current, setCurrent] = useState(topics[0].file);

  return (
    <div className="wrapper">
      {/* ------ 20 % Sidebar ------ */}
      <aside className="sidebar">
        <h2 className="title">📘 SQL Topics</h2>
        <nav className="nav">
          {topics.map(({ title, file }) => (
            <a
              key={file}
              href="#!"
              className={`nav-link ${current === file ? "active" : ""}`}
              onClick={() => setCurrent(file)}
            >
              {title}
            </a>
          ))}
        </nav>
      </aside>

      {/* ------ 80 % Content ------ */}
      <main className="content">
        <div className="iframe-wrapper">
          <iframe title="Lesson" src={current} />
        </div>
      </main>
    </div>
  );
}
