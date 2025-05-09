// Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar2.css';
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate()
  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="navbar2">
      <div className="navbar-brand">
        <a href="/" className="brand-logo">Alumni Hub</a>
      </div>
      <div className={`navbar-links ${isMobile ? 'mobile' : ''}`}>
        <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/students")}>Students</li>
        <li onClick={() => scrollToId('about')}>About</li>
        <li onClick={() => scrollToId('events')}>Events</li>
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
