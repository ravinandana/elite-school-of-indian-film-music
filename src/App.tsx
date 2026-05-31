import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import BSMB from './pages/BSMB';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bsmb" element={<BSMB />} />
        <Route path="/bsmb-bangalore-south-music-band" element={<BSMB />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;