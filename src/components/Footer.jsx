import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import hrlogo from '../assets/images/hrlogo.svg';

function Footer() {
  return (
    <div className="bg-white">
      <div className="container mx-auto pt-8 px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 md:items-center md:justify-center mb-6 md:mb-0 text-black">
            <span
              className="flex md:items-center md:w-full md:h-full text-pink-600 cursor-pointer font-bold text-2xl lg:text-4xl"
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              <img
                src={hrlogo}
                className="lg:max-h-16 max-h-12 transition duration-300"
                alt="H&R Dev"
              />
            </span>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://web.whatsapp.com/send?phone=573134810480&text=Hola+que+tal,+tengo+una+consulta+acerca+de:&app_absent=0"
                  rel="noreferrer"
                  target="_blank"
                  className="no-underline hover:underline text-gray-800 hover:text-purple-700"
                >
                  FAQ
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://web.whatsapp.com/send?phone=573134810480&text=Hola+que+tal,+necesito+ayuda+en:&app_absent=0"
                  rel="noreferrer"
                  target="_blank"
                  className="no-underline hover:underline text-gray-800 hover:text-purple-700"
                >
                  Help
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://web.whatsapp.com/send?phone=573134810480&text=Hola+que+tal,+tengo+inconvenientes+con+mi+servicio+de:&app_absent=0"
                  rel="noreferrer"
                  target="_blank"
                  className="no-underline hover:underline text-gray-800 hover:text-purple-700"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://facebook.com"
                  rel="noreferrer"
                  target="_blank"
                  className="no-underline hover:underline text-gray-800 hover:text-purple-700"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://linkedin.com"
                  rel="noreferrer"
                  target="_blank"
                  className="no-underline hover:underline text-gray-800 hover:text-purple-700"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://twitter.com"
                  rel="noreferrer"
                  target="_blank"
                  className="no-underline hover:underline text-gray-800 hover:text-purple-700"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="about"
                  smooth={true}
                  duration={1500}
                  className="cursor-pointer hover:underline text-gray-800 hover:text-purple-700"
                >
                  Acerca de Nosotros
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="services"
                  smooth={true}
                  duration={1500}
                  className="cursor-pointer hover:underline text-gray-800 hover:text-purple-700"
                >
                  Servicios
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="contact"
                  smooth={true}
                  duration={1500}
                  className="cursor-pointer hover:underline text-gray-800 hover:text-purple-700"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-gray-500 w-full py-1 text-center">
        &copy; {new Date().getFullYear()} H&R Development, Colombia.{' '}
      </div>
    </div>
  );
}

export default Footer;
