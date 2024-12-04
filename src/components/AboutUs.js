import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";
import TeamImage from "./Images/mekanika_Team.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  // useEffect(() => {
  //   const titleElement = document.querySelector('.mekanika-title');

  //   const toggleAnimation = () => {
  //     titleElement.classList.toggle('appear');
  //   };

  //   toggleAnimation();

  //   const animationInterval = setInterval(toggleAnimation, 3000);

  //   return () => clearInterval(animationInterval);
  // }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="about-us-section" id="about">
      <div className="container">
        <div className="section-heading">
          <div className="abouthead">About Us</div>
        </div>
        <div className="content">
          <div className="text">
            <p data-aos="fade-right">
              Mekanika fosters an inspiring community that bridges the gap
              between students and alumni from the Mechanical Engineering
              Department at IIT Kharagpur. We are committed to pushing the
              boundaries of mechanical innovation, nurturing ideas, and
              supporting impactful projects.
            </p>
            <p data-aos="fade-right">
            Our mission is not only to
              strengthen connections but to cultivate a spirit of collaboration
              that drives forward the future of mechanical engineering.
            </p>
          </div>
          <div className="image">
            <img src={TeamImage} alt="Our Team" data-aos="flip-down"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
