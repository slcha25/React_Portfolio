import React from 'react';
import './App.css';
import './components/ham-menu';
import './components/Navbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeSwitch from './components/theme-switch';

function App() {
  return (
    <div className="App">
    <title>Sandra Chan - Full stack Developer Trainee Portfolio</title>
    <ThemeSwitch /> 
    <Navbar />
    <Hero />
    <AboutMe />
    <Projects />
    <Contact />
  
      </div>
  );
}

export default App;
