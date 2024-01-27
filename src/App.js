import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import LandingIntro from './components/LandingIntro';
import Cards from './components/Cards';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Galerija from './container/galerija';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import Home from './container/home';
import Kontakt from './container/kontakt';
import Cenovnik from './container/cenovnik';
import Footer from './components/Footer';
import bg_Texture from '../src/assets/other/bg-texture.jpg';
 
function App() {
    
  
  return (
    <div className=''>

    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerija" element={<Galerija />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/cenovnik" element={<Cenovnik />} />
      </Routes>
      <Footer />
    </Router>
    </div>
    
    
    
    

  )
}

export default App;
