// src/components/TutorLayoutPython.jsx
import { useState } from "react";
import "./TutorLayout.css";
import topics from "../data/pytopics";  // use your Python topics file

const chapters = [...new Set(topics.map(t => t.chapter))].sort((a, b) => a - b);

export default function TutorLayoutPython() {
  const [current, setCurrent] = useState("/pages/welcome.html");
  const [open, setOpen] = useState([]);

  const toggle = ch =>
    setOpen(o => (o.includes(ch) ? o.filter(x => x !== ch) : [...o, ch]));

  return (
    <div className="wrapper">
      <aside className="sidebar">
        <h2 className="title">🐍 Python Topics</h2>

        {chapters.map(ch => (
          <div key={ch} className="level-group">
            <button
              className={`level-label ${open.includes(ch) ? "open" : ""}`}
              onClick={() => toggle(ch)}
            >
              <span>Chapter {ch}</span>
              <span className="chevron" />
            </button>

            <div className={`links-wrap ${open.includes(ch) ? "show" : "hide"}`}>
              {topics
                .filter(t => t.chapter === ch)
                .map(({ title, file }) => (
                  <a
                    key={file}
                    href="#!"
                    className={`nav-link ${current === file ? "active" : ""}`}
                    onClick={() => setCurrent(file)}
                  >
                    {title}
                  </a>
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
