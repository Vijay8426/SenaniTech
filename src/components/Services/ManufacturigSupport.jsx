import React from 'react'
import CarouselComponent from '../HomeComp/CarouselComponent';
import { Link } from 'react-router-dom';
import image1 from '../../images/motherboard.png';
import image2 from '../../images/prototype (2).png';
import image3 from '../../images/plan.png';
import image4 from '../../images/factory.png';
import image5 from '../../images/checklist.png';
import image6 from '../../images/pcb.png';
import image7 from '../../images/pcb-assembly.jpeg';
import image8 from '../../images/product-assembly.jpeg';
import image9 from '../../images/rapid-proto.jpeg';
import image10 from '../../images/validation.jpeg';
import image11 from '../../images/route.png';
import image12 from '../../images/cctv-camera.png';
import image13 from '../../images/smartwatch.png';
import image14 from '../../images/wifi.png';
import image15 from '../../images/smart-house.png';
import image16 from '../../images/information-technology.png';
import image17 from '../../images/heart-rate.png';
import image18 from '../../images/smart-home.png';
import Mmnufacturing from '../../image-org/home/Carousel-images/Manufacturing_Image 1.jpg';
import Production from  '../../image-org/home/Carousel-images/Manufacturing_Image 1.jpg';
import PCB from  '../../image-org/home/Carousel-images/Manufacturing_Image 1.jpg';
import '../HomeComp/Carousel.css';


