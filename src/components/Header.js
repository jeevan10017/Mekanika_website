import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/Mekanika_website_design':
        document.title = 'Mekanika - Home';
        break;
      case '/core-expedition':
        document.title = 'Core Expedition - Mekanika';
        break;
      case '/intern-chronicles':
        document.title = 'Intern Chronicles - Mekanika';
        break;
      case '/events':
        document.title = 'Events - Mekanika';
        break;
      case '/course-material':
        document.title = 'Course Material - Mekanika';
        break;
      case '/projects':
        document.title = 'Projects - Mekanika';
        break;
      default:
        document.title = 'Mekanika';
    }
  }, [location.pathname]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownOpen = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ background: '#020202', color: '#c6c2c2' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <LogoContainer to="/">
            <LogoImg src={Logo} alt="Mekanika Logo" />
            <Typography variant="h5">MEKANIKA</Typography>
          </LogoContainer>
          <MekanikaName variant="h5" sx={{ flexGrow: 1 }}>MEKANIKA</MekanikaName>
          <NavLinks>
            <Button component={Link} to="/Mekanika_website_design" color="inherit">Home</Button>
            <Button color="inherit" onClick={handleDropdownOpen}>Blogs</Button>
            <DropdownMenu
              anchorEl={dropdownAnchorEl}
              keepMounted
              open={Boolean(dropdownAnchorEl)}
              onClose={handleDropdownClose}
            >
              <MenuItemStyled component={Link} to="/core-expedition" onClick={handleDropdownClose}>Core Expedition</MenuItemStyled>
              <MenuItemStyled component={Link} to="/intern-chronicles" onClick={handleDropdownClose}>Intern Chronicles</MenuItemStyled>
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
            <ListItem button component={Link} to="/Mekanika_website_design" onClick={toggleMobileMenu}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleDropdownOpen}>
              <ListItemText primary="Blogs" />
            </ListItem>
            <Divider style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
            <DropdownMenu
              anchorEl={dropdownAnchorEl}
              keepMounted
              open={Boolean(dropdownAnchorEl)}
              onClose={handleDropdownClose}
            >
              <MenuItemStyled component={Link} to="/core-expedition" onClick={toggleMobileMenu}>Core Expedition</MenuItemStyled>
              <MenuItemStyled component={Link} to="/intern-chronicles" onClick={toggleMobileMenu}>Intern Chronicles</MenuItemStyled>
            </DropdownMenu>
            <ListItem button component={Link} to="/events" onClick={toggleMobileMenu}>
              <ListItemText primary="Events" />
            </ListItem>
            <ListItem button component={Link} to="/course-material" onClick={toggleMobileMenu}>
              <ListItemText primary="Course Material" />
            </ListItem>
            <ListItem button component={Link} to="/projects" onClick={toggleMobileMenu}>
              <ListItemText primary="Projects" />
            </ListItem>
          </List>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
