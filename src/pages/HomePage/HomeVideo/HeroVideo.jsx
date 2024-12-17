import { HeroVideoDialog } from "../../../components/magicui/HeroVideo.tsx";
import Img from "../../../components/Images/Event01.jpg";
import React, { useState, useEffect } from "react";
import { TextRevealByWord } from "../../../components/magicui/TextReveal.tsx";
import VideoSrc from "../../../components/videos/Event1.mp4";

export function HeroVideo() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative bg-cover bg-fixed text-gray-300 mt-32">
      <div className="">
        <h1
          className="mb-6 text-yellow-400 "
          style={{ fontSize: isSmallScreen ? "2rem" : "3rem" }}
        >
          Farewell
        </h1>
      </div>
      <div className="relative container mx-auto px-4 my-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="lg:col-span-1 text-center space-y-4">
            {isSmallScreen ? (
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
                Mekanika is a passionate community of students and alumni of the
                Department of Mechanical Engineering at IIT Kharagpur who are
                dedicated to advancing the field of Mechanical Engineering. Our
                mission is to build connections, collaboration, and education in
                the world of Mechanical Engineering.
              </p>
            ) : (
              <TextRevealByWord
                text={`Mekanika is a passionate community of students and alumni of the Department of Mechanical Engineering at IIT Kharagpur who are dedicated to advancing the field of Mechanical Engineering. Our mission is to build connections, collaboration, and education in the world of Mechanical Engineering.`}
                className="text-lg sm:text-xl leading-relaxed whitespace-pre-line text-center"
                style={{
                  fontSize: "1.4rem",
                  textAlign: "center",
                  wordSpacing: "4px",
                  lineHeight: "32px",
                  marginInline: "64px",
                }}
              />
            )}
          </div>

          {/* Image Section */}
          <div
            className="lg:col-span-1 flex justify-center sticky top-40 lg:m-24 lg:mb-48"
            data-aos="flip-down"
          >
            <div>
              <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="from-center"
                videoSrc={VideoSrc}
                thumbnailAlt="Hero Video"
                fullscreen
              />

              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc={VideoSrc}
                thumbnailSrc={Img}
                thumbnailAlt="Hero Video"
                fullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
