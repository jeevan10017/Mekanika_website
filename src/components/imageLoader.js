import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './ImageLoader.css';

const ImageLoader = () => {
  return (
    <div className="image-loader-container">
     <FontAwesomeIcon icon={faCog} className="loader-icon" spin />
    </div>
  );
}

export default ImageLoader;
