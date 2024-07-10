import React from 'react';
import './PCB.css'

function RefDev() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
    <div className="bg-cover bg-center text-center overflow-hidden"
        id='RefDev'
        title="Reference Development">
    </div>
    <div className="max-w-3xl mx-auto">
        <div
            className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">Reference Design Development</h1>
                <p className="text-base leading-8 my-5">
                    Working in conjunction with Applications Engineering and Product Marketing groups at its semiconductor clients, PatternPCB develops Customer Reference Boards, Evaluation Boards and Reference Design packages for its clients. SenaniTech’s design and engineering experience in the areas such as High Speed, RF, and/or Mixed Signal design often plays a large hand in the successful and expeditious development of its client’s Reference Boards and Platforms. SenaniTech’s Reference Design solution is tightly integrated with its Contract Manufacturing/Prototyping service. Through this integrated environment, SenaniTech’s customers are able to realize a one stop solution for the engineering and manufacture of a Reference Platform.
                </p>


                <ul className="list-disc ps-6">
                    <li>High Speed Serial designs</li>
                    <li>High Pin count designs (FPGA Arrays, DDR2/3, DSP)</li>
                    <li>Mixed signal designs</li>
                    <li>Fine pitch Devices – Design – Manufacturing - Assembly</li>
                    <li>High Speed Board Technologies - Hybrid Construction</li>
                    <li>Quick turn Designs</li>
                    <li>Feasibility Analysis</li>
                    <li>Schematic Engineering, Board Design & Layout, SI</li>
                    <li>DFM/DFT Implementation</li>
                    <li>Turnkey Board Assembly, Board Bring-up and Functional Testing</li>
                    <li>Complete Fulfilment</li>
                </ul>

            </div>

        </div>
    </div>
</div>
  );
}

export default RefDev;
