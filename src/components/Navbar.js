import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-container">
        <h1 className="logo">Sandra Chan</h1>
        
        {/* Hamburger button */}
        <button
          className={isMenuOpen ? 'hamburger active' : 'hamburger'}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Off-screen menu */}
        <div className={isMenuOpen ? 'off-screen-nav-menu active' : 'off-screen-nav-menu'}>
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;