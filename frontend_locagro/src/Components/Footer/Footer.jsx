import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1 className="name">LOCAGROW</h1>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 LocAgrow. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
