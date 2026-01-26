import './App.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="App">
      <header>
        <h1>🚀 Learn with Dharm</h1>
        <p>Master <strong>SQL</strong> & <strong>Python</strong> with real-world examples & practical exercises! 🧠💻</p>
      </header>

      <section className="features">

        {/* SQL Section */}
        <div className="feature sql">
          <h3>📚 SQL Lessons</h3>
          <p>
            Learn SQL step-by-step from basics to intermediate using 
            <span style={{ fontWeight: 'bold', color: '#00796b' }}> Northwind DB</span>.
          </p>
          <p className="note-box">
            🔍 <strong>Note:</strong> Northwind is a publicly available sample database originally provided by Microsoft for learning and demonstration purposes.
          </p>
          <Link to="/sqlTopics" className="explore-btn">🧠 Explore SQL</Link>
        </div>

        {/* Python Section */}
        <div className="feature python">
          <h3>🐍 Python Lessons</h3>
          <p>
            Start learning Python programming with clear examples, beginner-friendly questions, and practical code blocks.
          </p>
          <p className="note-box">
            🚀 <strong>Why Python?</strong> It's one of the most popular and beginner-friendly languages for web, data, AI, and more.
          </p>
          <Link to="/pytopics" className="explore-btn python">🐍 Explore Python</Link>
        </div>

      </section>
    </div>
  );
}
