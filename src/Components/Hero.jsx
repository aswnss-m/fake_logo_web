import React from 'react'
import "./Hero.css"
import logo from "../assets/logo.png"

function Hero() {
  return (
    <div className='heroContainer'>
      <div className="hero">
        <span className="heroText">
            <h1>1.5 Lakh Logos</h1>
            <p>With our vast dataset of registered logos you can identify weather the logo is genuine or not, stay away from fake companies trying to sell to fake stuffs.</p>
        </span>
        <span className="heroImage">
            <img src={logo} alt="" />
        </span>
      </div>
    </div>
  )
}

export default Hero
