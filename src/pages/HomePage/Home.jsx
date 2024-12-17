import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import SuccessStories from './HomeBlogs/SuccessStories.jsx';
import Hero from './HomeCarousal/Hero.jsx';
import AboutMekanika from './AboutMekanika/AboutMekanika.jsx';
import {AnimatedTestimonialsDemo} from './HomeEvents/HomeEvents.tsx';
import { HeroVideo } from './HomeVideo/HeroVideo.jsx';
import {CardHoverEffectDemo} from '../Projects/DepProjects.jsx';


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="relative text-center bg-cover bg-fixed bg-slate-950" data-aos="fade-down">
      <Hero />
      <AboutMekanika/>
      <SuccessStories />
      <AnimatedTestimonialsDemo/>
      <HeroVideo/>
    </section>
  );
};

export default Home;