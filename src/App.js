// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TutorLayoutSQL from "./components/TutorLayoutSQL";
import TutorLayoutPython from "./components/TutorLayoutPython";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sqlTopics/*" element={<TutorLayoutSQL />} /> */}
        <Route path="/pytopics/*" element={<TutorLayoutPython />} />
      </Routes>
    </Router>
  );
}

export default App;








