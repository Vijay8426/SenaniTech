import React from 'react';
import { Link } from 'react-router-dom';
import About from './HomeComp/About';
import Accordion from './HomeComp/Accordion';
import CarouselComponent from './HomeComp/CarouselComponent';
const Home=()=>{
    return(
        <div>
    <CarouselComponent/>
    <About/>        
    <Accordion/>
    </div>
    )

}
 export default Home;