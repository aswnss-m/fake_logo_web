import React from 'react'
import "./Hero.css"
import logo from "../assets/logo.png"

function Hero() {
  return (
    <div className='heroContainer'>
      <div className="hero">
        <span className="heroText">
            <h1>30k Logos</h1>
            <p>
            By using our website, you can easily check for matching logos against our extensive database of registered logos
            </p>
        </span>
        <span className="heroImage">
            <img src={logo} alt="" />
        </span>
      </div>
    </div>
  )
}

export default Hero
