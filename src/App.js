import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import 'flowbite/dist/flowbite.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import PCB from './components/HomeComp/PCB';

function App() {
  return (

      <div>
        <Navbar />
        <Routes>
          {/* Define routes for each page/component */}
          <Route path="/" element={<Home />} />
          <Route path="/pcb" element={<PCB />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>

  );
}


export default App;