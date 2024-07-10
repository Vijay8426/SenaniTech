import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/logocompany.png'; // Adjust the path based on your project structure

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-gray-200 border-gray-200 shadow-lg z-50">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
                <Link to="/">
                    <img src={Image} style={{ width: '180px' }} alt="Company Logo" />
                </Link>
                <button
                    id="mega-menu-toggle"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="mega-menu-full"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                    aria-label="Open main menu"
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    id="mega-menu-full"
                    className={`items-center justify-between font-medium ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 text-lg border border-gray-100 rounded-lg bg-gray-200 md:space-x-20 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="relative">
                            <button
                                id="dropdownNavbarLink"
                                onClick={toggleDropdown}
                                className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                            >
                                Services
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div
                                    id="dropdownNavbar"
                                    className="absolute bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
                                >
                                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link
                                                to="/services/pcb"
                                                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                                            >
                                                PCB Design
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/production-engineering"
                                                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                                            >
                                                Production Engineering
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/services/manufacturing"
                                                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                                            >
                                                Manufacturing Support
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
