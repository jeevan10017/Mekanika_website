import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const EventNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  

  const eventDate = new Date('2025-04-07T17:30:00+05:30');
  const eventTitle = "Farewell for the graduating batch";
  
  useEffect(() => {
    const currentDate = new Date();
    if (currentDate >= eventDate) {
      return; 
    }
    

    const hasSeenNotification = localStorage.getItem('hasSeenEventNotification');
    
 if (!hasSeenNotification) {
      const timer = setTimeout(() => {
        setShowNotification(true);

        localStorage.setItem('hasSeenEventNotification', 'true');
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  useEffect(() => {
    if (!showNotification) return;
    
    const updateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = eventDate - currentDate;
      
      if (timeDifference <= 0) {
        setShowNotification(false);
        return;
      }
      
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    };
    
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(intervalId);
  }, [showNotification]);
  
  const handleClose = () => {
    setShowNotification(false);
  };
  
  if (!showNotification) return null;
  
  return (
    <div className="fixed md:top-[70vh] top-[75vh] right-2 md:right-4 z-50 max-w-md p-4">
      <div className="bg-gray-900/50 relative rounded-lg shadow-lg p-4 text-left">
        <div className="absolute inset-0 border border-yellow-400 rounded-lg animate-blink pointer-events-none"></div>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-yellow-400 font-bold text-lg mb-1">Upcoming Event</h3>
            <p className="text-white mb-2">{eventTitle} </p>
            
            <div className="grid grid-cols-4 gap-2 mt-3">
              <div className="bg-slate-800/70 p-2 rounded text-center">
                <span className="text-white font-bold text-lg">{timeRemaining.days}</span>
                <p className="text-xs text-gray-300">Days</p>
              </div>
              <div className="bg-slate-800/70 p-2 rounded text-center">
                <span className="text-white font-bold text-lg">{timeRemaining.hours}</span>
                <p className="text-xs text-gray-300">Hours</p>
              </div>
              <div className="bg-slate-800/70 p-2 rounded text-center">
                <span className="text-white font-bold text-lg">{timeRemaining.minutes}</span>
                <p className="text-xs text-gray-300">Mins</p>
              </div>
              <div className="bg-slate-800/70 p-2 rounded text-center">
                <span className="text-white font-bold text-lg">{timeRemaining.seconds}</span>
                <p className="text-xs text-gray-300">Secs</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleClose} 
            className="text-gray-200 hover:text-yellow-300 transition-colors"
            aria-label="Close notification"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventNotification;