
import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, useTheme, Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

const testimonials = [
  {
    text: `Coregent didn’t just deliver a solution—they built a system that’s ready for the future. Their AI-driven approach helped us automate processes and scale with confidence. Truly a long-term technology partner.`,
    name: 'Rohit Reddy',
    company: 'Greeklancer Private Limited',
    avatar: null,
  },
  {
    text: `Coregent didn’t just deliver a solution—they built a system that’s ready for the future. Their AI-driven approach helped us automate processes and scale with confidence. Truly a long-term technology partner.`,
    name: 'Rohit Reddy',
    company: 'Vyuham Media',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: `Coregent didn’t just deliver a solution—they built a system that’s ready for the future. Their AI-driven approach helped us automate processes and scale with confidence. Truly a long-term technology partner.`,
    name: 'Rohit Reddy',
    company: 'Krusam Technologies',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  // {
  //   text: `Coregent didn’t just deliver a solution—they built a system that’s ready for the future. Their AI-driven approach helped us automate processes and scale with confidence. Truly a long-term technology partner.`,
  //   name: 'Rohit Reddy',
  //   company: 'Vyuham Media',
  //   avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  // },
  // {
  //   text: `Coregent didn’t just deliver a solution—they built a system that’s ready for the future. Their AI-driven approach helped us automate processes and scale with confidence. Truly a long-term technology partner.`,
  //   name: 'Rohit Reddy',
  //   company: 'Krusam Technologies',
  //   avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
  // },
];

const Clients = () => {
  const theme = useTheme();
  return (
    <Container id="clients-section" maxWidth="xl" sx={{
      // background: theme.palette.background.default,
      minHeight: '100vh',
      pt: { xs: 12, md: 16 },
      pb: 8,
      // py: { xs: 6, md: 10 },
      // px: { xs: 2, md: 0 },
    }}>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography
          data-aos="fade-up"
          data-aos-delay="100"
          variant="h3"
          sx={{
            fontWeight: theme.typography.h3.fontWeight,
            color: theme.palette.primary.main,
            fontFamily: theme.typography.h3.fontFamily,
            fontSize: { xs: '44px', md: theme.typography.h3.fontSize },
            lineHeight: theme.typography.h3.lineHeight,
          }}
        >
          Clients Who Believe<br />
          <Box component="span" sx={{ color: theme.palette.secondary.main }}>in Our Work</Box>
        </Typography>
        <Typography
          data-aos="fade-up"
          data-aos-delay="200"
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: theme.typography.body2.fontWeight,
            fontFamily: theme.typography.body2.fontFamily,
            fontSize: { xs: '1rem', md: theme.typography.body2.fontSize },
            mt: 2,
            mb: 5,
          }}
        >
          Delivering quality solutions that grow with you.
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((item, idx) => (
          <Grid item xs={12} md={4} size={{ xs: 12, md: 4 }} key={idx}>
            <Paper
              data-aos="fade-up"
              data-aos-delay={300 + (idx * 100)}
              elevation={0}
              sx={{
                borderRadius: 0,
                border: '1px solid lightgrey',
                background: theme.palette.background.paper,
                position: 'relative',
                minHeight: 230,
                mb: 2,
                overflow: 'visible',
              }}
            >
              {/* Yellow corner */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 36,
                  height: 8,
                  bgcolor: theme.palette.secondary.main,
                  borderTopLeftRadius: 2,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 8,
                  height: 36,
                  bgcolor: theme.palette.secondary.main,
                  borderTopLeftRadius: 2,
                }}
              />
              <Box sx={{ p: 3, pb: 0 }}>
                <Typography 
                  data-aos="fade-up"
                  data-aos-delay={400 + (idx * 100)}
                  variant='body2' 
                  lineHeight={1.3} 
                  sx={{
                    p:1,
                    color: theme.palette.text.primary,
                    fontWeight: theme.typography.body2.fontWeight,
                    fontFamily: theme.typography.body2.fontFamily,
                    mb: 2,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
              <Box
                data-aos="fade-up"
                data-aos-delay={500 + (idx * 100)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  borderTop: `1px solid ${theme.palette.divider}`,
                  p:1,
                  mt: 3,
                  px: 3,
                  py: 2,
                  background: '#F7F8FA',
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                <Avatar
                  src={item.avatar}
                  sx={{ width: 40, height: 40, bgcolor: '#E0E0E0', mr: 2 }}
                >
                  {!item.avatar && <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: '#D9D9D9' }} />}
                </Avatar>
                <Box>
                  <Typography sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    fontFamily: theme.typography.h5.fontFamily,
                    fontSize: '1.1rem',
                    lineHeight: 1,
                  }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{
                    color: theme.palette.text.secondary,
                    fontFamily: theme.typography.body2.fontFamily,
                    fontSize: '0.95rem',
                    mt: 0.2,
                  }}>
                    {item.company}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* Bottom accent bar */}
      <Box data-aos="fade-up" data-aos-delay="700" sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <Box sx={{ width: 60, height: 6, bgcolor: theme.palette.secondary.main, borderRadius: 2, mr: 1 }} />
        <Box sx={{ width: 80, height: 6, bgcolor: '#D9DBE9', borderRadius: 2 }} />
      </Box>
    </Container>
  );
};

export default Clients;
