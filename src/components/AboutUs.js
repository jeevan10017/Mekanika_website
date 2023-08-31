import React from 'react';
import './AboutUs.css';
import TeamImage from './Images/MEO3.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="about-us-section">
      <div className="container">
      <div>
        <p className="projects-disclaimer">Disclaimer: This is a demowebsite of Mekanika</p>
       </div>
        <div className="section-heading">
          <h2>About Us</h2>
        </div>
        <div className="content">
          <div className="text">
            <p>
              Mekanika is a passionate community of engineers, researchers,
              and students and Alummni of IIT Kharagpur who are dedicated to advancing the field of
              mechanical engineering. Our mission is to foster innovation,
              collaboration, and education in the world of Mechanical engineering.
            </p>
            <p>
              We believe in pushing boundaries, exploring new frontiers, and
              finding solutions to real-world challenges. Our team is
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

