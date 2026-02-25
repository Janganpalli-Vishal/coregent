import React, { useRef } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import bg from '../assets/herosec-bg.svg';
import SplitText from "../reactbits/SplitText";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

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
  const aboutSectionRef = useRef(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
   <Box>
     <Box
      sx={{
        minHeight: {xs:"90vh", md:"92vh"},
        display: "flex",
        alignItems: "center",
        // position: 'relative',
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
              fontSize: {xs:"55px", md:"96px"},
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
              fontSize: {xs:"55px", md:"96px"},
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
              fontSize: {xs:"55px", md:"96px"},
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

    <Container maxWidth="xl" sx={{display:'flex',  alignItems:"center",justifyContent:{xs:"center", md:"space-between"}, flexDirection:{xs:"column", md:"row"}}}>
      <Box sx={{width:300, display:{xs:"none", md:"block"}}}>

      </Box>
       <Box
        onClick={scrollToAbout}
        sx={{
          position: 'absolute',
          bottom: { xs: 50, md: 10 },
          left: '48%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' },
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          Scroll Down
        </Typography>
      </Box>
      <Box
        sx={{
          // position: 'absolute',
          bottom: { xs: 50, md: 70 },
          right: { xs: 20, md: 40 },
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <IconButton
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'primary.main',
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'primary.main',
          }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/coregent-technologies/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'primary.main',
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/coregent_technologies/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'primary.main',
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Container>
   </Box>
  );
};

export default Hero;
