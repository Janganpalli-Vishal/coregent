import React from 'react';
import { Box } from '@mui/material';
import bg from '../assets/herosec-bg.svg';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Trust from './Trust';
import Partner from './Partner';
import Clients from './Clients';
import Blog from './Blog';
import AboutPage from './AboutPage';
import ClientsSection from './Clients/ClientsSection';

const HomeSection = () => {
  return (
    <>
      <Box sx={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        px:{xs:0, md:4},
        position: 'relative',
      }}>
        <Hero />
      </Box>

      <Box sx={{ px: { xs: '0', md: 4 }, backgroundColor: '#F5F6FB' }}>
        <About />
        <Blog/>
      </Box>
      
      <Box sx={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        px: { xs: '0', md: 4 }
      }}>
        <Services />
      </Box>

      <Box sx={{ px: { xs: '0', md: 4 }, backgroundColor: '#F5F6FB' }}>
        <Trust />
        <Clients />
        <Partner />
      </Box>

      {/* <Box sx={{
        // backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        px: { xs: 0, md: 4 },
        position: 'relative',
      }}>
        <AboutPage />
      </Box> */}

    </>
  );
};

export default HomeSection;