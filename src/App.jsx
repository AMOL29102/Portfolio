import React from 'react';
import { Element } from 'react-scroll';

import { ThemeProvider, useTheme } from './contexts/ThemeContext';

import DarkBackground from './Backgrounds/Dark/Background';
import LightBackground from './Backgrounds/Light/Background1';

import DarkMorphingShapes from './Backgrounds/Dark/MorphingShapes';
import LightMorphingShapes from './Backgrounds/Light/MorphingShapes';



import DarkNavbar from './DarkComponents/Navbar';
import DarkHero from './DarkComponents/Hero';
import DarkAbout from './DarkComponents/About';
import DarkSkills from './DarkComponents/Skills';
import DarkProjects from './DarkComponents/Projects';
import DarkContact from './DarkComponents/Contact';

import LightNavbar from './LightComponents/Navbar';
import LightHero from './LightComponents/Hero';
import LightAbout from './LightComponents/About';
import LightSkills from './LightComponents/Skills';
import LightProjects from './LightComponents/Projects';
import LightContact from './LightComponents/Contact';


import "./style.css"


function AppContent() {

  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen text-white scrollbar-hide">

      {isDarkMode ?
        <>
          <DarkBackground />

          <DarkNavbar />
          
          <Element name="home">
            <DarkHero />

          </Element>
          <Element name="about">
            <DarkAbout />

          </Element>
          <Element name="skills">
            <DarkSkills />

          </Element>
          <Element name="projects">
            <DarkProjects />

          </Element>

          {/* Contact Section with MorphingShapes */}
          <div className="relative">
            <DarkMorphingShapes />

            <Element name="contact">
              <DarkContact />

            </Element>
          </div>
        </>
        :

        <>
          <LightBackground />

          <LightNavbar />

          <Element name="home">
            <LightHero />
          </Element>

          <Element name="about">
            <LightAbout />
          </Element>

          <Element name="skills">
            <LightSkills />
          </Element>

          <Element name="projects">
            <LightProjects />
          </Element>

          {/* Contact Section with MorphingShapes */}
          <div className="relative">
            
            <LightMorphingShapes />

            <Element name="contact">
              <LightContact />

            </Element>
          </div>
        </>}
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
