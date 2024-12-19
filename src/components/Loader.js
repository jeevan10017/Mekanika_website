import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Loader.css';
import { GradualSpacing } from "./magicui/GradualSpacing.tsx";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="ic1">
        <FontAwesomeIcon icon={faCog} className="loader-icon1" spin />
      </div>
      <div className="ic2">
        <FontAwesomeIcon icon={faCog} className="loader-icon2" spin />
      </div>
      <div className="ic3">
        <FontAwesomeIcon icon={faCog} className="loader-icon3" spin />
      </div>
      <div className="loader-text">
         <GradualSpacing
                    text="MEKANIKA"
                    className="text-4xl sm:text-2xl md:text-3xl font-extrabold transition-opacity duration-500 opacity-100"
          /></div>
    </div>
  );
};

export default Loader;
