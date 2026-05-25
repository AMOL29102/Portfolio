import React from 'react';
import { Element } from 'react-scroll';

import { ThemeProvider, useTheme } from './contexts/ThemeContext';

import DarkBackground from './Backgrounds/Dark/Background';
import LightBackground from './Backgrounds/Light/Background1';

import DarkMorphingShapes from './Backgrounds/Dark/MorphingShapes';
import LightMorphingShapes from './Backgrounds/Light/MorphingShapes';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

import "./style.css"

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen scrollbar-hide ${isDarkMode ? 'text-white' : ''}`}>
      {isDarkMode ? <DarkBackground /> : <LightBackground />}

      <Navbar />
      
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
        {isDarkMode ? <DarkMorphingShapes /> : <LightMorphingShapes />}

        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
