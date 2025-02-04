import React, { useEffect, useState } from "react";
import Image1 from "../../../components/Images/ME1.jpg";
import Image2 from "../../../components/Images/ME02.jpg";
import Image3 from "../../../components/Images/ME003.jpg";
import Image4 from "../../../components/Images/ME5.jpg";
import Image5 from "../../../components/Images/ME3.png";
import { GradualSpacing } from "../../../components/magicui/GradualSpacing.tsx";

const images = [Image1, Image2, Image3, Image4, Image5];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleText, setVisibleText] = useState({ line1: false, line2: false, line3: false });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Carousel transition interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds

    // Set text visibility with delays
    const delays = [1000, 2000, 5000]; 
    setVisibleText({ line1: false, line2: false, line3: false }); 

    const timers = delays.map((delay, index) => 
      setTimeout(() => {
        setVisibleText((prev) => ({
          ...prev,
          [`line${index + 1}`]: true,
        }));
      }, delay)
    );

    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div>
      {/* --------------------   Hero section ---------------------------*/}
      <div className="relative w-full h-screen overflow-hidden pt-16 z-0 " data-aos="fade-in">
        {/* Background Images */}
        <div className="absolute inset-0 transition-opacity duration-500">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-full absolute transition-all duration-[2000ms] ease-in-out transform ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>

        {/* Hero Text Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-yellow-500">
          {visibleText.line1 && (
            <GradualSpacing
              text="MEKANIKA"
              className="text-4xl sm:text-2xl md:text-3xl font-extrabold transition-opacity duration-500 opacity-100"
            />
          )}
          {visibleText.line2 && (
            <>
              {isSmallScreen ? (
                <div className="flex flex-col items-center justify-center mx-2">
                  <GradualSpacing
                    text="Official society of Department"
                    className="text-lg font-semibold transition-opacity duration-500 opacity-100 sm:text-lg md:text-2xl"
                  />
                  <GradualSpacing
                    text=" of Mechanical Engineering"
                    className="text-lg font-semibold mt-1 transition-opacity duration-500 opacity-100 sm:text-lg md:text-2xl"
                  />
                </div>
              ) : (
                <GradualSpacing
                  text="Official society of Department of Mechanical Engineering"
                  className="text-lg font-semibold mt-2 sm:text-lg md:text-2xl flex flex-col items-center justify-center transition-opacity duration-500 opacity-100"
                />
              )}
            </>
          )}


          {visibleText.line3 && (
            <GradualSpacing
              text="IIT Kharagpur"
              className="text-lg mt-2 transition-opacity duration-500 opacity-100"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
