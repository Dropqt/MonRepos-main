// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './container/home';
import Galerija from './container/galerija';
import Kontakt from './container/kontakt';
import Cenovnik from './container/cenovnik';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; // Add a CSS file for styling
import StickyButtons from './components/StickyButtons/StickyButtons';

function App() {
  return (
    <div className='app-container overflow-clip roboto-medium'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/cenovnik" element={<Cenovnik />} />
        </Routes>
        <Footer />
        <StickyButtons />
      </Router>
    </div>
  );
}

export default App;
