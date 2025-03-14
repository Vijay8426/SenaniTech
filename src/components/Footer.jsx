import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/logocompany.png';

const Footer = () => {
  const dateRef = useRef(null);

  useEffect(() => {
    const year = () => {
      const currentYear = new Date().getFullYear();
      return currentYear;
    };
    dateRef.current.textContent = `© ${year()} Senanitech`;
  }, []);

  return (
    <footer className="relative mx-auto bg-white pt-20 pb-10 lg:pt-[80px] lg:pb-20 px-10 z-30 max-w-[100rem] manrope-regular">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Logo and Description */}
          <div className="w-full sm:w-2/3 lg:w-4/12 xl:pl-16">
            <div className="w-full mb-10">
              <Link to="/" className="mb-2 inline-block text-center">
                <img src={Image} alt="logo" className="max-w-full" />
              </Link>
              <p className="text-sm font-medium text-body-color mb-7 w-2/3 2xl:text-xl text-black">
                Senanitech is the embedded industry's innovation catalyst, fueling business transformation worldwide.
              </p>
            </div>
          </div>
          {/* Services */}
          <div className="w-full xl:px-4 sm:w-1/2 lg:w-2/12">
            <div className="w-full mb-10">
              <h4 className="sm:text-md md:text-lg median:text-xl font-bold text-black mb-2">Services</h4>
              <ul className="space-y-2 median:space-y-4 text-gray-900">
                <li>
                  <Link to="/services/pcb" className="inline-block font-semibold text-sm md:text-base xl:text-[0.9rem] median:text-[1rem] leading-loose text-body-color hover:text-primary">
                    PCB Design
                  </Link>
                </li>
                <li>
                  <Link to="/services/manufacturing" className="inline-block font-semibold text-sm md:text-base xl:text-[0.9rem] median:text-[1rem] leading-loose text-body-color hover:text-primary">
                    Manufacturing Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Information */}
          <div className="w-full sm:w-1/2 lg:w-3/12 xl:pl-16">
            <div className="w-full mb-10">
              <h4 className="sm:text-sm md:text-lg median:text-xl font-bold text-black mb-2 median:mb-4">Contact</h4>
              <ul className="space-y-5 median:space-y-6 text-gray-900">
                <li>
                  <p className="flex items-center text-sm median:text-[1rem] font-medium text-dark">
                    <span className="mr-3"><i className="fa fa-phone" aria-hidden="true"></i></span>
                    <span className='font-semibold'>+91 9486470817</span>
                  </p>
                </li>
                <li>
                  <p className="flex items-center text-sm median:text-[1rem] font-medium text-dark">
                    <span className="mr-3"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    <span className='font-semibold'>praveenamara@senanitech.com</span>
                  </p>
                </li>
                <li>
                  <p className="flex text-sm median:text-[1rem] font-medium text-dark items-baseline">
                    <span className="mr-3"><i className="fa fa-building" aria-hidden="true"></i></span>
                    <span className='font-semibold'>Vattamalaipalayam N.G.G.O colony, Coimbatore district, Tamilnadu - 641022</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* Follow Us On */}
          <div className="w-full xl:px-4 sm:w-1/2 lg:w-3/12 pl-0 xl:pl-12">
            <div className="w-full mb-10">
              <h4 className="text-sm md:text-lg median:text-xl font-bold text-black mb-2">Follow Us On</h4>
              <div className="flex items-center mb-6 gap-4">
                <Link to="/" className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                  <svg width="8" height="16" viewBox="0 0 8 16" className="fill-current">
                    <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z"></path>
                  </svg>
                </Link>
                <Link to="/" className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                  <svg width="16" height="12" viewBox="0 0 16 12" className="fill-current">
                    <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z"></path>
                  </svg>
                </Link>
                <Link to="/" className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                  <svg width="14" height="14" viewBox="0 0 14 14" className="fill-current">
                    <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z"></path>
                  </svg>
                </Link>
              </div>
              <p className="text-base text-body-color" ref={dateRef}></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 bottom-0 z-[-1]">
          <svg width="217" height="229" viewBox="0 0 217 229" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z" fill="url(#paint0_linear_1179_5)"></path>
            <defs>
              <linearGradient id="paint0_linear_1179_5" x1="76.5" y1="281" x2="76.5" y2="1.22829e-05" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3056D3" stopOpacity="0.08"></stop>
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute top-10 right-10 z-[-1]">
          <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z" fill="url(#paint0_linear_1179_4)"></path>
            <defs>
              <linearGradient id="paint0_linear_1179_4" x1="-1.63917e-06" y1="37.5" x2="75" y2="37.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#13C296" stopOpacity="0.31"></stop>
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
