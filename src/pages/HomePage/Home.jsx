import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import SuccessStories from './HomeBlogs/SuccessStories.jsx';
import Hero from './HomeCarousal/Hero.jsx';
import AboutMekanika from './AboutMekanika/AboutMekanika.jsx';
import {AnimatedTestimonialsDemo} from './HomeEvents/HomeEvents.tsx';
import { HeroVideo } from './HomeVideo/HeroVideo.jsx';
import { MediumRegister } from '../../components/MediumRegister.jsx';
import { Spotlight } from '../../components/ui/spotlight-new.jsx';



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="relative text-center bg-cover bg-fixed bg-slate-950 shadow-bottom-only shadow-yellow-400 pb-8" data-aos="fade-in">
      <Hero />
      <AboutMekanika/>
      <SuccessStories />
      <AnimatedTestimonialsDemo/>
      <HeroVideo/>
      <MediumRegister/>
    </section>
  );
};

export default Home;