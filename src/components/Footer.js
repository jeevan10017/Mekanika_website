import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import Logo from './Mekanika_logo.png';

const Footer = ({ scrollToSection }) => {

  return (
    <footer className="footer">
      <div className="container">
    <div className="footer-navigation"/>
    <ul>
    <div><b><h2>Quick Links</h2></b></div>
          <li>
            <Link to="/Mekanika_website_design">Home</Link>
          </li>
          <li>

            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/course-materials">CourseMaterials</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
      
      <div className="contact-info">
      <div><b><h2>Contact us</h2></b></div>
        <p>Email: mekanika2022@gmail.com</p>
        <p>Phone: +91 080041 25928</p>
        <p>IIT Kharagpur</p>
        <p>West Bengal 721302</p>
        {/* <div className="social-links">
        <a href="https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/company/mekanika-iit-kharagpur/about/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.facebook.com/mekanikaiitkgp/"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com/IITKgp"><FontAwesomeIcon icon={faTwitter} /></a>
      </div> */}
        {/* <p>Visitors: {visitorsCount}</p> */}
      </div>
   
      <div className="copyright">
      
      
      <div className="logo">
        <div id="log">
        <img src={Logo} alt="Mekanika Logo" />
        <h1>Mekanika</h1>
        </div>
      </div>
      <div className="instiname">
      <h2>IIT Kharagpur</h2>
      </div>
      < div className="contact-info">
        <div className="social-links">
        <a href="https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/company/mekanika-iit-kharagpur/about/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.facebook.com/mekanikaiitkgp/"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com/IITKgp"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
      </div>
      </div>
      
    </footer>

  );
}

export default Footer;
