import React from 'react';
import ATEBoardImage from '../../image-org/PCB/ATE Board Solution.jpeg'; // Ensure the correct path to your image

function ATE() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="bg-cover bg-center text-center overflow-hidden relative" style={{ minHeight: '500px' }}>
        <img
          src={ATEBoardImage}
          alt="Reference Design Development"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="absolute inset-0 flex items-center justify-center">

        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-5 sm:p-10">
          <h1 className="text-gray-900 font-bold text-3xl mb-2">ATE Solution</h1>
          <p className="text-base leading-8 my-5">
            SenaniTech’s expertise in the design and manufacture of ATE board hardware runs
            both broad and deep. SenaniTech has specialized design teams with knowledge and
            experience across all the major tester platforms. The manufacturing and test
            process for ATE boards at SenaniTech is honed to produce the highest in quality
            and reliability. SenaniTech’s customer base in this business sector includes
            several of the world’s leading semiconductor companies and serves as testimony to
            its success and commitment to customer satisfaction in this area.
          </p>

          <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 font-bold text-black">
            Type of ATE Hardware
          </blockquote>
          <ul className="list-disc ps-6">
            <li>Universal Probe cards</li>
            <li>Device interface board (DIB)</li>
            <li>Handler Interface Boards (HIB)</li>
            <li>Probe interface boards (PIB)</li>
            <li>Load boards</li>
            <li>Characterization Boards</li>
          </ul>

          <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 font-bold text-black">
            Box-Building
          </blockquote>
          <ul className="list-disc ps-6">
            <li>Impedance matching to 50 ohm and Length matching to zero tolerance</li>
            <li>Cadence Allegro, Mentor Expedition, PADS, Altium</li>
            <li>Ansoft HFSS, Spectraquest with IBIS and HSPICE models</li>
            <li>PCB materials, stackup, placement, and routing guidelines</li>
            <li>Return loss and Insertion Loss simulation</li>
            <li>Crosstalk analysis</li>
            <li>Eye Diagrams for critical nets</li>
            <li>Pre and Post Layout Analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ATE;
