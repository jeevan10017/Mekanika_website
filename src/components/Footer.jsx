import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faMedium } from '@fortawesome/free-brands-svg-icons';
import Logos from './Images/MekanikaLogo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <footer className="bg-slate-950 py-8" >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-10 gap-4 text-center md:text-left text-gray-300 " >
        {/* Quick Links */}
        <div className="col-span-4 flex flex-col items-center justify-center md:items-start md:mx-24 mt-4" >
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Quick Links</h2>
          <ul className="grid grid-cols-2 gap-2 gap-x-8">
            <li><Link to="/" className="hover:text-yellow-400 ">Home</Link></li>
            <li><Link to="/core-expedition" className="hover:text-yellow-400">Core Expedition</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/intern-chronicles" className="hover:text-yellow-400">Intern Chronicles</Link></li>
            <li><Link to="/events" className="hover:text-yellow-400">Events</Link></li>
            <li><Link to="/course-material" className="hover:text-yellow-400"> Materials</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">Team</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">Gallery</Link></li>
            <li><Link to="/" className="hover:text-yellow-400">Registrations</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-3 flex flex-col items-center justify-center md:items-start" >
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Contact Us</h2>
          <p className="mb-1">Email: mekanika2022@gmail.com</p>
          <p className="mb-1">Phone: +91 080041 25928</p>
          <p className="mb-1">IIT Kharagpur</p>
          <p>West Bengal 721302</p>
        </div>

        {/* Logo and Social Links */}
        <div className="col-span-3 flex flex-col items-center justify-center" >
          <div className="flex items-center mb-4">
            <img src={Logos} alt="Mekanika Logo" className="w-12 h-12 rounded mr-3" />
            <h1 className="text-3xl font-bold text-yellow-400">MEKANIKA</h1>
           
          </div>
          <span className="lg:mx-24 md:mx-2 text-md flex flex-col items-center justify-center">Official society of Department of Mechanical Engineering</span>
          <h2 className="text-xl mb-4">IIT Kharagpur</h2>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4" className="hover:text-yellow-400">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/company/mekanika-iit-kharagpur/about/" className="hover:text-yellow-400">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.facebook.com/mekanikaiitkgp/" className="hover:text-yellow-400">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://medium.com/@mekanika2022" className="hover:text-yellow-400">
              <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8  border-gray-700 pt-4">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Mekanika IIT Kharagpur. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
