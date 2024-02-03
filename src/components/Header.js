import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from './Mekanika_logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Mekanika Logo" />
        <h1>Mekanika</h1>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/Mekanika_website_design">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/course-material">CourseMaterial</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
