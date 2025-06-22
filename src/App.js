import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>🚀 Learn SQL with Dharm</h1>
        <p>Master SQL skills with real-world examples & practical exercises! 🧠💻</p>
      </header>

      <button className="explore-btn" onClick={() => window.location.href='/topics'}>
        🔍 Explore Topics
      </button>

      <section className="features">
        <div className="feature">
          <h3>📚 Easy Lessons</h3>
          <p>Step-by-step content from basic to intermediate SQL using Northwind DB.</p>
        </div>
        <div className="feature">
          <h3>🎯 Real Projects</h3>
          <p>Hands-on practice with real business data and query optimization.</p>
        </div>
        <div className="feature">
          <h3>🧪 Interactive Tests</h3>
          <p>Track your learning with built-in quizzes and practical exercises.</p>
        </div>
        <div className="feature">
          <h3>🎥 Video Tutorials</h3>
          <p>Short, focused videos for every concept — fast and effective learning!</p>
        </div>
      </section>
    </div>
  );
}

export default App;
