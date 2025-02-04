import React, { useEffect } from 'react';
import UnsplashGrid from './UnsplashGrid.tsx'; 
import { Helmet } from 'react-helmet';

const Gallery = () => {
  useEffect(() => {
    const preventZoom = (event) => {
      if (event instanceof WheelEvent && event.ctrlKey) {
        event.preventDefault(); // Prevent pinch zoom
      } else if (
        event.type === 'touchmove' &&
        "scale" in event &&
        event.scale !== 1
      ) {
        event.preventDefault(); // Prevent pinch zoom on touch devices
      }
    };

    document.addEventListener('wheel', preventZoom, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });

    return () => {
      document.removeEventListener('wheel', preventZoom);
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Helmet>
      <div className="max-w-full mx-auto bg-gray-950 text-white min-h-screen py-24">
        <h1 className="text-3xl font-bold text-center mt-8 mb-4 text-yellow-400">
          Gallery
        </h1>
        <h5 className="text-xl text-center text-gray-700">Click on it for full view</h5>
        <UnsplashGrid />
      </div>
    </>
  );
};

export default Gallery;
