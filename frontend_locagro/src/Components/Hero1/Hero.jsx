import React from 'react'
import './Hero.css'
import Firstpage from '../assets/first-page.jpg'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-text">
            <h1>Locagrow</h1>
            <p>"Farmers sow the seeds of tomorrow's harvest. 
                Together, let's drive innovation, champion sustainability, 
                and cultivate a brighter future."
            </p>
            <button className="btn">Explore More</button>
        </div>
        <div className="box">
          <img src={Firstpage} alt="" />
        </div>
    </div>
  )
}

export default Hero