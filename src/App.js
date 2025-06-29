// src/App.js
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import TutorLayout from "./components/TutorLayout";
import Home from "./Home";          // keep your existing landing page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"        element={<Home />} />          {/* landing banner etc. */}
        <Route path="/topics/*" element={<TutorLayout />} />   {/* 20 / 80 tutor UI */}
      </Routes>
    </Router>
  );
}
export default App;
