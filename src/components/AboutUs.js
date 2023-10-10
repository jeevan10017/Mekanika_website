// import React from 'react';
// import './AboutUs.css';
// import TeamImage from './Images/MEO3.jpg';

// const AboutUs = () => {
//   return (
//     <section id="about" className="about-us-section">
//       <div className="container">
     
//         <div className="section-heading">
//           <h2>About Us</h2>
//         </div>
//         <div className="content">
//           <div className="text">
//             <p>
//               Mekanika is a passionate community of engineers, researchers,
//               and students and Alummni of IIT Kharagpur who are dedicated to advancing the field of
//               mechanical engineering. Our mission is to foster innovation,
//               collaboration, and education in the world of Mechanical engineering.
//             </p>
//             <p>
//               We believe in pushing boundaries, exploring new frontiers, and
//               finding solutions to real-world challenges. Our team is
//               committed to excellence and continuous learning.
//             </p>
//           </div>
//           <div className="image">
//             <img src={TeamImage} alt="Our Team" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;

import React, { useEffect } from 'react';

import './AboutUs.css';

import TeamImage from './Images/MEO3.jpg';



const AboutUs = () => {
  useEffect(() => {
    const titleElement = document.querySelector('.mekanika-title');

    // Function to toggle the 'appear' class and restart the animation
    const toggleAnimation = () => {
      titleElement.classList.toggle('appear');
    };

    // Initial toggle to start the animation
    toggleAnimation();

    // Set an interval to continuously toggle the animation
    const animationInterval = setInterval(toggleAnimation, 3000); // Adjust the interval time (3 seconds in this example)

    // Clear the interval when the component unmounts
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
