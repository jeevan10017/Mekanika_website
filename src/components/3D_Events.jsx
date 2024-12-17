import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "./ui/3d_Card";

const images = [
    require("./event_Images/KYM_1.jpg"),
    require("./event_Images/KYM_2.jpg"),
    require("./event_Images/KYM_3.jpg"),
    require("./event_Images/KYM_4.jpg"),
    require("./event_Images/MDT1.jpg"),
    require("./event_Images/MDT2.jpg"),
    require("./event_Images/MDT3.jpg"),
    require("./event_Images/MDT4.jpg"),
    require("./event_Images/Quiz1.jpg"),
    require("./event_Images/Quiz2.jpg"),
    require("./event_Images/Quiz3.jpg"),
    require("./event_Images/Quiz4.jpg"),
    require("./event_Images/Quiz5.jpg"),
    require("./event_Images/AT1.jpg"),
    require("./event_Images/AT2.jpg"),
    require("./event_Images/AT3.jpg"),
    require("./event_Images/AT4.jpg"),
    require("./event_Images/AT5.jpg"),
    
  ];
  

  export const cardData = [
    {
      title: "KNOW YOUR MATES",
      description:
        "From exciting games and wit to heartwarming introductions and stories that had us all in stitches, this event was all about forging bonds and creating memories that will last a lifetime. A huge shoutout to all the participants for bringing your enthusiasm and energy!",
      imageUrls: [images[0], images[1], images[2], images[3]], 
      ctaPrimary: {
        label: "View more →",
        link: "https://twitter.com/mannupaaji",
      },
      ctaSecondary: {
        label: "26 Jan 2026",
      },
    },
    {
      title: "MECH D TALKS",
      description:
        "shared their valuable insights with Mechanical Department students on academics and CDC Internships. The session commenced with warm welcomes and brief introductions, paving the way for a succinct exploration of academic journeys. The panelists emphasized the value of holistic growth, balancing academics with extracurricular pursuits. The spotlight then shifted to internship experiences, with panelists sharing industry insights, project highlights, and invaluable tips on securing internships. A lively Q&A session ensued, providing students with direct interaction opportunities. ",
      imageUrls: [images[4], images[5], images[6], images[7]],
      ctaPrimary: {
        label: "Explore now →",
        link: "https://example.com",
      },
      ctaSecondary: {
        label: "12 Feb 2026",
      },
    },
    {
      title: " INTRA-DEPARTMENTAL QUIZ",
      description:
        "organized an Intra-Departmental Quiz, creating a platform for students to showcase their knowledge. Fostered a friendly yet competitive atmosphere and a sense of camaraderie among participants. The atmosphere buzzed with excitement and friendly competition as teams vied for the top spot.The success of the event was a result of meticulous planning and enthusiastic participation, making it a memorable and enriching experience for all involved.",
      imageUrls: [images[8], images[9], images[10], images[11],images[12]],
      ctaPrimary: {
        label: "Explore now →",
        link: "https://example.com",
      },
      ctaSecondary: {
        label: "12 Feb 2026",
      },
    },
    {
      title: "ALUM MEET",
      description:
        "organised a vibrant alum meet, bringing together alumni from 1974, 1984, 1999, and many more. The event acted as a nostalgic reunion, creating friendships among graduates from different generations. Among shared memories and laughter, guests reminisced about their academic adventures, emphasising the long-lasting friendships they formed. The event not only celebrated prior accomplishments but also served as an opportunity for networking and collaboration.",
      imageUrls: [ images[13], images[14], images[15],images[16],images[17]],
      ctaPrimary: {
        label: "Explore now →",
        link: "https://example.com",
      },
      ctaSecondary: {
        label: "20 March 2026",
      },
    },
  ];
  

  export function Events() {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mt-24  text-yellow-400">
          Events Conducted by us
        </h1>
  
        {/* Card Container */}
        <div className="flex flex-wrap gap-6 justify-center">
          {cardData.map((card, cardIndex) => (
            <CardContainer key={cardIndex} className="inter-var">
              <CardContent card={card} />
            </CardContainer>
          ))}
        </div>
      </div>
    );
  }
  

function CardContent({ card }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % card.imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [card.imageUrls]);

  return (
    <CardBody
      className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
    >
      {/* Title Container */}
      <div className="relative">
        {/* CTA Secondary Button Positioned Above Title */}
        <CardItem
          translateZ="20"
          as="button"
          className="absolute -top-2 -right-2 px-4 py-2 rounded-xl bg-black dark:bg-yellow-400/60 dark:text-black text-white text-xs font-bold"
        >
          {card.ctaSecondary.label}
        </CardItem>

        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-yellow-300 mr-24"
        >
          {card.title}
        </CardItem>
      </div>

      {/* Description */}
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-5"
      >
        {card.description}
      </CardItem>

      {/* Dynamic Image Transition */}
      <CardItem translateZ="100" className="w-full mt-4">
        <div
          style={{
            backgroundImage: `url(${card.imageUrls[currentImage]})`,
            transition: "background-image 1s ease-in-out",
          }}
          className="h-60 w-full rounded-xl bg-cover bg-center group-hover/card:shadow-xl"
        ></div>
      </CardItem>

      {/* CTA Primary Button */}
      <div className="flex justify-start items-center mt-8">
        <CardItem
          translateZ={20}
          as={Link}
          to={card.ctaPrimary.link}
          target="_blank"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-yellow-300"
        >
          {card.ctaPrimary.label}
        </CardItem>
      </div>
    </CardBody>
  );
}