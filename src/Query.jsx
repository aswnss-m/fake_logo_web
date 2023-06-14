import React from 'react';
import Card from './Components/Card';
import "./assets/Query.css";
import QueryHeader from './Components/QueryHeader';

function Query() {
  // Read data from sessionStorage
  const resultData = JSON.parse(sessionStorage.getItem('results')) || {};
  const { file_id, message, result } = resultData;

  // Generate Card components based on the result object
  const cards = Object.values(result).map((item, index) => (
    <Card
    imageSrc = {`Logos/${item.name}.png`}
      key={index}
      name={item.name}
      value={Math.round(item.value * 100)} // Adjusted value to *100 and rounded to an integer
    />
  ));

  return (
    <div className='queryContainerBox'>
      <QueryHeader />
      <div className="queryContainer">
        {cards}
      </div>
    </div>
  );
}

export default Query;
