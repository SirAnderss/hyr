import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Functionalities from './components/Functionalities';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div
      className="leading-normal tracking-normal text-white gradient"
      style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
    >
      <Navbar />
      <Hero />
      <About />
      <Functionalities />
      <Projects />
      <Contact />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
