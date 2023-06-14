// Query.js
import React from 'react';
import Card from './Components/Card';
import "./assets/Query.css"
import QueryHeader from './Components/QueryHeader';

function Query() {
  const cards = Array.from({ length: 10 }, (_, index) => (
    <Card key={index}/>
  ));

  return (
    <>
      <QueryHeader/>
      <div className="queryContainer">
        {cards}
      </div>
    </>
  );
}

export default Query;
