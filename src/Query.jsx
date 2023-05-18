import React from 'react'
import Card from './Components/Card';
import "./assets/Query.css"
import QueryHeader from './Components/QueryHeader';

function Query() {
      // Generate an array of 10 cards
  const cards = Array.from({ length: 10 }, (_, index) => <Card/>);

  return (
    <>
    <QueryHeader />
    <div className='queryContainer'>
      {cards}
    </div>
    </>
  )
}

export default Query
