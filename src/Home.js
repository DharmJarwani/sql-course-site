import './App.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="App">
      <header>
        <h1>🚀 Learn SQL with Dharm</h1>
        <p>Master SQL skills with real-world examples & practical exercises! 🧠💻</p>
      </header>

      <section className="features">
        <div className="feature">
          <h3>📚 Easy Lessons</h3>
          <p>
            Step-by-step content from basic to intermediate SQL using
            <span style={{ fontWeight: 'bold', color: '#00796b' }}> Northwind DB</span>.
          </p>
          <p style={{ backgroundColor: '#f0f4f8', padding: '10px 14px', borderLeft: '4px solid #00796b', fontSize: '0.9rem', marginTop: '10px', color: '#333', borderRadius: '4px' }}>
            🔍 <strong>Note:</strong> Northwind is a publicly available sample database originally provided by Microsoft for learning and demonstration purposes.
          </p>
        </div>
      </section>

      
      <Link to="/topics" className="explore-btn">🔍 Explore Topics</Link>

    </div>
  );
}
