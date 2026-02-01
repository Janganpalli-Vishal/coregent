import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import { Box } from '@mui/material';
import bg from './assets/herosec-bg.svg';
import About from './pages/About';
import Services from './pages/Services';
import Trust from './pages/Trust';
import Partner from './pages/Partner';
import Contactus from './pages/Contactus';
import Clients from './pages/Clients';
import Blog from './pages/Blog';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: theme.palette.background.default, minHeight: '100vh' }}>
        {/* Fixed Navbar */}
        <Navbar />
        
        {/* Hero Section - Full viewport height with navbar overlay */}
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

        {/* Other sections with proper spacing */}
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
        
        <Contactus />
      </div>
    </ThemeProvider>
  );
}

export default App;
