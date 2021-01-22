import React from 'react';
import weWant from '../assets/images/wewant.svg';
import experience from '../assets/images/experience.svg';
import code from '../assets/images/code.svg';
import BoxContainer from './BoxContainer';

function About() {
  return (
    <div
      id="about"
      className="bg-white text-gray-700 flex justify-center items-center flex-col py-10"
    >
      <div className="container max-w-5xl mx-auto m-8 pt-8">
        <h2 className="w-full my-4 text-5xl font-bold leading-tight text-center">
          Nos apasiona la tecnología
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <BoxContainer
          title="Nuestro mayor deseo"
          content="Es ofrecer soluciones que hagan de sus tareas diarias más fáciles y sencillas."
          image={weWant}
          alt="Nuestro deseo"
          right={false}
        />
        <BoxContainer
          title="Contamos con más de cinco años de experiencia"
          content="Ofrecemos soluciones a empresas y emprendedores en el Surcolombiano"
          image={experience}
          alt="Nuestra experiencia"
          right={true}
        />
        <BoxContainer
          title="Nos mantenemos a la vanguardia"
          content="con las nuevas tecnologías de desarrollo de aplicaciones para ofrecer la mejor experiencia para nuestros clientes."
          image={code}
          alt="Desarrollo de aplicaciones"
          right={false}
        />
      </div>
    </div>
  );
}

export default About;
