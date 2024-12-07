import React, { useEffect } from 'react';
import './AboutUs.css';
import TeamImage from './Images/mekanika_Team.jpg';



const AboutUs = () => {
  useEffect(() => {
    const titleElement = document.querySelector('.mekanika-title');

    const toggleAnimation = () => {
      titleElement.classList.toggle('appear');
    };

    toggleAnimation();

    const animationInterval = setInterval(toggleAnimation, 3000); 

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <section id="about" className="about-us-section">
      <div className="container">
        <div className="section-heading">
          <h2 className="mekanika-title">
            <span>M</span>
            <span>E</span>
            <span>K</span>
            <span>A</span>
            <span>N</span>
            <span>I</span>
            <span>K</span>
            <span>A</span>
          </h2>
        </div>
        <div className="content">
          <div className="text">
            <p>
              Mekanika is a passionate community of students and Alummni of Department of Mechanical Engineering at IIT Kharagpur who are dedicated to advancing the field of
              Mechanical engineering. Our mission is to building connections,
              collaboration, and education in the world of Mechanical engineering.
            </p>
            <p>
              We believe in pushing boundaries, exploring new frontiers, and
              finding solutions to Mechanical Engineering students by conducting Events. Our team is
              committed to excellence and continuous learning.
            </p>
          </div>
          <div className="image">
            <img src={TeamImage} alt="Our Team" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
