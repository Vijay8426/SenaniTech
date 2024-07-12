  import React from 'react';
  import { Link } from 'react-router-dom';
  import Image from '../../images/about us.jpeg';

  function About() {
    return (
      <section className="bg-gray-100 manrope-regular ">
        <div className="container    ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-0 ">
            <div className="md:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl 5xl:max-w-4xl 6xl:max-w-5xl 7xl:max-w-6xl 8xl:max-w-7xl  ">
              <h2 className="text-3xl font-extrabold text-[#0a4275] text-center ">About Us</h2>
              <p className="mt-4 text-gray-600 sm:text-lg 2xl:text-xl 3xl:text-2xl   lg:leading-loose median:text-xl 3xl:leading-relaxed text-balance">
                Senanitech is the embedded industry's innovation catalyst, fueling business transformation worldwide. Our specialization lies in providing tailored services and end-to-end support, empowering customers to shape the future of embedded systems and electronics manufacturing.
                <span className="hidden 6xl:block ">
  Our expertise encompasses a wide range of tailored services, meticulously designed to meet the unique needs of our clients.
</span>

              </p>
              <div className="mt-8 text-center" >
                <Link to="#" className="text-blue-500 hover:text-blue-600 font-medium 2xl:text-xl">
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
