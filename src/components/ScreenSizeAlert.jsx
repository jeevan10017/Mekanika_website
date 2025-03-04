import React, { useState, useEffect } from 'react';

const ScreenSizeAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setShowAlert(width >= 1015 && width <= 1535);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (!showAlert) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-yellow-500 text-center  z-50 text-black font-medium">
      Please use a different screen size for a better experience.
    </div>
  );
};

export default ScreenSizeAlert;