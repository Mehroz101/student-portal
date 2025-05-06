// Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar2.css';

const Navbar2 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="brand-logo">University Name</a>
      </div>
      <div className={`navbar-links ${isMobile ? 'mobile' : ''}`}>
        <ul>
        <li onClick={() => scrollToId('hero')}>Home</li>
        <li onClick={() => scrollToId('about')}>About</li>
        <li onClick={() => scrollToId('programs')}>Programs</li>
        </ul>
      </div>
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar2;
