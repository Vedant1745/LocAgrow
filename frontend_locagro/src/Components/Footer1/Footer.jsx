import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
<div className="footer">
    
    <div className="contact-container">
        <div className="product1">
            <h2>Product</h2>
            <ul>
                <li>Overview</li>
                <li>Features</li>
                <li>Release</li>
            </ul>
        </div>
        <div className="company">
            <h2>Company</h2>
            <ul>
                <li>About Us</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className="resources">
            <h2>Resources</h2>
            <ul>
                <li>Blog</li>
                <li>News letter</li>
                <li>Chatbot</li>
            </ul>
        </div>
    </div>
    
    <div className="footer1">
        <p>@ 2024 LOCAGROW 
        </p>
        <p>All rights Reserved</p>
        <ul>
            <li>Terms of Services</li>
            <li>
                Privacy Policy
            </li>
        </ul>
    </div>
</div>
    
  )
}

export default Footer