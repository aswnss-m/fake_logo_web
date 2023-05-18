import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DragDrop.css';

function DragDrop() {
  const [isDragOver, setIsDragOver] = useState(false);
  const navigate = useNavigate();

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    // Perform file upload or further processing here
    console.log('File dropped:', file);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    
    fetch('http://localhost:5000/postImage', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        navigate('/query')
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  };
  

  return (
    <div className={`dragContainer ${isDragOver ? 'dragOver' : ''}`}>
      <div
        className= {'drag'}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileInput"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
          tabIndex={0}
        />
        {!isDragOver &&(<label htmlFor="fileInput" className="selectFileButton">
          <span className="material-symbols-outlined"></span>
          Select File
        </label>)}
        {isDragOver && (
          <span className="dropFileHere">
            Drop the file here
          </span>
        )}
      </div>
    </div>
  );
}

export default DragDrop;
