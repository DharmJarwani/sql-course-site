import './App.css';
import Topics from './pages/Topics';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </Router>
  );
}

export default App;
