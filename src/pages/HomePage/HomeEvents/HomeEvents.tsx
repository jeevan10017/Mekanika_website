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
        "'Know Your Mates' provide a platform for first-year undergraduates students to interact, build connections, and familiarize themselves with fellow students, fostering a sense of community and camaraderie within the department.",
      name: "Know Your Mates",
      designation: "Product Manager at TechFlow",
      src: Image1
    },
    {
      quote:
        "Mekanika organized an industrial visit, offering students valuable exposure to real-world manufacturing processes and cutting-edge technologies in mechanical engineering.",
      name: "Industrisl Visit",
      designation: "CTO at InnovateSphere",
      src: Image2,
    },
    {
      quote:
        "A Comprehensive MATLAB workshop, providing students with practical skills in data analysis, simulation, and optimization, equipping them to solve real-world engineering problems efficiently.",
      name: "Matlab Workshop",
      designation: "Operations Director at CloudScale",
      src: MATLAB,
    },
    {
      quote:
        "'Mech-D Talks' is an insightful event that brings together a panel of students to share valuable knowledge and experiences, while addressing inquiries related to CDC and academic opportunities.",
      name: "MechD Talks",
      designation: "Engineering Lead at DataPro",
      src: MechDTalk,
    },
    {
      quote:
        "Mekanika organizes cricket and sports events to foster a spirit of competition, teamwork, and fitness among students, offering them a chance to unwind and showcase their athletic talents",
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
