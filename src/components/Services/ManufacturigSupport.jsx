import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../../images/hardware.png';
import image2 from '../../images/devops.png';
import image3 from '../../images/engineering.png';
import image4 from '../../images/testing.png';
import image5 from '../../images/prototype.png';
import image6 from '../../images/conveyor.png';
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


function Manufacturing() {
  return (
    <div className="min-h-screen bg-gray-50/50">

        <div className="p-6">
            <h1 className="text-3xl font-bold  sm:text-4xl  text-[#23488f] py-6">
                One stop shop: from concept to production
            </h1>
            <h2 className="text-m font-semibold  sm:text-xl  pt-3 px-8">Benefit from our end-to-end product development capabilities</h2>
            <div className="mt-12">
                <div className="mb-12 grid gap-y-10 gap-x-3 md:grid-cols-2 xl:grid-cols-6">
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                        <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                            <img className="mx-5 my-5" src={image1} alt="Woman looking front"/>
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold">Hardware Design</h2>
                        </div>
                        <div className="p-4 border-t mx-8 mt-2">

                        </div>
                        <p className="block antialiased font-sans text  -base leading-relaxed text-inherit  px-4 text-center pb-5">From layout to schematics, we work on low power designs to complex PCB designs</p>
                    </div>
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                        <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                            <img className="mx-5 my-5" src={image2} alt="Woman looking front"/>
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold">Software Design</h2>
                        </div>
                        <div className="p-4 border-t mx-8 mt-2">

                        </div>
                        <p className="block antialiased font-sans text  -base leading-relaxed text-inherit  px-4 text-center pb-5">Specializing in system design from firmware, drivers, BSP to cloud and application

                        </p>
                    </div>
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                        <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                            <img className="mx-5 my-5" src={image3} alt="Woman looking front"/>
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold">Mechanical Design</h2>
                        </div>
                        <div className="p-4 border-t mx-8 mt-2">

                        </div>
                        <p className="block antialiased font-sans text  -base leading-relaxed text-inherit  px-4 text-center pb-5">Our team is specialized in designing unique, innovative ID designs with precision</p>
                    </div>
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                        <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                            <img className="mx-5 my-5" src={image4} alt="Woman looking front"/>
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold">QA & Testing</h2>
                        </div>
                        <div className="p-4 border-t mx-8 mt-2">

                        </div>
                        <p className="block antialiased font-sans text  -base leading-relaxed text-inherit  px-4 text-center pb-5">We help accelerate service delivery and improve quality with our intelligent automated QA and testing</p>
                    </div>
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                        <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                            <img className="mx-5 my-5" src={image5} alt="Woman looking front"/>
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold">Prototyping</h2>
                        </div>
                        <div className="p-4 border-t mx-8 mt-2">

                        </div>
                        <p className="block antialiased font-sans text  -base leading-relaxed text-inherit  px-4 text-center pb-5">Ensuring faster time to market with our quick prototyping capability</p>
                    </div>
                    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    
                        <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-50">
                            <img className="mx-5 my-5" src={image6}  alt="Woman looking front"/>
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold">Manufacturing</h2>
                        </div>
                        <div className="p-4 border-t mx-8 mt-2">

                        </div>
                        <p className="block antialiased font-sans text  -base leading-relaxed text-inherit  px-4 text-center pb-5">Our strong DFM, DFMA processes help customers convert their protos to mass production in accelerated time to market</p>
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
  )
}

export default Manufacturing;
