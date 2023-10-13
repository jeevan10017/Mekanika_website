// import React, { useState, useEffect } from 'react';
// import TeamImage from './Images/MEO3.jpg';
// import image2 from './Images/MechDTalks.jpg';
// import image1 from './Images/ME02.jpg';
// import image3 from './Images/ME1.jpg';
// import image4 from './Images/ME003.jpg';
// import image5 from './Images/ME5.jpg';
// // import image6 from './cricket.jpg';
// import backgroundImage from './Images/home1.jpg';
// import './Home.css';
// import './AboutUs';

// const Home = () => {
//   const images = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     // image6,
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHovered) {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isHovered]);


//   return (
//     <section className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
//        {/* <div className="background-container">
//         <img src={backgroundImage} alt="Background" className="background-image" />
//         <div className="blur-overlay"></div>
//       </div> */}
//        <div className="home-overlay"></div>
//       <div
//         className="image-container"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={images[currentImageIndex]}
//           alt={`Image ${currentImageIndex + 1}`}
//         />
//         <div className="image-overlay">
//           <h2 className="overlay-text">Welcome to Mekanika</h2>
//           <p className="overlay-subtext">Exploring the World of Mechanical Engineering ,IIT Kharagpur</p>
//         </div>
//       </div>
//       <section id="about" className="about-us-section"style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="about-us-overlay"></div>
//       <div className="container">
//         <div className="section-heading">
//           <h2 className="mekanika-title">
//             <span>M</span>
//             <span>E</span>
//             <span>K</span>
//             <span>A</span>
//             <span>N</span>
//             <span>I</span>
//             <span>K</span>
//             <span>A</span>
//           </h2>
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
//     </section>
    
//   );
// }

// export default Home;
import React, { useState, useEffect } from 'react';
import TeamImage from './Images/MEO3.jpg';
import image2 from './Images/MechDTalks.jpg';
import image1 from './Images/ME02.jpg';
import image3 from './Images/ME1.jpg';
import image4 from './Images/ME003.jpg';
import image5 from './Images/ME5.jpg';
// import backgroundImage from './Images/home08.jpg';
import './Home.css';

const Home = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="home-section"/* style={{ backgroundImage: `url(${backgroundImage})` }}*/>
      <div className="home-overlay"></div>
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <div className="image-overlay">
          <h2 className="overlay-text">Welcome to Mekanika</h2>
          <p className="overlay-subtext">Exploring the World of Mechanical Engineering, IIT Kharagpur</p>
        </div>
      </div>
      <section id="about" className="about-us-section"/* style={{ backgroundImage: `url(${backgroundImage})` }}*/>
        <div className="about-us-overlay"></div>
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
                and students and Alumni of IIT Kharagpur who are dedicated to advancing the field of
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
    </section>
  );
}

export default Home;
