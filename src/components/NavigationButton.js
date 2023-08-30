import React, { useState } from 'react';
import './NavigationButton.css';

const NavigationButton = ({ openNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    openNav(!isOpen);
  };

  return (
    <button className={`navigation-button ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
}

export default NavigationButton;