function Manufacturing() {
  return (
    <div className="">
            <div className="slider rounded-xl poppins-regular">

      <div className="list">
        <div className="item active">
          <img src={PCB} alt="PCB Design" />
          <div className="content">
            <p></p>
            <h2 className="poppins-medium">Manufacturing Support</h2>
            <p>
              
SenaniTech provides top-tier manufacturing support for the semiconductor industry, ensuring seamless production of high-quality boards. Our state-of-the-art facilities and skilled workforce guarantee precision and reliability in every project. From prototyping to full-scale production, we manage all aspects of manufacturing to meet stringent industry standards.
            </p>
          </div>
        </div>

      </div>


    </div>
    <div className="min-h-screen bg-gray-100 pb-5 max-w-[114rem] mx-auto">
       


        <div className="p-6">
            <h1 className="text-3xl font-bold  sm:text-4xl  text-[#23488f] py-6">
                One stop shop: from concept to production
            </h1>
            <h2 className="text-m font-semibold  sm:text-xl  pt-3 px-8">Benefit from our end-to-end product development capabilities</h2>
            <div className="mt-12">
                <div className="mb-12 grid gap-y-10 gap-x-3 md:grid-cols-2 xl:grid-cols-6">
                <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                    <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                        <img className="mx-5 my-5" src={image2} alt="Woman looking front"/>
                    </div>
                    <div className="text-center mt-2">
                        <h2 className="font-semibold text-[#232a8f]">Concept</h2>
                    </div>
                    <div className="p-4 border-t mx-8 mt-2">

                    </div>
                    <ul className='block antialiased font-sans text-base leading-relaxed text-inherit  pl-10 list-disc'>
                        <li>Concept Validation
                        </li>
                        <li>Product Specification Development
                        </li>
                        <li>System Architecture
                        </li>
                    </ul>
                </div>
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                        <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                            <img className="mx-5 my-5" src={image1} alt="Woman looking front"/>
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold text-[#23488f]">Hardware Design & Firmware Development
                            </h2>
                        </div>
                        <div className="p-1 border-t mx-8 mt-2">

                        </div>
                        <ul className='block antialiased font-sans text-base leading-relaxed text-inherit  pl-10 list-disc'>
                        <li>HW High & Low Level Design

                        </li>

                        <li>Component Engineering

                        </li>
                        <li>Board Bring-Up
                        </li>
                        <li>Testing
                        </li>
                        <li>Firmware Development
                        </li>
                        <li>
                            Driver Development
                        </li>
                    </ul>
                    </div>
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                    <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                        <img className="mx-5 my-5" src={image6}  alt="Woman looking front"/>
                    </div>
                    <div className="text-center mt-2">
                        <h2 className="font-semibold text-[#23488f]">PCB Design</h2>
                    </div>
                    <div className="p-4 border-t mx-8 mt-2">


                    </div>
                    <ul className='block antialiased font-sans text-base leading-relaxed text-inherit  pl-10 list-disc'>
                        <li>PCB Layout Design
                        </li>
                        <li>Signal / Power / Thermal Integrity Analysis

                        </li>
                        <li>High-Speed Design (HDI and ATI Boards)

                        </li>
                    </ul>
                    
                </div>

                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                        <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                            <img className="mx-5 my-5" src={image3} alt="Woman looking front"/>
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold text-[#23488f]">Mechanical Design and Development</h2>
                        </div>
                        <div className="p-1 border-t mx-8 mt-2">

                        </div>
                        <ul className='block antialiased font-sans text-base leading-relaxed text-inherit  pl-10 list-disc'>
                        <li>Enclosure Design

                        </li>
                        <li>Mechanical / Industrial Design

                        </li>
                        <li>Enclosure Fabrication

                        </li>
                        <li>
                        Mass Fabrication for SS,MS

                        </li>
                    </ul>
                        
                    </div>
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                        <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                            <img className="mx-5 my-5" src={image4} alt="Woman looking front"/>
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold text-[#23488f]">Electronics and Manufacturing Service                            </h2>
                        </div>
                        <div className="p-1 border-t mx-8 mt-2">

                        </div>
                        <ul className='block antialiased font-sans text-base leading-relaxed text-inherit  pl-10 list-disc'>
                        <li>Printed Circit Board Manufacturing 

                        </li>
                        <li>Printed Circit Board Assembly

                        </li>

                    </ul>
                        
                    </div>
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                        <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                            <img className="mx-5 my-5" src={image5} alt="Woman looking front"/>
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold text-[#23488f]">Box Building /
Regulatory Compliance
</h2>
                        </div>
                        <div className="p-1 border-t mx-8 mt-2">

                        </div>
                        <ul className='block antialiased font-sans text-base leading-relaxed text-inherit  pl-10 list-disc'>
                            <li>Power ON Testing
                            </li>
                            <li>Box Building 
                            </li>
                            <li>Cable Harness
                            </li>
                            <li>EMI/EMC Consulting 
                            </li>
                        </ul>
                    </div>



                

                </div>
            </div>


            <div className="bg-gray-100 dark:bg-gray-800  h-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <h1 className="text-3xl font-bold  sm:text-4xl  text-[#23488f] py-6 px-4">
                Manufacturing capabilities
                </h1>

        
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                    <Link href="#"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src={image7}  loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>
        
                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">PCB Assembly</span>
                    </Link>
                    <Link href="#"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src={image8}  loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>
        
                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Product Assembly</span>
                    </Link>
                    <Link href="#"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src={image9} loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>
        
                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tool, mold and rapid proto facility</span>
                    </Link>
                    <Link href="#"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src={image10} loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>
        
                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Testing, validation and certification</span>
                    </Link>
                </div>
            </div>
        </div>
            
            
        </div>

    <div className="container relative z-40 mx-auto mt-12">
    <h1 className="text-3xl font-bold  sm:text-4xl  text-[#23488f] py-6 px-4">
    Product we manufacture
    </h1>


    <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">

    <Link href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
        <div>
            <img src={image11} className="block mx-auto"/>

            <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Trackers
            </p>
        </div>
    </Link>

    <Link href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
        <div>
            <img src={image12} className="block mx-auto"/>

            <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Cameras
            </p>
        </div>
    </Link>

    <Link href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
        <div>
            <img src={image13} className="block mx-auto" />

            <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Wearables & Hearables
            </p>
        </div>
    </Link>

    <Link href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
        <div>
            <img src={image14} className="block mx-auto"/>

            <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Wi-Fi Products
            </p>
        </div>
    </Link>

    <Link href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
        <div>
            <img src={image15} className="block mx-auto"/>

            <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Smart Home Appliances
            </p>
        </div>
    </Link>

    <Link href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
        <div>
            <img src={image16} className="block mx-auto"/>

            <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                IT Hardware
            </p>
        </div>
    </Link>

    <Link href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
        <div>
            <img src={image17} className="block mx-auto"/>

            <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Smart Medical Products
            </p>
        </div>
    </Link>

    <Link href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
        <div>
            <img src={image18} className="block mx-auto"/>

            <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                Smart Energy Products
            </p>
        </div>

    </Link>

    </div>

    </div>
    </div>
    </div>
  )
}

export default Manufacturing;
