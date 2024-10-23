import React from 'react'
import './Products.css'
import wheat from '../assets1/Our Products/crops/wheat.jpg'
import rice from '../assets1/Our Products/crops/rice.jpg'
import cotton from '../assets1/Our Products/crops/cotton.jpg'
import corn from '../assets1/Our Products/crops/corn.jpg'

import tomato from '../assets1/Our Products/vegetables/tomato.jpg'
import onion from '../assets1/Our Products/vegetables/onion.jpg'
import ginger from '../assets1/Our Products/vegetables/ginger.jpg'
import garlic from '../assets1/Our Products/vegetables/garlic.jpg'

import blackpepper from '../assets1/Our Products/spices/black pepper.jpg'
import cloves from '../assets1/Our Products/spices/cloves.jpg'
import redchilli from '../assets1/Our Products/spices/red chilli.jpg'
import turmeric from '../assets1/Our Products/spices/turmeric.jpg'

import apple from '../assets1/Our Products/fruits/apple.jpg'
import banana from '../assets1/Our Products/fruits/banana.jpg'
import grapes from '../assets1/Our Products/fruits/grapes.jpg'
import mango from '../assets1/Our Products/fruits/mango.jpg'




const Products = () => {
  return (
    <div className="products">
        <div className="product">
            <img src={wheat} alt="" />
              <p>Wheat</p>
        </div>

        <div className="product">
            <img src={rice} alt="" />
              <p>Wheat</p>
        </div>

        <div className="product">
            <img src={cotton} alt="" />
              <p>Wheat</p>
        </div>

        <div className="product">
            <img src={corn} alt="" />
              <p>Wheat</p>
        </div>



        <div className="product">
            <img src={tomato} alt="" />
              <p>Tomato</p>
        </div>

        <div className="product">
            <img src={onion} alt="" />
              <p>Onion</p>
        </div>

        <div className="product">
            <img src={ginger} alt="" />
              <p>Ginger</p>
        </div>

        <div className="product">
            <img src={garlic} alt="" />
              <p>garlic</p>
        </div>


        <div className="product">
            <img src={blackpepper} alt="" />
              <p>Black Pepper</p>
        </div>

        <div className="product">
            <img src={cloves} alt="" />
              <p>Cloves</p>
        </div>

        <div className="product">
            <img src={redchilli} alt="" />
              <p>Red Chilli</p>
        </div>

        <div className="product">
            <img src={turmeric} alt="" />
              <p>Turmeric</p>
        </div>

        
        <div className="product">
            <img src={apple} alt="" />
              <p>Apple</p>
        </div>

        <div className="product">
            <img src={banana} alt="" />
              <p>Banana</p>
        </div>

        <div className="product">
            <img src={grapes} alt="" />
              <p>Grapes</p>
        </div>

        <div className="product">
            <img src={mango} alt="" />
              <p>Mango</p>
        </div>


    </div>
  )
}

export default Products