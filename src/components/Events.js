import React, { useEffect } from 'react';
import './Events.css';
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
    <section id="events" className="events-section">
      <div className="container">
        <div className="event-cards" data-aos="fade-up">
          <a className="event-card" data-aos="flip-down" href="https://iitkgpacin-my.sharepoint.com/personal/asishpani03_kgpian_iitkgp_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fasishpani03%5Fkgpian%5Fiitkgp%5Fac%5Fin%2FDocuments%2FDSLR%20Photography%2FMEKANIKA%2FKnow%20Your%20Mates&ga=1">
            <div className="event-date">
              <span className="month">Nov</span>
              <span className="day">28 </span>
              <span className="year">2022 </span>
            </div>
            <h3 className="event-title">Know Your Department</h3>
            <p className="event-time">5:30 PM - 8:30 PM</p>
            <div className="event-image">
              <img src={Image1} alt="Event" data-aos="flip-up"/>
            </div>
            <p className="event-description">It was a fun-filled occasion with a large turnout of freshers. The evening began with a really interesting introduction of freshers, followed by a variety of activities and games</p>
          </a>
          <a className="event-card" data-aos="fade-up" href="https://m.facebook.com/story.php?story_fbid=pfbid02GdsWmJrjL9U32Ek63o5shAiWzgZfgZKJqXAcoUTkMVQYrZUTEaPvfkYxY7UcLPk6l&id=100063884569642&mibextid=ZbWKwL">
            <div className="event-date">
              <span className="month">Nov</span>
              <span className="day">6 </span>
              <span className="year">2022 </span>
            </div>
            <h3 className="event-title">Mech'D talks</h3>
            <p className="event-time">6:30 PM - 8:30 PM</p>
            <div className="event-image">
              <img src={MechDTalk} alt="Event" data-aos="flip-up"/>
            </div>
            <p className="event-description">Mekanika had successful conduction of Mech'D talks- a fundae session for Sophomores & Juniors for valuable insights regarding topics ranging from nailing end-sems to utilising the winter break and much mo</p>
          </a>
          <a className="event-card" data-aos="fade-up" href="https://m.facebook.com/story.php?story_fbid=pfbid0nf7s76teXTWJkwxDDURF8vW1UVN2eqAih8nycUJ6FcjQtfvvHR2Jmw6y5ama37UQl&id=170798152998960&mibextid=Nif5oz">
            <div className="event-date">
              <span className="month">Feb</span>
              <span className="day">2 </span>
              <span className="year">2020 </span>
            </div>
            <h3 className="event-title">Intern Talk</h3>
            <p className="event-time">8:00 PM - 10:00PM</p>
            <div className="event-image">
              <img src={InternTalk} alt="Event" data-aos="flip-up" />
            </div>
            <p className="event-description">Intern talk was conducted by mekanika for the students who will be having their CDC intern process for following semester. More active participation by the interested students.</p>
          </a>
          <a className="event-card" data-aos="fade-up" href="https://m.facebook.com/story.php?story_fbid=pfbid03e73YxDWzX5D6avZPXwNk48tprxHfGfHDd5xLHNFRR4bs13ttCj5uSd7yRiweBYBl&id=170798152998960&mibextid=ZbWKwL">
            <div className="event-date">
              <span className="month">Mar</span>
              <span className="day">11 </span>
              <span className="year">2020 </span>
            </div>
            <h3 className="event-title">Industrial Trip</h3>
            <p className="event-time">5:30 AM - 5:30 PM</p>
            <div className="event-image">
              <img src={Image2} alt="Event"data-aos="flip-up" />
            </div>
            <p className="event-description">Mekanika organized an Industrial Trip on 09/03/2020(Monday)by Prof Rajaram Lakkaraju. TATA Motars had gave the Opportunity to students for this event</p>
          </a>
          <a className="event-card" data-aos="fade-up" href="https://m.facebook.com/story.php?story_fbid=pfbid0SzXd6SSSdbzzLSNZghPijkF8dH7KiuiTzjA8Q47XKYn7fJk85xFme6VELs36voWSl&id=170798152998960&mibextid=Nif5oz">
            <div className="event-date">
              <span className="month">Mar</span>
              <span className="day">24 </span>
              <span className="year">2017 </span>
            </div>
            <h3 className="event-title">Cricket Tournment</h3>
            <p className="event-time">10:00 AM - 05:00 PM</p>
            <div className="event-image">
              <img src={Cricket} alt="Event" data-aos="flip-up" />
            </div>
            <p className="event-description">organised a cricket match for the batch of 2017 which saw enthusiastic participation of the to-be alums of our department.</p>
          </a>
          <a className="event-card" data-aos="fade-up" href="https://www.dropbox.com/sh/dw2l22584exgkbp/AACCYR3A5ckhpk0sLioemgPEa?dl=0">
            <div className="event-date">
              <span className="month">Jan</span>
              <span className="day">19 </span>
              <span class="year">2015 </span>
            </div>
            <h3 className="event-title">MatLab Workshop</h3>
            <p className="event-time">5:30 PM - 7:30 PM</p>
            <div className="event-image">
              <img src={MATLAB} alt="Event" data-aos="flip-up"/>
            </div>
            <p className="event-description">Prof. Suman chakraborty for contributing his valuable time to this event. Mr. Chirodeep Bakli and Mr. Aditya Bandyopadhyay for their support in making the workshop a success</p>
          </a>
        </div>
        <div>
        </div>
      </div>
    </section>
  );
}

export default Events;
