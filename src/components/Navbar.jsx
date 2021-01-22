import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import logo from '../assets/images/logo.svg';
import hrlogo from '../assets/images/hrlogo.svg';

function Navbar() {
  const [bgNavbar, setBgNavbar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menuItems, setMenuItems] = useState(1);

  const changeNavbar = () => {
    let pos = window.scrollY;

    pos > 80 ? setBgNavbar(true) : setBgNavbar(false);
  };

  window.addEventListener('scroll', changeNavbar);

  return (
    <nav
      className={`fixed w-full z-30 top-0 transition duration-300 ${
        bgNavbar ? 'bg-white shadow-xl' : 'transparent'
      }`}
    >
      <div
        className={`w-full container mx-auto flex flex-wrap items-center justify-between mt-0 ${
          menu ? 'pt-4 lg:pb-4' : 'py-4'
        }`}
      >
        <div className="pl-4 flex items-center">
          <span
            className="cursor-pointer font-bold text-2xl lg:text-4xl"
            onClick={() => {
              scroll.scrollToTop();
              setMenuItems(1);
            }}
          >
            {bgNavbar ? (
              <img
                src={hrlogo}
                className={`lg:max-h-16 max-h-12 transition duration-300 ${
                  bgNavbar ? 'opacity-1' : null
                } `}
                alt="H&R Dev"
              />
            ) : (
              <img
                src={logo}
                className={`lg:max-h-16 max-h-12 transition-all duration-300 ${
                  bgNavbar ? 'opacity-1' : null
                } `}
                alt="H&R Dev"
              />
            )}
          </span>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            className={`flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${
              bgNavbar ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setMenu(!menu)}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menú</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 ${
            !menu ? 'hidden' : null
          }`}
        >
          <ul
            className={`list-reset lg:flex justify-end flex-1 items-center mb-4 lg:mb-0 transition duration-300 ${
              bgNavbar ? 'text-gray-600' : 'lg:text-white text-gray-600'
            }`}
          >
            <li className="mr-3">
              <span
                className={`w-full h-full inline-block no-underline hover:text-gray-800 py-2 px-4 cursor-pointer ${
                  menuItems === 1 ? 'font-bold' : null
                }`}
                onClick={() => {
                  setMenuItems(1);
                  setMenu(false);
                  scroll.scrollToTop();
                }}
              >
                Inicio
              </span>
            </li>
            <li className="mr-3">
              <Link
                className={`w-full h-full inline-block no-underline hover:text-gray-800 py-2 px-4 cursor-pointer ${
                  menuItems === 2 ? 'font-bold' : null
                }`}
                to="about"
                smooth={true}
                duration={1500}
                onClick={() => {
                  setMenuItems(2);
                  setMenu(false);
                }}
              >
                Nosotros
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className={`w-full h-full inline-block no-underline hover:text-gray-800 py-2 px-4 cursor-pointer ${
                  menuItems === 3 ? 'font-bold' : null
                }`}
                to="services"
                smooth={true}
                duration={1500}
                onClick={() => {
                  setMenuItems(3);
                  setMenu(false);
                }}
              >
                Servicios
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className={`w-full h-full inline-block no-underline hover:text-gray-800 py-2 px-4 cursor-pointer ${
                  menuItems === 4 ? 'font-bold' : null
                }`}
                to="projects"
                smooth={true}
                duration={1500}
                onClick={() => {
                  setMenuItems(4);
                  setMenu(false);
                }}
              >
                Proyectos
              </Link>
            </li>
          </ul>
          <Link
            className={`mx-auto lg:mx-0 text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 cursor-pointer shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${
              bgNavbar
                ? 'bg-gradient-to-r from-red-500 via-pink-500 to-purple-400'
                : null
            }`}
            to="contact"
            smooth={true}
            duration={1500}
            onClick={() => {
              setMenu(false);
            }}
          >
            Contacto
          </Link>
        </div>
      </div>
      {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0" /> */}
    </nav>
  );
}

export default Navbar;
