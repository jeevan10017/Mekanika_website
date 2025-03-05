import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";
import TeamImage from "../../components/Images/mekanika_Team.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Spotlight } from "../../components/ui/spotlight-new.jsx";

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
      <div className="absolute inset-0 pointer-events-none z-10 overflow-x-hidden">
        <Spotlight />
     </div>
      <div className="container">
        <div className="section-heading">
          <div className="abouthead">About Us</div>
        </div>
        <div className="content">
          <div className="text">
            <p data-aos="fade-right">
            Mekanika is a dynamic student-led community, providing a platform for students to connect, exchange experiences, and enhance their skills. It fosters unity through intra-department competitions and various engaging activities that bring students together, creating a lively and collaborative environment.
            </p>
            <p data-aos="fade-right">
            Mekanika also organizes interactive sessions for CDC preparation and the farewell ceremony for final-year students, celebrating their journey and contributions to the department. Through these initiatives, it strengthens bonds among students and ensures a memorable experience throughout their academic journey.
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
