import React from 'react';
import './Hero.css';
// import handIcon from '../assets/'
// import arrowicon from '../assets/'
import heroimg from '../assets/user.jpg';

const Hero = () => {
  return (
    <div className="hero">
        <div className='hero-left'>
            <h2>NEW AND FRESH ONLY</h2>
            <div>
                <div className="hero-and-icon">
                    <p></p>
                    <img src={""} alt="" />
                </div>
                <p>Everything</p>
                <p>At one place</p>
            </div>
            <div className="hero-latest-btn">
                <div>Fresh Items</div>
                <img src={""} alt="" />
            </div>
        </div>

        <div className="hero-right">
            <img src={""} alt="" />
        </div>
    </div>
  )
}

export default Hero