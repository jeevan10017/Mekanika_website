import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faMedium } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import Logos from './Images/MekanikaLogo.png';
import AOS from 'aos'; 
import 'aos/dist/aos.css';


const Footer = ({ scrollToSection }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);

  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-navigation">
          <div className="Quicklinks"data-aos="fade-up">
            <b><h2>Quick Links</h2></b>
            <ul>
              <li>
                <Link to="/" data-aos="fade-up">Home</Link>
              </li>
              <li>
                <Link to="/core-expedition"data-aos="fade-up" >Blogs</Link>
              </li>
              <li>
                <Link to="/about" data-aos="fade-up">AboutUs</Link>
              </li>
              <li>
                <Link to="/events" data-aos="fade-up">Events</Link>
              </li>
              <li>
                <Link to="/course-material" data-aos="fade-up">CourseMaterials</Link>
              </li>
              <li>
                <Link to="/projects" data-aos="fade-up">Projects</Link>
              </li>
                      </ul>
          </div>
        </div>
      </div>
  
      <div className="contact-info" data-aos="fade-up">
        <div data-aos="fade-up"><b><h2>Contact us</h2></b></div>
        <p data-aos="fade-up">Email: mekanika2022@gmail.com</p>
        <p data-aos="fade-up">Phone: +91 080041 25928</p>
        <p data-aos="fade-up">IIT Kharagpur</p>
        <p data-aos="fade-up">West Bengal 721302</p>
      </div>
  
      <div className="copyright">
        
        <div className="Footerlogo" data-aos="fade-up">
        
          <div id="logoo" data-aos="fade-up">
            <>
            <img src={Logos} alt="Mekanika Logo" />
            </>
            <h1 data-aos="fade-up">Mekanika</h1>
          </div>
        </div>
        <div className="instiname" data-aos="fade-up">
          <h2>IIT Kharagpur</h2>
        </div>
        <div className="contact-info" >
          <div className="social-links" data-aos="fade-up">
            <a href="https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4"><FontAwesomeIcon icon={faInstagram} data-aos="fade-up"/></a>
            <a href="https://www.linkedin.com/company/mekanika-iit-kharagpur/about/"><FontAwesomeIcon icon={faLinkedin} data-aos="fade-up"/></a>
            <a href="https://www.facebook.com/mekanikaiitkgp/"><FontAwesomeIcon icon={faFacebook} data-aos="fade-up" /></a>
            <a href="https://medium.com/@mekanika2022"><FontAwesomeIcon icon={faMedium} data-aos="fade-up"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
  
  
}

export default Footer;
