import React from 'react'
import './Services.css'
import cropmarket from '../assets1/services/crop market.jpg'
import guide from '../assets1/services/guide.jpg'
import soilTest from '../assets1/services/soil test.jpg'
import weather from '../assets1/services/weather.jpg'
import Pesticide from '../assets1/services/pesticides.png'
import ChatBot from '../assets1/services/chatbot.jpeg'
import {Link} from 'react-router-dom';
import { useState } from 'react'
import Chatbot from '../Chatbot/Chatbot'


const Services = () => {
  
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const openBuyer=()=>{
    window.location.href="./Shop"
  }

  return (
    <div className="services">
        <div className="service">
            <img src={cropmarket} alt="" />
            <div className="caption">
                <button onClick={openBuyer}>Crop Market</button>
            </div>
        </div>


        <Link to="/soil" className="service">
        <img src={soilTest} alt="Pesticide" />
        <div className="caption">
          <p>Soil Test</p>
        </div>
      </Link>


      <Link to="/pesticide" className="service">
        <img src={Pesticide} alt="Pesticide" />
        <div className="caption">
          <p>Pesticide</p>
        </div>
      </Link>

        <Link to="/weather" className="service">
        <img src={weather} alt="Weather" />
        <div className="caption">
          <p>Weather</p>
        </div>
      </Link>

      <Link to="/guide" className="service">
        <img src={guide} alt="Guide" />
        <div className="caption">
          <p>Guide</p>
        </div>
      </Link>

      <Link to="/chatbot" className="service">
        <img src={ChatBot} alt="" />
        <div className="caption">
        <button className="chat-btn" onClick={toggleChatbot}>
        {showChatbot ? 'Close Chat' : 'Chat with AI'}
      </button>

      {/* Chatbot Component */}
      {showChatbot && <Chatbot onClose={toggleChatbot} />} {/* Pass the toggle function */}
        </div>
      </Link>


    </div>
  )
}

export default Services