import React from 'react';
import "./Card.css";

function Card({ imageSrc, imageName, similarity }) {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={imageSrc} alt="Logo" />
        <p className='cardImageName'>{imageName}</p>
      </div>
      <div className="cardSimilarity">
        <div className="loadingBar bold" number-value={`${similarity}%`} style={{'--width-value': `${similarity}%`}}></div>
      </div> 
    </div>
  );
}

export default Card;
