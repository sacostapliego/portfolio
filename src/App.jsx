import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import Resume from './pages/Resume';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import PlaygroundPage from './pages/PlaygroundPage';
import IndividualProjectPage from './pages/projects/IndividualProjectsPage';

function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectName" element={<IndividualProjectPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        {/* /skills was this page's original route; keep old links working. */}
        <Route path="/skills" element={<Navigate to="/experience" replace />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;