import React from "react";
import { Box, Container, Typography } from "@mui/material";
import bg from '../assets/herosec-bg.svg';
import SplitText from "../reactbits/SplitText";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        // backgroundColor: "background.default",
        
        // py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: "950px" }}>
          {/* Line 1 – Gradient */}
          <Typography
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{
              fontFamily: "Mohave",
              fontSize: "96px",
              fontWeight: 600,
              lineHeight: 1,
              background:
                "linear-gradient(90deg, #FFCF23 0%, #FFB623 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Build Intelligent
          </Typography>

          {/* Line 2 – Gradient */}
          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{
              fontFamily: "Mohave",
              fontSize: "96px",
              fontWeight: 600,
              lineHeight: 1,
              background:
                "linear-gradient(90deg, #FFCF23 0%, #FFB623 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Marketing Systems.
          </Typography>

          {/* Line 3 – Solid Blue */}
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{
             fontFamily: "Mohave",
              fontSize: "96px",
              fontWeight: 600,
              lineHeight: 1,
              mb: 2,
              color: "primary.main",
              
            }}
          >
            Deploy Them Everywhere.
          </Typography>

          {/* Description */}
          <Typography
            data-aos="fade-up"
            data-aos-delay="400"
            variant="body2"
            sx={{
              maxWidth: "680px",
              fontSize: "18px",
            }}
          >
            From strategy to execution, Coregent powers consistent growth
            across all digital touchpoints.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
