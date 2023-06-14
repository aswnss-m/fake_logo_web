import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DragDrop.css';

function DragDrop({ handleFileSelect }) {
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
    handleFileSelect(file);
    console.log('File dropped:', file);
  };

  const handleInputFileSelect = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  return (
    <div className={`dragContainer ${isDragOver ? 'dragOver' : ''}`}>
      <div
        className="drag"
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileInput"
          accept=".png, .jpg, .jpeg"
          onChange={handleInputFileSelect}
          style={{ display: 'none' }}
          tabIndex={0}
        />
        {!isDragOver && (
          <label htmlFor="fileInput" className="selectFileButton">
            <span className="material-symbols-outlined"></span>
            Select File
          </label>
        )}
        {isDragOver && <span className="dropFileHere">Drop the file here</span>}
      </div>
    </div>
  );
}

export default DragDrop;
