import React, { useState } from 'react';
import './DragDrop.css';

function DragDrop() {
  const [isDragOver, setIsDragOver] = useState(false);

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
    // Perform file upload or further processing here
    console.log('File selected:', file);
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
