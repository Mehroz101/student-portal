// Footer.js
import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Alumni Hub</h3>
          <p>QasimPur Colony, BCG Chowk, Multan, Punjab, Pakistan, Multan, Pakistan</p>
          <p>Email: info@mnsuet.edu.pk</p>
          <p>Phone: +92-61-9330592</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => scrollToId('about')}>About Us</li>
            <li onClick={() => scrollToId('events')}>Events</li>
            <li onClick={() => scrollToId('FAQ')}>FAQ</li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com/mnsuetofficial" className="social-icon">Facebook</a></li>
            <li><a href="https://x.com/i/flow/login?redirect_after_login=%2Fmnsuetmultan" className="social-icon">Twitter</a></li>
            <li><a href="https://www.instagram.com/mnsuetofficial/" className="social-icon">Instagram</a></li>
            <li><a href="https://www.linkedin.com/school/mnsuetmultan/" className="social-icon">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Alumni Hub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
