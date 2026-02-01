import React from 'react';
import { Box, Typography, useTheme, Container, Grid, Paper } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import b1 from '../assets/b1.svg';
import b2 from '../assets/b2.svg';
import b3 from '../assets/b3.svg';
import b4 from '../assets/b4.svg';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});



const services = [
  {
    icon: b1,
    title: 'Mobile Application Development',
    desc: 'We build custom Android and iOS applications tailored to your business needs. With a strong focus on performance, security, and usability, Coregent delivers apps that align with your goals and your users.',
  },
  {
    icon: b2,
    title: 'Website & Web App Development',
    desc: 'We build websites that are not just visually appealing, but strategically designed to engage users and convert traffic.',
  },
  {
    icon: b3,
    title: 'UI UX Designing & Graphic Designing',
    desc: 'We create thoughtful UI/UX designs for websites and mobile apps that improve usability, engagement, and conversions.',
  },
  {
    icon: b4,
    title: 'Digital Marketing & Ad Campaign',
    desc: 'At Coregent, we build data-driven digital marketing strategies that help your brand reach the right audience at the right time.',
  },
  {
    icon: b2,
    title: 'Website & Web App Development',
    desc: 'We build websites that are not just visually appealing, but strategically designed to engage users and convert traffic.',
  },
];

const Blog = () => {
  const theme = useTheme();
  return (
    <Box>
      <Container maxWidth="xl" sx={{ py: 12 }}>
        <Box textAlign="center" mb={8}>
          <Typography
            data-aos="fade-up"
            data-aos-delay="100"
            variant="h3"
            sx={{
              fontFamily: "Mohave",
              // fontSize: { xs: "", md: "h2" },
              fontWeight: 500,
              color: "primary.main",
              lineHeight: 1.2,
            }}
          >
            Powering Your Business with <br />

            <Box component="span" sx={{ color: "warning.main" }}>
              Smart Solutions
            </Box>
          </Typography>

          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            variant="body2"
            sx={{
              maxWidth: "750px",
              mx: "auto",
              mt: 2,
            }}
          >
            We combine technology, design, and strategy to deliver services that move your business forward.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={3} 
          wrap="nowrap" 
          sx={{ 
            overflowX: 'scroll', 
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            pb: 2
          }}
        >
          {services.map((serv, index) => {
            return (
              <Grid 
                size={{ xs: 10, md: 3.2 }} 
                item 
                key={serv.title}
                sx={{ flexShrink: 0 }}
              >
                <Box
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 100)}
                  sx={{
                    borderLeft: '1px solid #E0E0E0',
                    // borderRadius: 2,
                    p: 3,
                    height: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    // '&:hover': {
                    //   boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    //   transform: 'translateY(-2px)'
                    // }
                  }}
                >
                  {/* Yellow accent bar */}
                  <Box
                    data-aos="fade-right"
                    data-aos-delay={400 + (index * 100)}
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 24,
                      width: 4,
                      height: 40,
                      backgroundColor: theme.palette.warning.main,
                      borderRadius: '0 2px 2px 0'
                    }}
                  />
                  
                  {/* Icon container */}
                  <Box
                    data-aos="zoom-in"
                    data-aos-delay={500 + (index * 100)}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 80,
                      height: 80,
                      backgroundColor: '#FFF9E6',
                      border: '1px solid #FFE082',
                      borderRadius: 2,
                      mb: 3,
                      ml: 1
                    }}
                  >
                    <Box
                      component="img"
                      src={serv.icon}
                      alt={serv.title}
                      // sx={{
                      //   width: 40,
                      //   height: 40,
                      //   filter: 'brightness(0) saturate(100%) invert(73%) sepia(74%) saturate(1494%) hue-rotate(354deg) brightness(102%) contrast(103%)'
                      // }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    data-aos="fade-up"
                    data-aos-delay={600 + (index * 100)}
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      my: 1,
                      // fontSize: '1.rem',
                      lineHeight: 1.3,
                      // minHeight: 60
                    }}
                  >
                    {serv.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    data-aos="fade-up"
                    data-aos-delay={700 + (index * 100)}
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                      fontSize: '0.9rem',
                      flexGrow: 1
                    }}
                  >
                    {serv.desc}
                  </Typography>
                </Box>
              </Grid>
            )
          })}
        </Grid>

      </Container>
    </Box>
  );
};

export default Blog;
