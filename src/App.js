import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './config/theme';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import ContactSection from './pages/ContactSection';
import HomeSection from './pages/HomeSection';
import AboutSection from './pages/AboutSection';
import ClientsSection from './pages/Clients/ClientsSection';
import SolutionsMain from './pages/Solutions/SolutionsMain';
import Contactus from './pages/Contactus';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ background: theme.palette.background.default, minHeight: '100vh' }}>
          {/* Fixed Navbar */}
          <Navbar />

          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/client" element={<ClientsSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/solutions" element={<SolutionsMain />} />
          </Routes>

          <Contactus/>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
