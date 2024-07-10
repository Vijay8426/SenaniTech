import React from 'react';
import { Link } from 'react-router-dom';
import About from './HomeComp/About';
import Accordion from './HomeComp/Accordion';
import Carousel from './HomeComp/Carousel';
const Home=()=>{
    return(
        <div>
    <Carousel/>
    <About/>        
    <Accordion/>
    </div>
    )

}
 export default Home;