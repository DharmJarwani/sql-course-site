// src/components/TutorLayoutPython.jsx

import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import "./TutorLayout.css";
import topics from "../data/pytopics";

// Get unique categories
const categories = [...new Set(topics.map(t => t.category))];

export default function TutorLayoutPython() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState([]);

  // Default page (if no file provided in URL)
  const defaultPage = "/pages/welcomePython.html";

  // Read ?file= from URL
  const current = searchParams.get("file") || defaultPage;

  // Toggle category expand
  const toggle = (cat) =>
    setOpen((o) => (o.includes(cat) ? o.filter((x) => x !== cat) : [...o, cat]));

  return (
    <div className="wrapper">
      <aside className="sidebar">
        <h2 className="title">🐍 Python Topics</h2>

        {categories.map((cat) => (
          <div key={cat} className="level-group">
            <button
              className={`level-label ${open.includes(cat) ? "open" : ""}`}
              onClick={() => toggle(cat)}
            >
              <span>{cat}</span>
              <span className="chevron" />
            </button>

            <div className={`links-wrap ${open.includes(cat) ? "show" : "hide"}`}>
              {topics
                .filter((t) => t.category === cat)
                .map(({ title, file }) => (
                  <Link
                    key={file}
                    to={`/pytopics?file=${encodeURIComponent(file)}`}
                    className={`nav-link ${current === file ? "active" : ""}`}
                  >
                    {title}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </aside>

      <main className="content">
        <div className="iframe-wrapper">
          <iframe title="Lesson" src={current} />
        </div>
      </main>
    </div>
  );
}
