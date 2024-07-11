import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../image-org/home/Medical Electronics.jpg';
import Image2 from '../../image-org/home/Aerospace Electronics.jpg';
import Image3 from '../../image-org/home/Automobile Electronics.jpg';
import Image4 from '../../image-org/home/Consumer Electronics.jpg';
import Image5 from '../../image-org/home/closeup-computer-parts.jpg';
const Accordion=()=>{
    return (
        <div className="relative font-inter antialiased manrope-regular">
        <main className="relative min-h-screen flex flex-col justify-center bg-gray-100 overflow-hidden">
            <div className="w-full max-w-7xl median:max-w-[82rem] 2xl:max-w-[90rem] mx-auto px-4 md:px-6 median:px-2  py-18">
              <h1 className="text-3xl font-extrabold  sm:text-4xl  text-[#0a4275] py-6">
                Industries We Serve
              </h1>
              
               <div className="group flex max-md:flex-col justify-center gap-2">
                    <article className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300">
                        <Link className="absolute inset-0 text-white z-10 text-center manrope-regular text-2xl " href="#0">
                            <span className="absolute inset-x-0 bottom-0  font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300 ">HealthCare</span>
                        </Link>
                        <img className="object-cover h-72 md:h-[480px] md:w-auto" src={Image1} width="960" height="480" alt="Image 01"/>
                    </article>
                    <article className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300">
                      <Link className="absolute inset-0 text-white z-10 text-center manrope-regular text-2xl " href="#0">
                        <span className="absolute inset-x-0 bottom-0  font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300 ">Defense and Aerospace</span>
                    </Link>                  
                        <img className="object-cover h-72 md:h-[480px] md:w-auto" src={Image2} width="960" height="480" alt="Image 02"/>
                    </article>
                    <article className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300">
                      <Link className="absolute inset-0 text-white z-10 text-center manrope-regular text-2xl " href="#0">
                        <span className="absolute inset-x-0 bottom-0  font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300 ">Automobile</span>
                    </Link>                  
                        <img className="object-cover h-72 md:h-[480px] md:w-auto" src={Image3} width="960" height="480" alt="Image 03"/>
                    </article>       
                    <article className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300">
                      <Link className="absolute inset-0 text-white z-10 text-center manrope-regular text-2xl " href="#0">
                        <span className="absolute inset-x-0 bottom-0  font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300 ">Consumer Electronics</span>
                    </Link>                  
                      <img className="object-cover h-72 md:h-[480px] md:w-auto" src={Image4} width="960" height="480" alt="Image 03"/>
                  </article>    
                  <article className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300">
                    <Link className="absolute inset-0 text-white z-10 text-center manrope-regular text-2xl " href="#0">
                      <span className="absolute inset-x-0 bottom-0  font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300 ">Semiconductor</span>
                  </Link>                   
                    <img className="object-cover h-72 md:h-[480px] md:w-auto" src={Image5} width="960" height="480" alt="Image 03"/>
                </article>                             
               </div>
               
                
            </div>
        </main>
        </div>
    );
}
export default Accordion;