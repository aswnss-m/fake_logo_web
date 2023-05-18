import React from 'react'
import logo from "../assets/logo.png"
import "./Card.css"

function Card() {
  return (
        <div className="card">
            <div className="cardImage"><img src={logo} alt="Logo" /><p className='cardImageName'>Name</p></div>
            <div className="cardSimilarity">
            <div className="loadingBar bold" number-value={`${50}%`} style={{'--width-value':`${50}%`}}></div>
            </div> 
        </div>
  )
}

export default Card
