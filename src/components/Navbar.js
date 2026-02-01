import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography
} from "@mui/material";
import logo from "../assets/coregent-logo.svg";
import theme from "../config/theme";

const menuItems = [
  "Solutions",
  "About us",
  "Clients",
  "Blogs",
  "Portfolio",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 50;
  //     setScrolled(isScrolled);
  //   };

  // //   window.addEventListener('scroll', handleScroll);
  // //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'none' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4 }}>
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
              style={{ height: 36 }}
            />
          </Box>

          {/* ================= Center Menu ================= */}
          <Box
            sx={{
              backgroundColor: "#ffffff52",
              px: 5,
              py: 2,
              backdropFilter: 'blur(10px)',
              border:'1px solid lightgrey'
            }}
          >
            <Stack direction="row" spacing={4}>
              {menuItems.map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    fontWeight: 500,
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* ================= CTA Button ================= */}
          <Box>
            <Button
              variant="contained"
              sx={{
                px: 4.5,
                py: 1.5,
                fontWeight: 600,
                color: "secondary.main",
                borderRadius: "0px",
              }}
            >
              Contact Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
