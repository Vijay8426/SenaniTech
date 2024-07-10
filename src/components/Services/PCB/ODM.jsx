import React from 'react';
import { Link } from 'react-router-dom';
import './PCB.css';
import Image1 from '../../../image-org/PCB/In Circuit Testing.jpg'
import Image2 from '../../../image-org/PCB/Boxbuilding.jpg'
import Image3 from '../../../image-org/PCB/Boxbuilding2.png'

function ODM() {
  return (
<div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
    <div class="bg-cover bg-center text-center overflow-hidden min-h-[500px]" 
        id='ODM'
        title="ODM Solutions">
    </div>
    <div class="max-w-3xl mx-auto">
        <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div class="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                <h1 class="text-gray-900 font-bold text-3xl mb-2">ODM Solutions</h1>
                <p class="text-base leading-8 my-5">
                    By bundling its product engineering and design capabilities with its strong manufacturing infrastructure, PatternPCB offers customers a full ODM solution for a variety of technology platforms.
                </p>

                <h3 class="text-2xl font-bold my-5">Deploying this approach greatly benefits our customers who are seeking to:</h3>

                <p class="text-base leading-8 my-5">
                    Reduce product engineering costs by leveraging our modularly structured service segments through the entire product life-cycle, i.e., from NPI development to product end-of-life (EOL). Reduce product development time with our expertise in new product design. Greatly reduce time to market on new products as well as product upgrades and revisions through our integrated design and manufacturing infrastructure. Focus their internal resources on developing their core technologies and leveraging our services for integrating with other elements required for their product. Gain market share and competitive advantage through increased levels of responsiveness to their customers and market. Respond better to burst demands for capacity and bandwidth for development resources as well as manufacturing.
                </p>

                <blockquote class="border-l-4 text-base italic leading-8 my-5 p-5 font-bold text-gray-600">In-Circuit and Functional Testing</blockquote>

                <Link href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                    <img src={Image1} loading="lazy" alt="In-Circuit Testing" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">In-Circuit and Functional Testing</span>
                </Link>

                <p class="text-base leading-8 my-5">
                    Testing is a crucial step in the production process that often enables us to make the difference. After all, exceptional PCB assembly is all about ever-shrinking margins.
                </p>
                <p class="text-base leading-8 my-5">
                    During in-circuit tests, we measure all of the components on the PCB, and use short- and open tests to inspect the circuits. Our end-of-line functional tests monitor the products based on a wide range of specifications, both the client’s and our own.
                </p>

                <blockquote class="border-l-4 text-base italic leading-8 my-5 p-5 font-bold text-gray-600">Box-Building</blockquote>

                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                    <Link href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src={Image2} loading="lazy" alt="Box Building" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    </Link>
                    
                    <Link href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src={Image3} loading="lazy" alt="Box Building Process" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    </Link>
                </div>

                <p class="text-base leading-8 my-5">
                    Box build, also known as systems integration, is the complete assembly of a customer’s finished product. The process goes beyond the production of printed circuit boards (PCBs), extending to electromechanical assembly that includes enclosure fabrication, installation and routing of cables or wire harnesses, and installation of sub-assemblies and components. The box can refer to a PCB Assembly (PCBA) in a cabinet full of wires, a small enclosure, or a complex, fully integrated electro-mechanical system with pneumatics and electronics.
                </p>

                <blockquote class="border-l-4 text-base italic leading-8 my-5 p-5 font-bold text-gray-600">Supply Chain Management</blockquote>



                <p class="text-base leading-8 my-5">
                    We are providing a turnkey PCB solution for businesses that need electronic products designed and manufactured quickly and efficiently. With our turnkey PCB service, you can save time and resources by letting us take care of the entire PCB production process from start to finish. We have a team of experienced engineers and technicians who specialize in PCB design, fabrication, assembly, and testing. Our services include component sourcing, PCB layout and design, PCB manufacturing, component assembly, functional testing, and final delivery to your doorstep. Our turnkey PCB service is suitable for a wide range of industries, including automotive, aerospace, medical, industrial, telecommunications, and consumer electronics.
                </p>
            </div>
        </div>
    </div>
</div>

  );
}



export default ODM;
