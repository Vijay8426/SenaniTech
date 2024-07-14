import React from 'react'
import './AboutUs.css'
import Image1 from '../images/about us.jpeg'
import Image2 from '../image-org/About/Pcb designer.jpg'
import Client1 from '../image-org/About/Clients/Client-1.png';
import Client2 from '../image-org/About/Clients/Client-2.png';
import Client3 from '../image-org/About/Clients/Client-3.png';
import Client4 from '../image-org/About/Clients/Client-4.png';
import Client5 from '../image-org/About/Clients/Client-5.png';
import Client6 from '../image-org/About/Clients/Client-6.png';
import Client7 from '../image-org/About/Clients/Client-7.png';
import Client8 from '../image-org/About/Clients/Client-8.png';
import Client9 from '../image-org/About/Clients/Client-9.png';
import Client10 from '../image-org/About/Clients/Client-10.png';
function AboutUs() {
  return (
    <div >
<section className="w-full mx-auto py-10 dark:bg-gray-900 dark:text-white px-6">
  <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600 dark:border-yellow-600">
    About Us
  </div>

  <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-wrap lg:flex-nowrap gap-4 justify-center items-stretch mt-4">
    <div className="lg:w-[50%] w-full flex-grow">
      <img className="rounded-lg w-full h-full object-cover" src={Image1} alt="billboard image" />
    </div>
    <div className="lg:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 p-4 rounded-md flex flex-col">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Who we are?</h2>
      <p className="text-md mt-4">
        SenaniTech is a preeminent provider of Board level solutions to the semiconductor industry. With established expertise in the design and manufacture of Reference Boards, Evaluation Boards, ATE Test Interface Boards, and Burn-in Boards, SenaniTech provides a comprehensive one stop solution for all board level needs to the world’s leading semiconductor firms.
      </p>
      <p className="text-md mt-4">
        SenaniTech’s integrated approach from design engineering through manufacturing, all under one roof, yields dramatic compression in time to market coupled with lowest total cost of ownership for projects and programs for its customers.
      </p>
    </div>
  </div>

  <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-wrap lg:flex-nowrap gap-4 justify-center items-stretch mt-6">
    <div className="w-full lg:hidden">
      <img className="rounded-lg w-full" src={Image2} alt="billboard image" />
    </div>
    <div className="lg:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 p-4 rounded-md flex flex-col">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">What we do?</h2>
      <p className="text-md mt-4">
        SenaniTech’s leading edge capabilities in board design and contract manufacturing has enabled it to extend its services beyond the semiconductor industry, into medical devices, networking, aerospace, and defense, among others. We offer end-to-end services in the field of Embedded Systems. Our services start from product design requirement gathering, Product Idea Validation, Schematic Design, Hardware Design, Firmware & Software Development, Prototype Development, Application Development, Product Testing, Fixing bugs in the production and help clients to get Certification for the new products.
      </p>
    </div>
    <div className="lg:w-[50%] w-full hidden lg:block">
      <img className="rounded-lg w-full h-full object-cover" src={Image2} alt="billboard image" />
    </div>
  </div>
</section>



  <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
            High Work Achievement
        </h1>
        <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
            <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
            <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />

            <div className="shadow-lg xl:p-6 p-4 w-48  bg-white sm:absolute relative z-20   left-0 xl:ml-56 sm:ml-12 xl:-mt-40 ml-5 ">
                <p className="text-3xl font-semibold text-gray-800">250+</p>
                <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Locations Served</p>
            </div>
            <div className="shadow-lg xl:p-6 p-4 w-48    bg-white sm:absolute relative z-20  mt-4 xl:mt-80  xl:-ml-0 ml-40">
                <p className    ="text-3xl font-semibold text-gray-800">5K+</p>
                <p className    ="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Satisfied Customers</p>
            </div>
            <div className  ="shadow-lg xl:p-6 p-4  w-48 bg-white sm:absolute relative z-20 md:mt-0  mt-4 right-0 xl:mr-56 ml-64 ">
                <p className    ="text-3xl font-semibold text-gray-800">25+</p>
                <p className    ="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Years of Expertise</p>
            </div>
            
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-24">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">
            100+
          </h6>
          <p className="mb-2 font-bold text-md">Projects Completed</p>

        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">
            50+
          </h6>
          <p className="mb-2 font-bold text-md">Satisfied Customer</p>

        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">100+</h6>
          <p className="mb-2 font-bold text-md">Year of Combined Experience</p>

        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">10+</h6>
          <p className="mb-2 font-bold text-md">Designers & Engineers</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">100%</h6>
          <p className="mb-2 font-bold text-md">Customer Satisfaction</p>
        </div>
      </div>
    </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-5xl md:px-12 lg:px-0 lg:py-10">
  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-5xl md:mb-12">
    <div></div>
    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      <span className="relative inline-block">
        <svg
          viewBox="0 0 52 24"
          fill="currentColor"
          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
        >
          <defs>
            <pattern
              id="9012817d-af60-45bb-9786-89646bc1c945"
              x="0"
              y="0"
              width=".135"
              height=".30"
            >
              <circle cx="1" cy="1" r=".7" />
            </pattern>
          </defs>
          <rect
            fill="url(#9012817d-af60-45bb-9786-89646bc1c945)"
            width="52"
            height="24"
          />
        </svg>
        <span className="relative">Why</span>
      </span>{' '}
      choose SenaniTech
    </h2>
  </div>
  <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-4">
    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
      <div className="mr-2">
        <svg
          className="w-6 h-12 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
      <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
        24x7 Design Support
      </span>
    </div>
    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
      <div className="mr-2">
        <svg
          className="w-6 h-12 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
      <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
        Complete Turnkey solution.
      </span>
    </div>
    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
      <div className="mr-2">
        <svg
          className="w-6 h-12 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
      <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
        FPGA Design Expertise
      </span>
    </div>
    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
      <div className="mr-2">
        <svg
          className="w-6 h-12 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
      <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
        Save on R&D time
      </span>
    </div>
    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
      <div className="mr-2">
        <svg
          className="w-6 h-12 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
      <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
        Save on R&D Cost
      </span>
    </div>
    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
      <div className="mr-2">
        <svg
          className="w-6 h-12 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
      <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
        Cross Domain Expertise
      </span>
    </div>
    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
      <div className="mr-2">
        <svg
          className="w-6 h-12 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
      <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
        Concept to Manufacturing
      </span>
    </div>
 
    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
      <div className="mr-2">
        <svg
          className="w-6 h-12 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
      <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
        Working along with engineers, understand the high demand of dynamic changes required and support the same
      </span>
    </div>
    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
      <div className="mr-2">
        <svg
          className="w-6 h-12 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
      <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
        Warranty for manufacturing defects for a period of 1 year with free rework support.
      </span>
    </div>
    <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
      <div className="mr-2">
        <svg
          className="w-6 h-12 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
      <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
        The time spent by our customer’s engineers in identifying assembly related issues is very low, thereby increasing our customer’s productivity and savings in time and cost.
      </span>
    </div>
  </div>
</div>
<section className="py-10 relative bg-white sm:py-16 lg:py-24 lg:pt-36">
    <svg id="visual" viewBox="0 0 2000 600" className="w-full absolute top-0 left-0 z-0" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1">
        <path d="M0 18L65 18L65 66L129 66L129 37L194 37L194 44L258 44L258 25L323 25L323 35L387 35L387 36L452 36L452 38L516 38L516 34L581 34L581 26L645 26L645 68L710 68L710 32L774 32L774 27L839 27L839 29L903 29L903 31L968 31L968 83L1032 83L1032 65L1097 65L1097 57L1161 57L1161 66L1226 66L1226 90L1290 90L1290 66L1355 66L1355 32L1419 32L1419 35L1484 35L1484 18L1548 18L1548 94L1613 94L1613 96L1677 96L1677 72L1742 72L1742 88L1806 88L1806 42L1871 42L1871 46L1935 46L1935 33L2000 33L2000 18L2000 0L2000 0L1935 0L1935 0L1871 0L1871 0L1806 0L1806 0L1742 0L1742 0L1677 0L1677 0L1613 0L1613 0L1548 0L1548 0L1484 0L1484 0L1419 0L1419 0L1355 0L1355 0L1290 0L1290 0L1226 0L1226 0L1161 0L1161 0L1097 0L1097 0L1032 0L1032 0L968 0L968 0L903 0L903 0L839 0L839 0L774 0L774 0L710 0L710 0L645 0L645 0L581 0L581 0L516 0L516 0L452 0L452 0L387 0L387 0L323 0L323 0L258 0L258 0L194 0L194 0L129 0L129 0L65 0L65 0L0 0Z" fill="#eaeaea" stroke-linecap="square" stroke-linejoin="miter"></path>
    </svg>

    <div className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-black sm:text-4xl sm:leading-tight">Our Valuable Clients

            </h2>
        </div>

        <div className="grid items-center max-w-8xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-5">
            <div className="bg-white h-40 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-24 mx-auto" src={Client1} alt=""/>
            </div>

            <div className="bg-white h-40 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-[10rem] mx-auto" src={Client2} alt=""/>
            </div>

            <div className="bg-white h-40 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-[10rem] mx-auto" src={Client3} alt=""/>
            </div>

            <div className="bg-white h-40 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full mx-auto h-[10rem]" src={Client4} alt=""/>
            </div>

            <div className="bg-white h-40 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-24 mx-auto" src={Client5} alt=""/>
            </div>

            <div className="bg-white h-40 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-[10rem] mx-auto" src={Client6} alt=""/>
            </div>

            <div className="bg-white h-40 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-24 mx-auto" src={Client7} alt=""/>
            </div>

            <div className="bg-white h-40 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-24 mx-auto" src={Client8} alt=""/>
            </div>

            <div className="bg-white h-40 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full h-24 mx-auto" src={Client9} alt=""/>
            </div>

            <div className="bg-white h-40 flex shadow-lg items-center justify-center">
                <img className="object-contain w-full mx-auto h-24" src={Client10} alt=""/>
            </div>


        </div>

 
    </div>
</section>



</div>
  )
}

export default AboutUs