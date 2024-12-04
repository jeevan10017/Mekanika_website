
import React, { useState, useEffect , useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TeamImage from './Images/MEO3.jpg';
import image1 from './Images/ME02.jpg';
import image2 from './Images/MechDTalks.jpg';
import image3 from './Images/ME1.jpg';
import image4 from './Images/ME003.jpg';
import image5 from './Images/ME5.jpg';
import image6 from './Images/MATLAB.jpg';
import AboutUs from './AboutUs';
import './Home.css';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import SuccessStories from './SuccessStories';


const Home = () => {

  const images = [image1, image2, image3, image4, image5, image6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);


  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;

    const touchEndX = e.touches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      showNextImage();
      setIsSwiping(false);
    } else if (swipeDistance < -50) {
      showPrevImage();
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    setTouchStartX(0);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isHovered, setCurrentImageIndex, images.length]);

  return (
    <section className="home-section" data-aos="fade-down">
           <div
        className="image-container"
        data-aos="fade-down"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow left"
          onClick={showPrevImage}
        />
        <>
        <div className="image-slider" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={` ${index + 1}`} />
          ))}
        </div>
        </>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow right"
          onClick={showNextImage}
        />
      </div>

      <section className="about-us-section">
        <div className="about-us-overlay"></div>
        <div className="container">

          
          <div className="content">
            <div className="text" >
              <p data-aos="fade-right">
              Mekanika is a passionate community of students and Alummni of Department of Mechanical Engineering at IIT Kharagpur who are dedicated to advancing the field of
              Mechanical engineering. Our mission is to building connections,
              collaboration, and education in the world of Mechanical engineering.
            </p>
            <p data-aos="fade-right">
              We believe in pushing boundaries, exploring new frontiers, and
              finding solutions to Mechanical Engineering students by conducting Events. Our team is
              committed to excellence and continuous learning.
            </p>
           
            </div>
            <div className="image" >
              <img src={TeamImage} alt="Our Team"data-aos="flip-down" />
            </div>
          </div>
        </div>
      </section>
      <AboutUs />  
      <SuccessStories />
    </section>

  );
};
 

export default Home;
