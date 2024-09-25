import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Button, Box, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { styled } from '@mui/material/styles';
import Logo from './Mekanika_logo.png';


const LogoContainer = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MekanikaName = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const LogoImg = styled('img')(({ theme }) => ({
  width: '40px',
  height: '40px',
  marginRight: theme.spacing(1),
  borderRadius: '5px',
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const DropdownMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#050505',
    color: '#c6c2c2',
  },
}));

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
  color: '#c6c2c2',
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: '60vw',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: '#c6c2c2',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const location = useLocation();

 
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case '/Mekanika':
        document.title = 'MEKANIKA - Home';
        break;
      case '/core-expedition':
        document.title = 'Core Expedition - MEKANIKA';
        break;
      case '/intern-chronicles':
        document.title = 'Intern Chronicles - MEKANIKA';
        break;
      case '/events':
        document.title = 'Events - MEKANIKA';
        break;
      case '/course-material':
        document.title = 'Course Material - MEKANIKA';
        break;
      case '/projects':
        document.title = 'Projects - MEKANIKA';
        break;
      default:
        document.title = 'MEKANIKA';
    }
  }, [location.pathname]);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    if (window.scrollY > 70) setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownOpen = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    handleDropdownClose();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBar
  sx={{
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#c6c2c2',
    marginTop: '15px',
    marginRight: '70px',
    width: '90%',
    borderRadius: '10px',
    backdropFilter: 'blur(3px)',
    transition: 'top 0.3s ease-in-out',
    top: show ? '0' : '-80px', 
    boxShadow: shadow ? '0px 4px 12px rgba(0, 0, 0, 0.4)' : 'none',
    '@media (max-width: 600px)': {
      margin: 0,
      width: '100%',
      borderRadius: 0,
      backdropFilter: 'none',
      backgroundColor: 'black',
    },
  
   animation: show ? 'fadeIn' : 'fadeOut' }
  }
>

       
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <LogoContainer to="/" data-aos="fade-down">
            <LogoImg src={Logo} alt="Mekanika Logo" />
            <Typography variant="h5">MEKANIKA</Typography>
          </LogoContainer>
          <MekanikaName variant="h5" sx={{ flexGrow: 1 }} data-aos="fade-down">MEKANIKA</MekanikaName>
          <NavLinks data-aos="fade-down">
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button color="inherit" onClick={handleDropdownOpen}>Blogs</Button>
            <DropdownMenu
              anchorEl={dropdownAnchorEl}
              keepMounted
              open={Boolean(dropdownAnchorEl)}
              onClose={handleDropdownClose}
            >
              <MenuItemStyled component={Link} to="/core-expedition" onClick={handleMenuItemClick}>Core Expedition</MenuItemStyled>
              <MenuItemStyled component={Link} to="/intern-chronicles" onClick={handleMenuItemClick}>Intern Chronicles</MenuItemStyled>
            </DropdownMenu>
            <Button component={Link} to="/events" color="inherit">Events</Button>
            <Button component={Link} to="/course-material" color="inherit">Course Material</Button>
            <Button component={Link} to="/projects" color="inherit">Projects</Button>
          </NavLinks>
          <MenuButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
            data-aos="fade-down"
          >
            {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </MenuButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
      >
        <DrawerContent>
          <List>
            <ListItem button component={Link} to="/" onClick={toggleMobileMenu} data-aos="fade-left">
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem button onClick={handleDropdownOpen} data-aos="fade-left">
              <ListItemText primary="BLOGS" />
            </ListItem>
            <Divider style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
            <DropdownMenu
              anchorEl={dropdownAnchorEl}
              keepMounted
              open={Boolean(dropdownAnchorEl)}
              onClose={handleDropdownClose}
              // data-aos="fade-left"
            >
              <MenuItemStyled component={Link} to="/core-expedition" onClick={handleMenuItemClick} >CORE EXPEDITION</MenuItemStyled>
              <MenuItemStyled component={Link} to="/intern-chronicles" onClick={handleMenuItemClick} >INTERN CHRONICLES</MenuItemStyled>
            </DropdownMenu>
            <ListItem button component={Link} to="/events" onClick={toggleMobileMenu} data-aos="fade-left">
              <ListItemText primary="EVENTS" />
            </ListItem>
            <ListItem button component={Link} to="/course-material" onClick={toggleMobileMenu} data-aos="fade-left">
              <ListItemText primary="COURSE MATERIAL" />
            </ListItem>
            <ListItem button component={Link} to="/projects" onClick={toggleMobileMenu} data-aos="fade-left">
              <ListItemText primary="PROJECTS" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={toggleMobileMenu} data-aos="fade-left">
              <ListItemText primary="ABOUT US" />
            </ListItem>
          </List>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
