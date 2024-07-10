import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import exampleImage1 from '../../images/Consumer_Electronics.jpg'; // Replace with your actual image paths
import exampleImage2 from '../../images/automobile-industry.webp';
import exampleImage3 from '../../images/ODM.webp';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <Slider {...settings}>
        <div className="relative">
          <img src={exampleImage1} alt="First slide" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-4">
            <h3 className="text-white text-lg font-bold">First slide label</h3>
            <p className="text-gray-300">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className="relative">
          <img src={exampleImage2} alt="Second slide" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-4">
            <h3 className="text-white text-lg font-bold">Second slide label</h3>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="relative">
          <img src={exampleImage3} alt="Third slide" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-4">
            <h3 className="text-white text-lg font-bold">Third slide label</h3>
            <p className="text-gray-300">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;