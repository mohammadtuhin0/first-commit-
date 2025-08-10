import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skill";

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white shadow p-4 flex gap-6">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/projects" className="text-blue-500">Projects</Link>
        <Link to="/skills" className="text-blue-500">Skills</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
