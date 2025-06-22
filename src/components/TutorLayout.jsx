// colourful 20 % / 80 % layout component
import { useState } from "react";
import "./TutorLayout.css";       

const topics = [
  { title: "1.SELECT", file: "/pages/select.html" },
  { title: "2.WHERE",  file: "/pages/where.html" },
  { title: "3.JOIN",   file: "/pages/join.html" },
  // और भी टॉपिक्स यहाँ जोड़ें…
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
