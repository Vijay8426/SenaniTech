import React from 'react'
import './PCB.css'
import Image1 from '../../../image-org/PCB/PCB Assembly.jpg'

function NPI() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="bg-cover bg-center text-center overflow-hidden"
           id='NPI'
            title="Woman holding a mug">
        </div>
        <div className="max-w-3xl mx-auto">
            <div
                className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                    <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">Contract Manufacturing & NPI Solutions</h1>
                    <p className="text-base leading-8 my-5">
                        SenaniTech is an ISO 9001 registered full service Contract Manufacturer (CM), committed to the highest standards of excellence in quality and manufacturing. In conjunction with its NPI services, SenaniTech offers its customers a highly integrated environment to move from prototype to production in dramatically compressed time frames. SenaniTech offers its clients a comprehensive approach to New Product Prototyping – typically picking up the new product design at the schematic stage and delivering a small number of tested prototypes on a quick turnaround basis. On the design and layout phase, SenaniTech deploys an integrated design platform that includes board simulation to ensure the design’s signal integrity. With a majority of operations performed in-house - at a high degree of efficiency, SenaniTech achieves a very high level of customer satisfaction on both quality as well as its delivery commitments.
                    </p>
    
    
                    <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 font-bold text-black-600">Schematic Capture 
                    </blockquote>
                    <p className="text-base leading-8 my-5">
                        SenaiTech can process schematics in a variety of industry standard tools, including ORCAD and Cadence Concept. If required, SenaiTech will engineer the schematic from block diagrams supplied by the customer.
                    </p>
                    <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 font-bold text-black-600">Board Layout of Design Platforms 
                    </blockquote>
                    <p className="text-base leading-8 my-5">
                        SenaniTech’s design team is highly proficient in a variety of layout technologies, including High Speed design and Analog RF design. SenaniTech offers its customers a choice of Cadence Allegro and Mentor PADS as platforms for design layout.
                    </p>
                    <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 font-bold text-black-600">Signal Integrity Analysis
                    </blockquote>
                    <p className="text-base leading-8 my-5">
                        SenaniTech deploys Cadence’s simulation tool, SpectraQuest for both pre and post route analysis. Deploying the signal integrity check, particularly for complex designs, can cut down on the total development cycle by reducing the risk of prototype “re-spins”.
                    </p>
                    <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 font-bold text-black-600">DFM
                    </blockquote>
                    <p className="text-base leading-8 my-5">
                        SenaniTech deploys the ECAM tool to surface DFM issues at both the PCB as well as assembly levels.
                    </p>
                    <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 font-bold text-black-600">DFT
                    </blockquote>
                    <p className="text-base leading-8 my-5">
                        SenaniTech’s deploys a full-fledged ERP backed Material Management system to help coordinate the just-in-time procurement of components. SenaniTech has broad access and long standing relationships with component distributors and manufacturers to help track down and procure long lead time parts in a timely manner. SenaniTech audits and qualifies its key suppliers, particularly its PCB vendors, on a frequent basis to ensure superior quality and technical compliance.
                    </p>
                    <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 font-bold text-black-600">Assembly 
                    </blockquote>
                    <a href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                    <img src={Image1} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    
                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>
                </a>
                    <p className="text-base leading-8 my-5">
                        SenaniTech’s highly experienced manufacturing staff in conjunction with its state-of-the-art assembly shop is well equipped to respond to the most challenging of board assemblies. A short list of assembly capabilities is listed below.
                    </p>
                    <ul className="list-disc ps-6">
                        <li>Fine pitch assembly down to 0201/01005 size components</li>
                        <li>High accuracy placement – down to 12mil pitch devices</li>
                        <li>Flex Circuit Assembly Expertise</li>
                        <li>Sequential assembly for systematic board bring-up</li>
                        <li>uBGA Assembly, Rework, X-Ray</li>
                        <li>BGA, uBGA placement, re-ball and rework</li>
                        <li>High intensity X-Ray inspection – including metallic and ceramic BGAs</li>
                        <li>Test & Debug</li>
                    </ul>
                    <p className="text-base leading-8 my-5">
                        SenaniTech recommends JTAG testing for boards that have BGA devices, particularly BGA devices with a fine pitch and/or a high pin count. SenaniTech will implement the scan chain during the design layout phase to maximize test coverage. SenaniTech will also develop the test program for testing and debugging the assembled prototype, thus ensuring the delivery of a prototype set that is fully tested and ready to power-up for functional evaluation.  Flying probe test is another option that SenaniTech offers its contract manufacturing clients.
                    </p>
    
                </div>
    
            </div>
        </div>
    </div>
  )
}

export default NPI