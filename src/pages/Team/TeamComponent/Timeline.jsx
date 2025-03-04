import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Spotlight } from "../../../components/ui/spotlight-new";
import { BackgroundBeamsWithCollision } from "../../../components/ui/background-beams-with-collision.jsx";
import { Linkedin } from "lucide-react";

// Executive Team Component with Fixed Size Images and updated design
const ExecutiveTeam = ({ executives, firstRowCount = 2 }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* First row - configurable number of images */}
      <div className="flex flex-wrap justify-center gap-4">
        {executives.slice(0, firstRowCount).map((executive, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
            style={{ width: "200px", height: "200px" }}
          >
            <img
              src={
                executive.image ||
                "https://media.istockphoto.com/id/1432561113/photo/contact-icon-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=DnbTbyt9K8sxNF_Nb-PsEG1EaCDIgxB4_SyFe9Mblys="
              }
              alt={executive.name}
              className="rounded-lg object-cover w-full h-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            {/* Name at bottom with gradient background */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 flex flex-col items-center justify-center">
              <span className="text-white text-sm md:text-base font-medium text-center">
                {executive.name}
              </span>
            </div>
            
            {/* Overlay with LinkedIn icon and data on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
              <span className="text-white text-sm md:text-base font-medium mb-2">
                {executive.name}
              </span>
              {executive.title && (
                <span className="text-gray-300 text-xs mb-3">{executive.title}</span>
              )}
              {/* {executive.description && (
                <p className="text-gray-300 text-xs text-center mb-4">{executive.description}</p>
              )} */}
              <a 
                href={executive.linkedin || "#"} 
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Second row - remaining images */}
      {executives.length > firstRowCount && (
        <div className="flex flex-wrap justify-center gap-4">
          {executives.slice(firstRowCount).map((executive, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
              style={{ width: "200px", height: "200px" }}
            >
              <img
                src={
                  executive.image ||
                  "https://media.istockphoto.com/id/1432561113/photo/contact-icon-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=DnbTbyt9K8sxNF_Nb-PsEG1EaCDIgxB4_SyFe9Mblys="
                }
                alt={executive.name}
                className="rounded-lg object-cover w-full h-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 flex flex-col items-center justify-center">
                <span className="text-white text-sm md:text-base font-medium text-center">
                  {executive.name}
                </span>
              </div>
              
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <span className="text-white text-sm md:text-base font-medium mb-2">
                  {executive.name}
                </span>
                {executive.title && (
                  <span className="text-gray-300 text-xs mb-3">{executive.title}</span>
                )}
                {/* {executive.description && (
                  <p className="text-gray-300 text-xs text-center mb-4">{executive.description}</p>
                )} */}
                <a 
                  href={executive.linkedin || "#"} 
                  className="text-white hover:text-blue-400 transition-colors"
                  style={{ paddingTop: "5rem" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileExecutiveTeam = ({ executives }) => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 pr-3">
      {executives.map((executive, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative overflow-hidden rounded-lg w-full group">
            <img
              src={
                executive.image ||
                "https://media.istockphoto.com/id/1432561113/photo/contact-icon-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=DnbTbyt9K8sxNF_Nb-PsEG1EaCDIgxB4_SyFe9Mblys="
              }
              alt={executive.name}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a 
                href={executive.linkedin || "#"} 
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Name Below Card */}
          <div className="mt-2 text-center w-full">
            <span className="text-sm font-medium text-gray-200">
              {executive.name}
            </span>
            {executive.title && (
              <p className="text-xs text-gray-400">{executive.title}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const ResponsiveExecutiveTeam = ({ executives, firstRowCount = 2 }) => {
  return (
    <>
      <div className="hidden md:block">
        <ExecutiveTeam executives={executives} firstRowCount={firstRowCount} />
      </div>
      <div className="block md:hidden">
        <MobileExecutiveTeam executives={executives} />
      </div>
    </>
  );
};

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-r from-gray-950 via-slate-950 to-zinc-900 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 flex justify-center items-center mt-24">
        <h2 className="text-xl md:text-4xl mb-4 max-w-4xl text-center text-yellow-400 z-10">
          Former Executive Teams
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gray-800 border border-gray-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-yellow-500 opacity-60">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 md:pl-0 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-yellow-500 opacity-60">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-yellow-700 via-yellow-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export function PastTimeline() {
  const executives2023 = [
    {
      name: "Asish Pani",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/asish-pani/",
    },
    {
      name: "Harshada Anavkar",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/harshada-anavkar/",
    },
    {
      name: "Agrim Choudhary",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/agrim-choudhary/",
    },
    {
      name: "Bhumi Tayal",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Tarun",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Prashant",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/",
    },
  ];

  const executives2022 = [
    {
      name: "Venkata Sai Saran Grandhe",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Anwesha Patel",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in/",
    },
    {
      name: "Sambhav Jena",
      image: "",
      title: "Technical Director",
      linkedin: "https://www.linkedin.com/in",
    },
  ];
  
  const executives2021 = [
    {
      name: "Kanha Jain",
      image: "",
      title: "",
      linkedin: "https://www.linkedin.com/in",
    },
  ];

  const data = [
    {
      title: "2023-24",
      content: (
        <div>
          <ResponsiveExecutiveTeam executives={executives2023} />
        </div>
      ),
    },
    {
      title: "2022-23",
      content: (
        <div>
          <ResponsiveExecutiveTeam
            executives={executives2022}
            firstRowCount={3}
          />
        </div>
      ),
    },
    {
      title: "2021-22",
      content: (
        <div>
          <ResponsiveExecutiveTeam executives={executives2021} />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <BackgroundBeamsWithCollision
        from="Team"
        className="absolute inset-0 w-full h-full"
      />
      <Spotlight />
      <Timeline data={data} />
    </div>
  );
}