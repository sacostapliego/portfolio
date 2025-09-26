import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Resume from './pages/Resume';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ExperimentsPage from './pages/ExperimentsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/experiments" element={<ExperimentsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;