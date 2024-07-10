import React from 'react';
import ReferenceImage from '../../image-org/PCB/Reference Design Development.png';

function RefDev() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="bg-cover bg-center text-center overflow-hidden relative" style={{ minHeight: '500px' }}>
        <img
          src={ReferenceImage}
          alt="Reference Design Development"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="absolute inset-0 flex items-center justify-center">

        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
          <h1  className="text-gray-900 font-bold text-3xl mb-2">Reference Design Development</h1>
            <p className="text-base leading-8 my-5">
              Working in conjunction with Applications Engineering and Product Marketing groups at
              its semiconductor clients, PatternPCB develops Customer Reference Boards,
              Evaluation Boards and Reference Design packages for its clients. SenaniTech’s design
              and engineering experience in the areas such as High Speed, RF, and/or Mixed Signal
              design often plays a large hand in the successful and expeditious development of its
              client’s Reference Boards and Platforms. SenaniTech’s Reference Design solution is
              tightly integrated with its Contract Manufacturing/Prototyping service. Through this
              integrated environment, SenaniTech’s customers are able to realize a one stop
              solution for the engineering and manufacture of a Reference Platform.
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
