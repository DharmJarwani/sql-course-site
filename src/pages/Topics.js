import './Topics.css';

const topics = [
  "SELECT",
  "WHERE",
  "ORDER BY",
  "GROUP BY",
  "JOIN",
  "SUBQUERIES",
  "AGGREGATE FUNCTIONS",
  "INSERT",
  "UPDATE",
  "DELETE",
  "CREATE TABLE",
  "ALTER TABLE",
  "INDEXES",
  "VIEWS",
  "STORED PROCEDURES"
];

export default function Topics() {
  return (
    <div className="topics-page">
      <h1>📖 SQL Topics</h1>
      <div className="topics-grid">
        {topics.map((topic, idx) => (
          <div key={idx} className="topic-card">
            📌 {topic}
          </div>
        ))}
      </div>
    </div>
  );
}
