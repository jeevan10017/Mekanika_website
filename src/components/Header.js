import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Button, Box, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { styled } from '@mui/material/styles';
import Logo from './Mekanika_logo.png';

const LogoContainer = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
}));

const LogoImg = styled('img')(({ theme }) => ({
  width: '50px',
  height: '50px',
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

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ background: '#020202', color: '#c6c2c2' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <LogoContainer to="/">
            <LogoImg src={Logo} alt="Mekanika Logo" />
            <Typography variant="h6" >Mekanika</Typography>
          </LogoContainer>
          <NavLinks>
            <Button component={Link} to="/Mekanika_website_design" color="inherit">Home</Button>
            <Button color="inherit" onClick={handleMenuOpen}>Blogs</Button>
            <DropdownMenu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItemStyled component={Link} to="/core-expedition" onClick={handleMenuClose}>Core Expedition</MenuItemStyled>
              <MenuItemStyled component={Link} to="/intern-chronicles" onClick={handleMenuClose}>Intern Chronicles</MenuItemStyled>
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
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
      >
        <DrawerContent>
          <List>
            <ListItem button component={Link} to="/Mekanika_website_design" onClick={toggleMobileMenu}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleMenuOpen}>
              <ListItemText primary="Blogs" />
            </ListItem>
            <Divider style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
            <DropdownMenu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
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
