// Query.js
import React from 'react';
import Card from './Components/Card';
import "./assets/Query.css";
import QueryHeader from './Components/QueryHeader';

function Query() {
  // Read data from sessionStorage
  const resultData = JSON.parse(sessionStorage.getItem('results')) || {};
  const { file_id, message, result } = resultData;

  // Generate Card components based on the result object
  const cards = Object.entries(result).map(([filename, score]) => (
    <Card
      key={file_id}
      name={filename}
      value={score}
    />
  ));

  return (
    <>
      <QueryHeader />
      <div className="queryContainer">
        {cards}
      </div>
    </>
  );
}

export default Query;
