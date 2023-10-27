import './App.css';
// At the top of src/App.js

// Necessary modules and components are imported.
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArtRoom from './components/ArtRoom';
import ScienceRoom from './components/ScienceRoom';




function App() {
  return (
    <Router>
    <div className="App">
      {/* Navigation links for our rooms */}
      <nav>
        <ul>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/art">Art Room</Link></div>
          <div><Link to="/science">Science Room</Link></div>
        </ul>
      </nav>

      {/* Routes that dictate which component to render for each URL */}
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/art" element={<ArtRoom/>} />
      <Route path="/science" element={<ScienceRoom/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
