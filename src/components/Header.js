import React from 'react';
import './Header.css';
import Logo from './Mekanika_logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Mekanika Logo" />
        <h1>Mekanika</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#about">AboutUs</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#course-material">CourseMaterials</a></li>
          <li><a href="#projects">Projects</a></li>
         </ul>
      </nav>
    </header>
  );
}

export default Header;
