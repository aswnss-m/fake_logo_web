// App.js
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import DragDrop from './Components/DragDrop';
import Footer from './Components/Footer';
import Query from './Query';

function App() {
  const navigate = useNavigate();

  const handleFileSelect = (file) => {
    const formData = new FormData();
    formData.append('image', file);

    fetch('http://localhost:5000/postImage', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        sessionStorage  .setItem("results", JSON.stringify(data))
        navigate('/query');
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route
          path="/"
          element={<DragDrop handleFileSelect={handleFileSelect} />}
        />
        <Route path="/query" element={<Query/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
