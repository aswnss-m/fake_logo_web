import React, { useEffect, useState } from 'react';
import "./QueryHeader.css";

function QueryHeader() {
  const [imageUrl, setImageUrl] = useState('');
  const [queryContent, setQueryContent] = useState('');

  const results = JSON.parse(sessionStorage.getItem("results"));
  const file_id = results.file_id;
  const firstItem = Object.values(results.result)[0];

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

  useEffect(() => {
    const score = Math.floor(firstItem.value * 100);
    if (score >98) {
      setQueryContent('100% original logo');
    } else if (score < 70) {
      setQueryContent('New Logo');
    } else {
      setQueryContent('Likely plagiarized');
    }
  }, [firstItem]);

  return (
    <div className='queryHeaderContainer'>
      <div className="queryImage">
        <img src={imageUrl} alt="queryimage" />
      </div>
      <div className="queryContent">
        <p className="bold">{queryContent}</p>
        {queryContent === '100% original logo' ? (
          <>
            <p>Genuine Logo</p>
            <p>This logo is considered 100% original because it matches an existing registered logo exactly. It is likely a genuine and authentic logo.</p>
          </>
        ) : queryContent === 'New Logo' ? (
          <>
            <p>New Logo</p>
            <p>This logo appears to be a new and unique design as it does not closely resemble any existing registered logos.</p>
          </>
        ) : (
          <>
            <p>Likely Plagiarized</p>
            <p>This logo shows similarities to an existing registered logo, indicating a potential case of plagiarism or infringement. Further investigation may be necessary.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default QueryHeader;
