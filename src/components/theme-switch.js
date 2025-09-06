import React, { useState, useEffect } from 'react';
import assets from '../assets/assets';

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage on component mount
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'active') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Update body class when darkMode changes
    if (darkMode) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem('darkMode', null);
      setDarkMode(false);
    } else {
      localStorage.setItem('darkMode', 'active');
      setDarkMode(true);
    }
  };

  return (
    <button 
      id="theme-switch" 
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
      className="theme-switch-button"
    >
      {/* Render both icons - CSS will handle visibility */}
      <img 
        className="lightMode" 
        src={assets.light_mode} 
        alt="Light Mode" 
      />
      <img 
        className="darkMode" 
        src={assets.dark_mode} 
        alt="Dark Mode" 
      />
    </button>
  );
};

export default ThemeSwitch;
