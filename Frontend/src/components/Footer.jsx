// Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>University Name</h3>
          <p>Address, City, Country</p>
          <p>Email: info@university.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
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
        <p>&copy; {new Date().getFullYear()} University Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
