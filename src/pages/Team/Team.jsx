import React, { useState, useEffect, useRef } from 'react';
import './Team.css';
import HorizontalScroll from './TeamComponent/HorizontalScroll';
import { PastTimeline } from './TeamComponent/Timeline';
import { motion, useInView, useAnimation } from "framer-motion";

const Team = () => {
  const [horizontalScrollComplete, setHorizontalScrollComplete] = useState(false);
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  
  useEffect(() => {
    const checkScrollPosition = () => {
      const horizontalScrollPin = document.getElementById('horizontalScrollPin');
      
      if (horizontalScrollPin) {
        const pinRect = horizontalScrollPin.getBoundingClientRect();
        const isPastHorizontalScroll = pinRect.bottom < 0;
        
        if (isPastHorizontalScroll) {
          setHorizontalScrollComplete(true);
        }
      }
    };
    
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);
  
  useEffect(() => {
    if (isInView && horizontalScrollComplete) {
      controls.start("visible");
    }
  }, [isInView, horizontalScrollComplete, controls]);
  
  const timelineVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3 
      }
    }
  };

  return (
    <div className="team-page overflow-hidden shadow-bottom-only shadow-yellow-400 ">
      <HorizontalScroll />
      <motion.div 
        ref={timelineRef}
        className="timeline-section"
        initial="hidden"
        animate={controls}
        variants={timelineVariants}
      >
        <PastTimeline />
      </motion.div>
    </div>
  );
};

export default Team;