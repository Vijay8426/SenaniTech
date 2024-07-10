import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (

      <div>
        <Navbar />
        <Routes>
          {/* Define routes for each page/component */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>

  );
}


export default App;