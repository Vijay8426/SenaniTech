import React from 'react';
import { Link } from 'react-router-dom';
import About from './HomeComp/About';
import Accordion from './HomeComp/Accordion';
import CarouselComponent from './HomeComp/CarouselComponent';
import './Home.css';

const Home = () => {
    return (
        <div>
            <CarouselComponent />
            <div className="bg-gray-100 px-14 py-7"> {/* Apply consistent padding */}

                <div className="max-w-7xl median:max-w-[90-rem] 2xl:max-w-[95rem] 4xl:max-w-[98rem] 5xl:max-w-[102rem] 6xl:max-w-[106rem] 7xl:max-w-[110rem] 8xl:max-w-[114rem] 9xl:max-w-[118rem] 10xl:max-w-[122rem]  mx-auto"> {/* Optional max width for better control */}
                    <About />
                    <Accordion />
                </div>
            </div>
        </div>
    );
}

export default Home;
