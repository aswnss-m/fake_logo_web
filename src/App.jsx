import './assets/App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import DragDrop from './Components/DragDrop';
import Footer from './Components/Footer';
// import { useState } from 'react';
import Query from './Query';
import { Route,Routes } from 'react-router-dom';

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Routes> 
        <Route path={'/'} element={<DragDrop />} />
        <Route path={'/query'} element={<Query />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
