import React from "react";
import { AnimatedTestimonials } from "../../../components/ui/eventCard.tsx";
import Image1 from '../../../components/Images/Event01.jpg';
import Image2 from '../../../components/Images/Event02.jpg';
import MechDTalk from '../../../components/Images/MechDTalks.jpg';
import Cricket from '../../../components/Images/cricket.jpg';
import MATLAB from '../../../components/Images/MATLAB.jpg';

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Know Your Mates",
      designation: "Product Manager at TechFlow",
      src: Image1
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Industrisl Visit",
      designation: "CTO at InnovateSphere",
      src: Image2,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Matlab Workshop",
      designation: "Operations Director at CloudScale",
      src: MATLAB,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "MechD Talks",
      designation: "Engineering Lead at DataPro",
      src: MechDTalk,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Sports - Cricket",
      designation: "VP of Technology at FutureNet",
      src: Cricket,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden mt-20">
      {/* Title */}
      <h1 className="  mb-6 text-yellow-400" style={{  fontSize: window.innerWidth < 640 ? "1.8rem" : "3rem"}}>Events</h1>
      {/* Animated Testimonials */}
      <div className="w-full ">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}
