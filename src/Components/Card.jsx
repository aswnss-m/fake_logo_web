import React from 'react';
import "./Card.css";

function Card({ imageSrc, name, value }) {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={imageSrc} alt="Logo" />
        <p className='cardImageName'>{name}</p>
      </div>
      <div className="cardSimilarity">
        <div className="loadingBar bold" number-value={`${value}%`} style={{'--width-value': `${value}%`}}></div>
      </div> 
    </div>
  );
}

export default Card;
