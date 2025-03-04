import React, { useState, useEffect } from "react";
import TeamImage from "../../../components/Images/MEO3.jpg";
import { TextRevealByWord } from "../../../components/magicui/TextReveal.tsx";
import { Spotlight } from "../../../components/ui/spotlight-new.jsx";


const AboutMekanika = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative bg-cover bg-fixed text-gray-300">
            {/* <Spotlight/> */}
      <div className="relative container mx-auto px-4 my-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="lg:col-span-1 text-center space-y-4">
            {isSmallScreen ? (
              <>
                <p
                  className="text-lg sm:text-xl leading-relaxed"
                  data-aos="fade-right"
                  style={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    wordSpacing: "4px",
                    lineHeight: "24px",
                    marginInline: "0",
                  }}
                >
                  Mekanika is a passionate community of students and alumni of
                  the Department of Mechanical Engineering at IIT Kharagpur who
                  are dedicated to advancing the field of Mechanical
                  Engineering. Our mission is to build connections,
                  collaboration, and education in the world of Mechanical
                  Engineering.
                </p>

                <p
                  className="text-lg sm:text-xl leading-relaxed"
                  data-aos="fade-right"
                  style={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    wordSpacing: "4px",
                    lineHeight: "24px",
                    marginInline: "0",
                  }}
                >
                  We believe in pushing boundaries, exploring new frontiers,
                  and finding solutions for Mechanical Engineering students by
                  conducting events. Our team is committed to excellence and
                  continuous learning.
                </p>
              </>
            ) : (
              <TextRevealByWord
                text={`Mekanika is a passionate community of students and alumni of the Department of Mechanical Engineering at IIT Kharagpur who are dedicated to advancing the field of Mechanical Engineering. Our mission is to build connections, collaboration, and education in the world of Mechanical Engineering.\n\n We believe in pushing boundaries, exploring new frontiers, and finding solutions for Mechanical Engineering students by conducting events. Our team is committed to excellence and continuous learning.`}
                className="text-lg sm:text-xl leading-normal whitespace-pre-line text-center"
                style={{
                  fontSize: "1.4rem",
                  textAlign: "center",
                  wordSpacing: "4px",
                  lineHeight: "32px",
                  // marginInline: "64px",
                }}
              />
            )}
          </div>

          {/* Image Section */}
          <div
            className="lg:col-span-1 flex justify-center sticky top-40 lg:mb-48"
            data-aos="flip-down"
          >
            <img
              src={TeamImage}
              alt="Our Team"
              className="rounded-lg shadow-lg w-full h-auto object-cover max-w-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMekanika
