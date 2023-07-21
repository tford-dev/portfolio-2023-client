import React, { useState } from 'react';
import './index.css';

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="body">
      {/* This code is for navbar */}
      <header className="app-header">
        <nav className="nav-bar container">
          <div className="nav-logo">Terrance Ford</div>

          {/* Mobile menu */}
          <div
            className={`mobile-menu ${isMobileMenuOpen ? '' : 'hidden'}`}
            onClick={handleMobileMenuToggle}
          >
            ☰
          </div>

          {/* Desktop menu */}
          <div className={`nav-links ${isMobileMenuOpen ? 'active show' : ''}`}>
            {/* Add your navigation links here */}
            <a href="#home">Home</a>
            <a href="#about">Projects</a>
            <a href="#projects">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      <div className="container">
        <img src="./gitpic.jpg" alt="Terrance Ford"/>
      </div>
    </div>
  );
}

export default App;