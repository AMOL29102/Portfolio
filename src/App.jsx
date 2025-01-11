import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import MorphingShapes from './components/MorphingShapes';
import "./style.css" 

function App() {
  return (
    <div className="min-h-screen text-white scrollbar-hide">
      {/* Global Background */}
      <Background />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>

      {/* Contact Section with MorphingShapes */}
      <div className="relative">
        <MorphingShapes />
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default App;
