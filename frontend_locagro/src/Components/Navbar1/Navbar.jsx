import React, { useState, useEffect } from 'react';
import './Navbar.css';
import icon from '../assets/LocAgrow.png'
import { Link as ScrollLink } from 'react-scroll';  // Rename this import to avoid conflict
import { Link as RouterLink } from 'react-router-dom';  // Rename this import to avoid conflict

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="logo">
      <img src={icon} alt="logo" className="logo"/>
        </div>
      <ul>
        {/* Link to sections using react-scroll for smooth scrolling */}
        <li><ScrollLink to="hero" smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        {/* Link to a different page using react-router-dom */}
        <li><RouterLink to="/about">About Us</RouterLink></li>

        {/* Link to sections using react-scroll */}
        <li><ScrollLink to="services" smooth={true} offset={-260} duration={500}>Services</ScrollLink></li>

        <li><ScrollLink to="contact" smooth={true} offset={-260} duration={500}>Contact Us</ScrollLink></li>


        <li><button className="btn dark-btn">Login</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
