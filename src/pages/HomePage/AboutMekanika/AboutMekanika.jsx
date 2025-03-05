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
        <div className="absolute inset-0 pointer-events-none z-10 overflow-x-hidden">
          <Spotlight />
        </div>
      <div className="relative container mx-auto px-4 py-12">
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
                  Mekanika is a dynamic student-led community, providing a platform for students to connect, exchange experiences, and enhance their skills. It fosters unity through intra-department competitions and various engaging activities that bring students together, creating a lively and collaborative environment.
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
                 We also organizes interactive sessions for CDC preparation and the farewell ceremony for final-year students, celebrating their journey and contributions to the department. Through these initiatives, it strengthens bonds among students and ensures a memorable experience throughout their academic journey.
                </p>
              </>
            ) : (
              <TextRevealByWord
                text={`Mekanika is a vibrant student-led community that connects students, fosters skill development, and promotes unity through competitions and activities. We organize interactive sessions for CDC preparation and a farewell ceremony to celebrate final-year students, ensuring a supportive and memorable academic journey.`}
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

export default AboutMekanika;
