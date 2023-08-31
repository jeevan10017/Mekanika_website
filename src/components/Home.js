import React, { useState, useEffect } from 'react';
import image2 from './Images/MechDTalks.jpg';
import image1 from './Images/ME02.jpg';
import image3 from './Images/ME1.jpg';
import image4 from './Images/ME003.jpg';
import image5 from './Images/ME5.jpg';
// import image6 from './cricket.jpg';
import './Home.css';

const Home = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    // image6,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="home-section">
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <div className="image-overlay">
          <h2 className="overlay-text">Welcome to Mekanika</h2>
          <p className="overlay-subtext">Exploring the World of Mechanical Engineering ,IIT Kharagpur</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
