import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
<<<<<<< HEAD
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Skill from './pages/Skill';
=======
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
>>>>>>> c882486bb83f45145ba52ac717e4bccfa9a34692

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
<<<<<<< HEAD
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/resume" element={<Resume />} />
=======
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
>>>>>>> c882486bb83f45145ba52ac717e4bccfa9a34692
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;