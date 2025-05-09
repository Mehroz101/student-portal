// Footer.js
import React from 'react';
import '../styles/Footer.css';
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
          <p>Address, City, Country</p>
          <p>Email: info@university.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => scrollToId('about')}>About Us</li>
            <li onClick={() => scrollToId('events')}>Events</li>
        
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="#" className="social-icon">Facebook</a></li>
            <li><a href="#" className="social-icon">Twitter</a></li>
            <li><a href="#" className="social-icon">Instagram</a></li>
            <li><a href="#" className="social-icon">LinkedIn</a></li>
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
