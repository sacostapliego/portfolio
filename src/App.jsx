import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Skill from './pages/Skill';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skill />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;