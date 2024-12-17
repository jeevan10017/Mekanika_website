import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from './Images/Event01.jpg';
import Image2 from './Images/Event02.jpg';
import InternTalk from './Images/InternTalk.jpg';
import MechDTalk from './Images/MechDTalks.jpg';
import Cricket from './Images/cricket.jpg';
import MATLAB from './Images/MATLAB.jpg';

const Events = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      id="events"
      className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-6 text-white"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-8 justify-center" data-aos="fade-up">
          {/* Event Card 1 */}
          <a
            href="https://iitkgpacin-my.sharepoint.com/personal/asishpani03_kgpian_iitkgp_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fasishpani03%5Fkgpian%5Fiitkgp%5Fac%5Fin%2FDocuments%2FDSLR%20Photography%2FMEKANIKA%2FKnow%20Your%20Mates&ga=1"
            className="event-card w-full md:w-1/3 bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-lg rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2"
            data-aos="fade-up"
          >
            <div className="text-center mb-4">
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Know Your Department</h3>
            <p className="text-gray-400 mb-4">5:30 PM - 8:30 PM</p>
            <img
              src={Image1}
              alt="Event"
              className="rounded-lg mb-4 transition-transform hover:scale-105"
            />
            <p className="text-gray-300">
              It was a fun-filled occasion with a large turnout of freshers. The evening began with a
              really interesting introduction of freshers, followed by a variety of activities and
              games.
            </p>
          </a>

          {/* Repeat Event Cards */}
          <a
            href="https://m.facebook.com/story.php?story_fbid=pfbid02GdsWmJrjL9U32Ek63o5shAiWzgZfgZKJqXAcoUTkMVQYrZUTEaPvfkYxY7UcLPk6l&id=100063884569642&mibextid=ZbWKwL"
            className="event-card w-full md:w-1/3 bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-lg rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2"
            data-aos="fade-up"
          >
            <div className="text-center mb-4">
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Mech'D Talks</h3>
            <p className="text-gray-400 mb-4">6:30 PM - 8:30 PM</p>
            <img
              src={MechDTalk}
              alt="Event"
              className="rounded-lg mb-4 transition-transform hover:scale-105"
            />
            <p className="text-gray-300">
              Mekanika had a successful conduction of Mech'D talks - a session offering valuable
              insights for Sophomores & Juniors, from nailing end-sems to utilizing the winter
              break.
            </p>
          </a>

          {/* Add more cards similarly... */}
        </div>
      </div>
    </section>
  );
};

export default Events;
