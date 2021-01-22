import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import myriam from '../assets/images/myriam.webp';
import eagle from '../assets/images/eagle.webp';
import marco from '../assets/images/marco.webp';

function Projects() {
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          draggable: true,
        },
      },
    ],
  };

  return (
    <div id="projects" className="bg-white text-gray-800 py-8">
      <h1 className="w-full py-2 text-5xl font-bold leading-tight text-center">
        Algunos de nuestros trabajos
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <Slider {...settings}>
        <div>
          <a
            href="https://ancient-hamlet-20687.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={eagle}
              className="w-32 rounded-full shadow-xl"
              alt="Eagle Insitute"
            />
          </a>
        </div>
        <div>
          <a
            href="https://coach-myriam.web.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={myriam}
              className="w-32 rounded-full shadow-xl"
              alt="Coach Myriam"
            />
          </a>
        </div>
        <div>
          <a
            href="https://marcoarquitectonico.com.co/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={marco}
              className="w-32 rounded-full shadow-xl"
              alt="Marco Arqutectónico"
            />
          </a>
        </div>
        <div>
          <a
            href="https://hr-store-dev.web.app/"
            rel="noreferrer"
            target="_blank"
          >
            <span className="w-32 h-32 flex items-center justify-center text-white font-semibold gradient rounded-full shadow-xl cursor-pointer">
              HR Store (Dev)
            </span>
          </a>
        </div>
        <div>
          <span>
            <span className="w-32 h-32 flex items-center justify-center text-white text-xs font-semibold gradient rounded-full shadow-xl cursor-pointer">
              CryptoTracker (App)
            </span>
          </span>
        </div>
      </Slider>
    </div>
  );
}

export default Projects;
