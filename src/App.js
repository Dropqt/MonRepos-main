import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import LandingIntro from './components/LandingIntro';
import Cards from './components/Cards';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
 
function App() {

  
  return (
    <div>
      <Navbar/>
      <LandingIntro/>
      <Cards/>
      <Gallery/>
      <Contact/>
    </div>

  )
}

export default App;
