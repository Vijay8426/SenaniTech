import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import 'flowbite/dist/flowbite.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import PCB from './components/HomeComp/PCB';
import RefDev from './components/Services/PCB/RefDev';
import ATE from './components/Services/PCB/ATE';
import Reliablity from './components/Services/PCB/Reliablity';
import NPI from './components/Services/PCB/NPI';
import ODM from './components/Services/PCB/ODM';
import Manufacturing from './components/Services/ManufacturigSupport';

function App() {
  return (

      <div>
        <Navbar />
        <Routes>
          {/* Define routes for each page/component */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services/pcb" element={<PCB />} />
          <Route exact path='/services/pcb/refdev' element={<RefDev/>}/>
          <Route exact path='/services/pcb/ate' element={<ATE/>}/>
          <Route exact path='/services/pcb/reliablity' element={<Reliablity/>}/>
          <Route exact path='/services/manufacturing' element={<Manufacturing/>}/>
          <Route exact path='/services/pcb/npi' element={<NPI/>}/>
          <Route exact path='/services/pcb/odm' element={<ODM/>}/>
          <Route exact path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>

  );
}


export default App;