import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importe a Navbar
import Home from './pages/HomeLogin'; 
import Projects from './pages/Projects';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}