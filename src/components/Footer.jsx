import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faMedium } from '@fortawesome/free-brands-svg-icons';
import Logos from './Images/MekanikaLogo.png';
import { MediumRegisterFooter } from "./MediumRegisterFooter";
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
    <footer className="bg-slate-950 py-8 shadow-top-only shadow-yellow-400">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-8">
          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Quick Links</h2>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-300  md:text-left"> {/*text-center */}
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/core-expedition" className="hover:text-yellow-400">Core Expedition</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/intern-chronicles" className="hover:text-yellow-400">Intern Chronicles</Link></li>
              <li><Link to="/events" className="hover:text-yellow-400">Events</Link></li>
              <li><Link to="/course-material" className="hover:text-yellow-400">Materials</Link></li>
              <li><Link to="/projects" className="hover:text-yellow-400">Research Projects</Link></li>
              <li><Link to="/research-areas" className="hover:text-yellow-400">Research Areas</Link></li>
              <li><Link to="/team" className="hover:text-yellow-400">Team</Link></li>
              <li><Link to="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
              <li><Link to="/under-construction" className="hover:text-yellow-400">Registrations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Contact Us</h2>
            <div className="text-gray-300 text-center md:text-left">
              <p className="mb-1">Email: mekanika2022@gmail.com</p>
              <div className="mb-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start">
                  <span className="mr-1">Phone:</span>
                  <span>+91 63883 10750</span>
                </div>
                {/* <div className="md:pl-12 flex justify-center md:justify-start">
                  <span>+91 85709 05405</span>
                </div> */}
              </div>
              <p className="mb-1">IIT Kharagpur</p>
              <p>West Bengal 721302</p>
            </div>
          </div>

          {/* Logo and Social Links */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col items-center md:items-start lg:items-center">
            <div className="mb-4 relative flex items-center">
              <img 
                src={Logos} 
                alt="Mekanika Logo" 
                className="w-9 h-9 rounded mr-2" 
              />
              <h1 className="text-[1.7rem] font-bold text-yellow-400">MEKANIKA</h1>
            </div>
            <div className="text-gray-300 text-center md:text-left lg:text-center mb-4">
              <p className="mb-2">Official society of Department of Mechanical Engineering</p>
              <h2 className="text-xl">IIT Kharagpur</h2>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4" className="text-gray-300 hover:text-yellow-400">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.linkedin.com/company/mekanika-iit-kharagpur/about/" className="text-gray-300 hover:text-yellow-400">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://www.facebook.com/mekanikaiitkgp/" className="text-gray-300 hover:text-yellow-400">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://medium.com/@mekanika2022" className="text-gray-300 hover:text-yellow-400">
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Device Recommendation Section */}
        <div className="text-center mt-8 pt-4 ">
          <MediumRegisterFooter />
          <p className="text-gray-500 mb-1">&copy; {new Date().getFullYear()} Mekanika IIT Kharagpur. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;