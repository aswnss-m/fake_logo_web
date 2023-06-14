import React, { useEffect, useState } from 'react';
import "./QueryHeader.css";

function QueryHeader() {
  const [imageUrl, setImageUrl] = useState('');

  const results = JSON.parse(sessionStorage.getItem("results"));
  const file_id = results.file_id;

  useEffect(() => {
    fetch(`http://localhost:5000/query/${file_id}`)
      .then((response) => response.blob())
      .then((data) => {
        const imgURL = URL.createObjectURL(data);
        setImageUrl(imgURL);
      })
      .catch((error) => {
        console.error('Error retrieving image:', error);
      });
  }, []);

  return (
    <div className='queryHeaderContainer'>
      <div className="queryImage">
        <img src={imageUrl} alt="queryimage" />
        <p>Name</p>
      </div>
      <div className="queryContent">
        <p className="bold">100% matching logo found</p>
        <p className="bold">Genuine Logo</p>
        <p>Since we found 100% matching logo, this means that the logo is registered and authentic</p>
        <p></p>
      </div>
    </div>
  );
}

export default QueryHeader;
