import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from './components/Contact/Contact.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Resume from './components/Resume/Resume.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} /> {/* 'About Me' now serves as the Home Page */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


