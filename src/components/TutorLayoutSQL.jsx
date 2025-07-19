// src/components/TutorLayoutSQL.jsx
import { useState } from "react";
import "./TutorLayout.css";
import topics from "../data/sqlTopics";  // use your original sqlTopics file

/* distinct levels = [1,2,3…] */
const levels = [...new Set(topics.map(t => t.level))].sort((a, b) => a - b);

export default function TutorLayoutSQL() {
  const [current, setCurrent] = useState("/pages/welcome.html");
  const [open, setOpen] = useState([]); // Start with all levels collapsed

  // const [current, setCurrent]   = useState(topics[0].file);
  // const [open  , setOpen]       = useState([1]);          // Level-1 open by default

  const toggle = lvl =>
    setOpen(o => (o.includes(lvl) ? o.filter(x => x !== lvl) : [...o, lvl]));

  return (
    <div className="wrapper">
      <aside className="sidebar">
        <h2 className="title">📘 SQL Topics</h2>

        {levels.map(lvl => (
          <div key={lvl} className="level-group">
            <button
              className={`level-label ${open.includes(lvl) ? "open" : ""}`}
              onClick={() => toggle(lvl)}
            >
              <span>Level {lvl}</span>
              <span className="chevron" />
            </button>

            <div className={`links-wrap ${open.includes(lvl) ? "show" : "hide"}`}>
              {topics
                .filter(t => t.level === lvl)
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
