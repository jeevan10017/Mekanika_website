import React from 'react';
import './Team.css'; 

import teamMember1Image from './demopho.jpg';
import teamMember2Image from './demopho.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'General Secretary',
      image: teamMember1Image,
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      name: 'Jane Smith',
      position: 'Head of Operations',
      image: teamMember2Image,
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/janesmith',
        facebook: 'https://www.facebook.com/janesmith',
      },
    },
    // Add more team members with their images and social links
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <div className="social-links">
                {member.socialLinks.linkedin && (
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferer">
                    LinkedIn
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                )}
                {member.socialLinks.facebook && (
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                )}
                {/* Add more social media links as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
