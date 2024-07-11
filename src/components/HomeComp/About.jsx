import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/about us.jpeg';

function About() {
  return (
    <section className="bg-gray-100 manrope-regular py-12">
      <div className="container mx-auto px-8 lg:px-8 xl:px-10 2xl:px-16  ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-0 ">
          <div className="md:max-w-lg ">
            <h2 className="text-3xl font-extrabold text-[#0a4275] text-center">About Us</h2>
            <p className="mt-4 text-gray-600 sm:text-lg 2xl:text-xl lg:leading-loose median:text-xl">
              Senanitech is the embedded industry's innovation catalyst, fueling business transformation worldwide. Our specialization lies in providing tailored services and end-to-end support, empowering customers to shape the future of embedded systems and electronics manufacturing.
            </p>
            <div className="mt-8 text-center" >
              <Link to="#" className="text-blue-500 hover:text-blue-600 font-medium ">
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <img src={Image} alt="About Us Image" className="w-full h-auto object-cover rounded-lg shadow-md"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
