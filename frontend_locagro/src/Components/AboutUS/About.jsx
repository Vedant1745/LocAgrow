import React from 'react'
import './About.css'
import AboutUs from '../assets/aboutus.jpg'


const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={AboutUs} alt="" className="about-img" />
        </div>
        <div className="about-right">
            <h3>About Locagrow </h3>
            <h4>"Driving sustainable agriculture with innovation and collaboration."</h4>
        <p>
        LocaAgrow is committed to revolutionizing the agricultural landscape 
        by providing a one-stop platform that empowers farmers, buyers, and stakeholders. 
        Our mission is to simplify farming operations, enhance market accessibility, and foster innovation in agriculture. 
        We believe in using technology to support sustainable farming practices and drive productivity, 
        ensuring that farmers have access to vital resources, expert guidance, and real-time information.
         By connecting farmers directly with buyers and service providers, 
         we aim to create a transparent and efficient marketplace that benefits everyone involved.
        </p>
        <p>
        At LocaAgrow, we understand the challenges farmers face 
        and are dedicated to offering solutions that make farming more profitable 
        and less complex. Our platform not only provides up-to-date information on soil testing, 
        pesticide use, and market trends but also allows farmers to locate nearby labs and 
        get crucial advice on improving their yields. We are passionate about helping farmers grow their businesses, 
        contribute to food security, and build a sustainable future for generations to come.
        </p>
        
        </div>
    </div>
  
  )
}

export default About

