import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery
} from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../assets/coregent-logo.svg";
import theme from "../config/theme";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Client", path: "/client" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (path) => {
    setMobileOpen(false); // Close drawer
    window.scrollTo(0, 0); // Scroll to top
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        backgroundColor: 'white',
        p: 3,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <img
          src={logo}
          alt="Coregent Logo"
          style={{ height: 36 }}
        />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} sx={{ py: 1, px:0 }}>
            <Typography
              variant="body1"
              component={Link}
              to={item.path}
              onClick={() => handleNavClick(item.path)}
              sx={{
                cursor: "pointer",
                fontWeight: 500,
                width: '100%',
                color: isActiveRoute(item.path) ? theme.palette.primary.main : theme.palette.text.primary,
                textDecoration: 'none',
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {item.name}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ mt: 1, px:0 }}>
          <Button
            variant="contained"
            component={Link}
            to="/contact"
            onClick={() => handleNavClick('/contact')}
            sx={{
              px: 2,
              // py: 1.5,
              fontWeight: 600,
              color: "secondary.main",
              borderRadius: "0px",
              textDecoration: 'none'
            }}
          >
            Contact Now
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'none' : 'transparent',
        // backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ================= Logo ================= */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Coregent Logo"
              style={{ height: { xs: 30, md: 36 } }}
            />
          </Box>

          {/* ================= Desktop Menu ================= */}
          {!isMobile && (
            <Box
              sx={{
                backgroundColor: "#ffffff52",
                px: { xs: 3, md: 5 },
                py: 2,
                backdropFilter: 'blur(10px)',
                border: '1px solid lightgrey'
              }}
            >
              <Stack direction="row" spacing={{ xs: 2, md: 4 }}>
                {menuItems.map((item) => (
                  <Typography
                    key={item.name}
                    variant="body2"
                    component={Link}
                    to={item.path}
                    onClick={() => window.scrollTo(0, 0)}
                    sx={{
                      cursor: "pointer",
                      fontWeight: 500,
                      fontSize: { xs: '0.75rem', md: '0.875rem' },
                      color: isActiveRoute(item.path) ? theme.palette.primary.main : theme.palette.text.primary,
                      textDecoration: 'none',
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Stack>
            </Box>
          )}

          {/* ================= Desktop CTA Button ================= */}
          {!isMobile && (
            <Box>
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                sx={{
                  px: { xs: 2, md: 4.5 },
                  py: 1.5,
                  fontWeight: 600,
                  color: "secondary.main",
                  borderRadius: "0px",
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  textDecoration: 'none'
                }}
              >
                Contact Now
              </Button>
            </Box>
          )}

          {/* ================= Mobile Menu Button ================= */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Container>

      {/* ================= Mobile Drawer ================= */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
