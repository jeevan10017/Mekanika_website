import React, { useEffect, useRef, useState } from 'react';
import { Instagram, Linkedin, Facebook, Phone } from 'lucide-react';
import { RetroGrid } from '../../../components/magicui/RetroGrid.tsx';
import { Spotlight } from "../../../components/ui/spotlight-new";


const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const pinWrapRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sectionPinned, setSectionPinned] = useState(false);
  

  const fallbackImage = "https://media.istockphoto.com/id/1432561113/photo/contact-icon-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=DnbTbyt9K8sxNF_Nb-PsEG1EaCDIgxB4_SyFe9Mblys=";
  

  const themeColors = {
    primary: '#ffc107', 
    secondary: '#0a0f1a', 
    accent: '#f8f9fa',
    dark: '#121212', 
  };
  const isSmallScreen = window.innerWidth <= 768;
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !pinWrapRef.current) return;
      
      const pinSection = document.getElementById('horizontalScrollPin');
      const pinWrap = pinWrapRef.current;
      
      if (!pinSection) return;
      
      const pinSectionTop = pinSection.getBoundingClientRect().top;
      const pinWrapWidth = pinWrap.offsetWidth;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      
      // Check if pin section is in view
      if (pinSectionTop <= 0 && Math.abs(pinSectionTop) < windowHeight) {
        setSectionPinned(true);
        
        // Calculate horizontal scroll amount
        const scrollPercentage = Math.abs(pinSectionTop) / windowHeight;
        const maxScroll = pinWrapWidth - windowWidth;
        const horizontalScroll = Math.min(scrollPercentage * maxScroll * 1.5, maxScroll);
        
        setScrollPosition(-horizontalScroll);
      } else {
        setSectionPinned(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  const styles = {
    container: {
      position: 'relative',
      color: themeColors.accent,
      width: '100%',
      maxWidth: '100%',
      overflow: 'hidden'
    },
    facultySection: {
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: themeColors.secondary,
      padding: '2rem'
    },
    facultyCard: {
      position: 'relative',
      background: 'rgba(25, 25, 35, 0.8)',
      borderRadius: '16px',
      width: '300px', 
      height: '380px',
      overflow: 'hidden',
      border: `2px solid ${themeColors.primary}`,
      boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px ${themeColors.primary}40`
    },
    facultyImageContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    facultyImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'brightness(0.9) contrast(1.1)'
    },
    facultyInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 2
    },
    facultyInfoGradient: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '150px',
      background: `linear-gradient(to top, rgba(10, 15, 26, 0.95) 0%, rgba(10, 15, 26, 0.8) 50%, rgba(10, 15, 26, 0) 100%)`,
      zIndex: 1
    },
    facultyInfo: {
      padding: '1.2rem',
      textAlign: 'center',
      position: 'relative',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 2
    },
    facultyName: {
      fontSize: '1.2rem', 
      fontWeight: 'bold',
      lineHeight: '1.3',
      marginBottom: '0.25rem',
      color: themeColors.primary,
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
    },
    facultyRole: {
      fontSize: '0.95rem',
      color: themeColors.accent,
      opacity: 0.9
    },
    pinnedSection: {
      height: sectionPinned ? '300vh' : '100vh',
      overflow: 'hidden',
      display: 'flex',
      left: 0,
      position: 'relative',
      background: themeColors.dark,
      color: themeColors.accent
    },
    pinWrap: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '50px 5vw',
      width: 'max-content',
      position: sectionPinned ? 'fixed' : 'relative',
      top: sectionPinned ? 0 : 'auto',
      transform: `translateX(${scrollPosition}px)`,
      transition: 'transform 0.1s ease-out'
    },
    pinnedSectionGradient: {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100%',
      background: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,0) 95%, rgba(0,0,0,0.2) 100%)',
      pointerEvents: 'none',
      zIndex: 10
    },
    teamProfile: {
      position: 'relative',
      background: 'rgba(25, 25, 35, 0.7)',
      borderRadius: '16px',
      width: '300px', 
      height: '380px',
      margin: '0 1.2rem',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
    },
    profileImageContainer: {
      position: 'relative',
      width: '100%',
      height: '280px', 
      overflow: 'hidden'
    },
    profileImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    profileInfo: {
      padding: '1.2rem',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
    },
    profileName: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '0.25rem',
      color: themeColors.primary
    },
    profileRole: {
      fontSize: '0.95rem',
      color: themeColors.accent,
      opacity: 0.9
    },
    socialOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(10, 15, 26, 0.7)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0,
      transform: 'translateY(20px)',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      zIndex: 3,
      padding: '1.5rem'
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2rem',
      gap: '1rem'
    },
    socialIcon: {
      padding: '0.8rem',
      background: themeColors.primary,
      color: themeColors.dark,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
    },
    cardHighlight: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '5px',
      background: themeColors.primary,
      zIndex: 3
    },
    tooltip: {
      position: 'absolute',
      bottom: '-40px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '4px',
      fontSize: '0.8rem',
      opacity: 0,
      transition: 'opacity 0.3s, bottom 0.3s',
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      zIndex: 100
    },

    stickyHeadingContainer: {
      position: 'absolute',
      top: '6vh',
      left: 0,
      width: '100%',
      zIndex: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pointerEvents: 'none'
    },
    stickyHeading: {
      color: themeColors.primary,
      fontSize: isSmallScreen ? '1.5rem' : '2rem',
      fontWeight: 'bold',
      textShadow: `0 4px 12px rgba(0, 0, 0, 0.5), 0 0 20px ${themeColors.primary}60`,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      padding: '1rem 2rem',
    //   background: 'rgba(10, 15, 26, 0.8)',
      backdropFilter: 'blur(8px)',
      borderRadius: '12px',
    //   border: `2px solid ${themeColors.primary}30`
    '@media (max-width: 768px)': {
    fontSize: '1rem', 
  },
    }
  };
  
  // Faculty data
  const facultyData = {
    name: "Prof. Jeevan Jyoti Chakraborty",
    role: "Faculty Incharge",
    image: "/api/placeholder/800/1000"
  };

  const teamMembers = [
    {
      name: "Sarthak Modanwal",
      role: "General Secretary",
      image: "",
      socials: {
        linkedin: "https://linkedin.com/in/",
        facebook: "https://facebook.com/",
          phone: "",
        instagram: "https://instagram.com/",
      
      }
    },
    {
      name: "Aman Kumar",
      role: "General Secretary",
      image: "/api/placeholder/400/500",
      socials: {
        linkedin: "https://linkedin.com/in",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        phone: ""
      }
    },
    {
      name: "Yasaswini Pakala",
      role: " Media Head",
      image: "/api/placeholder/400/500",
      socials: {
        linkedin: "https://linkedin.com/in/",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        phone: ""
      }
    },
    {
      name: "Surjya Shankar roy",
      role: "Events Head",
      image: "/api/placeholder/400/500",
      socials: {
        linkedin: "https://linkedin.com/in/",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        phone: ""
      }
    },
    {
      name: "Monisha ",
      role: "Design Head",
      image: "/api/placeholder/400/500",
      socials: {
        linkedin: "https://linkedin.com/in/",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        phone: ""
      }
    },
    {
      name: "Jeevan Kumar Korra", 
      role: "Web Head",
      image: "/api/placeholder/400/500",
      socials: {
        linkedin: "https://www.linkedin.com/in/jeevan-kumar-korra-068726252/",
        facebook: "https://www.facebook.com/korra.jeevan.98/",
        instagram: "https://www.instagram.com/jeevankumarkorra/",
        phone: "+91 8500003192"
      }
    }
  ];


  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };


  const handlePhoneClick = (phoneNumber) => {
    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Try to open WhatsApp if on mobile
      window.location.href = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
    } else {
      // On desktop, just copy to clipboard
      navigator.clipboard.writeText(phoneNumber)
        .then(() => {
          alert(`Phone number ${phoneNumber} copied to clipboard!`);
        })
        .catch(err => {
          console.error('Failed to copy phone number: ', err);
        });
    }
  };

  const SocialIcon = ({ type, link, showTooltip, setShowTooltip }) => {
    const isPhone = type === 'phone';
    const tooltipRef = useRef(null);
    
    const handleClick = (e) => {
      if (isPhone) {
        e.preventDefault();
        handlePhoneClick(link);
      } else {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    };
    
    return (
      <div 
        style={{
          ...styles.socialIcon,
          position: 'relative',
          transform: showTooltip && isPhone ? 'scale(1.1)' : 'scale(1)'
        }}
        onClick={handleClick}
        onMouseEnter={() => isPhone && setShowTooltip(true)}
        onMouseLeave={() => isPhone && setShowTooltip(false)}
      >
        {type === 'linkedin' && <Linkedin size={20} />}
        {type === 'instagram' && <Instagram size={20} />}
        {type === 'phone' && <Phone size={20} />}
        {type === 'facebook' && <Facebook size={20} />}
        {isPhone && (
          <div 
            ref={tooltipRef}
            style={{
              ...styles.tooltip,
              opacity: showTooltip ? 1 : 0,
              bottom: showTooltip ? '-40px' : '-30px'
            }}
          >
            {link}
          </div>
        )}
      </div>
    );
  };


  const FacultyCard = ({ name, role, image }) => {
    return (
      <div style={styles.facultyCard}>
        <div style={styles.cardHighlight}></div>
        <div style={styles.facultyImageContainer}>
          <img 
            src={image} 
            alt={name} 
            style={styles.facultyImage} 
            onError={handleImageError}
          />
        </div>
        <div style={styles.facultyInfoGradient}></div>
        <div style={styles.facultyInfoContainer}>
          <div style={styles.facultyInfo}>
            <h2 style={styles.facultyName}>{name}</h2>
            <p style={styles.facultyRole}>{role}</p>
          </div>
        </div>
      </div>
    );
  };

  // Custom team profile card with hover effect and social links
  const TeamProfileCard = ({ name, role, image, socials }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);
    
    return (
      <div 
        style={{
          ...styles.teamProfile,
          transform: isHovered ? 'translateY(-10px) scale(1.03)' : 'none',
          boxShadow: isHovered ? `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px ${themeColors.primary}30` : styles.teamProfile.boxShadow
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.cardHighlight}></div>
        <div style={styles.profileImageContainer}>
          <img 
            src={image} 
            alt={name} 
            style={{
              ...styles.profileImage,
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
            onError={handleImageError}
          />
        </div>
        <div style={styles.profileInfo}>
          <h3 style={styles.profileName}>{name}</h3>
          <p style={styles.profileRole}>{role}</p>
        </div>
        <div style={{
          ...styles.socialOverlay,
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
        }}>
          <h3 style={{...styles.profileName, fontSize: '1.4rem'}}>{name}</h3>
          <p style={{...styles.profileRole, marginBottom: '1rem'}}>{role}</p>
          <div style={styles.socialIcons}>
            <SocialIcon 
              type="linkedin" 
              link={socials.linkedin} 
              showTooltip={false} 
              setShowTooltip={() => {}}
            />
            <SocialIcon 
              type="instagram" 
              link={socials.instagram}
              showTooltip={false} 
              setShowTooltip={() => {}}
            />
            <SocialIcon 
              type="phone" 
              link={socials.phone}
              showTooltip={showPhoneTooltip} 
              setShowTooltip={setShowPhoneTooltip}
            />
             <SocialIcon 
              type="facebook" 
              link={socials.facebook}
              showTooltip={false} 
              setShowTooltip={() => {}}
            />
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="horizontal-scroll-container" ref={containerRef} style={styles.container}>
      {/* Faculty Section - Now smaller and centered without social links */}
      <section 
        className="faculty-card-section"
        style={styles.facultySection}
      >
        <Spotlight/>
        <FacultyCard 
          name={facultyData.name}
          role={facultyData.role}
          image={facultyData.image}
        />
      </section>

      {/* Team Members Horizontal Scroll Section */}
      <section 
        id="horizontalScrollPin"
        className="horizontal-scroll-section"
        style={styles.pinnedSection}
      >
        {/* Sticky Heading */}
        <div style={styles.stickyHeadingContainer}>
          <h1 style={styles.stickyHeading}>Executive Team</h1>
        </div>
        
        <div style={styles.pinnedSectionGradient}></div>
        <div className="pin-wrap" ref={pinWrapRef} style={styles.pinWrap}>
          {teamMembers.map((member, index) => (
            <TeamProfileCard 
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              socials={member.socials}
            />
          ))}
        </div>
        <RetroGrid />
      </section>
    </div>
  );
};

export default HorizontalScroll;