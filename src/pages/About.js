// import { Box, Container, Grid, Typography } from '@mui/material'
// import React from 'react'
// import aboutImg from '../assets/about.png';

// const About = () => {
//   return (
//     <Container maxWidth="xl" sx={{ py: 4 }}>

//       <Box>
//         <Grid container spacing={4}>
//           <Grid size={{ xs: 12, md: 6 }}>
//              <Typography variant="h5" color="initial">About Coregent</Typography>
//              <Typography variant="body1" color="initial">We turn ideas into digital products through design, 
// technology, and data.</Typography>
//              <img src={aboutImg} alt="About Coregent" style={{ width: '100%', height: 'auto' }}/>
//           </Grid>
//           <Grid size={{ xs: 12, md: 6 }}>
//                 <Typography variant="body1" color="initial">We combine creative thinking with strong technical execution. Our focus is not just on building products, but on building the right products 
// ones that are user-friendly, business-driven, 
// and future-ready.</Typography>
//           </Grid>
//         </Grid>
//       </Box>

//     </Container>
//   )
// }

// export default About



import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import aboutImg from "../assets/aboutvideo.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';


// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});



const About = () => {
  const navigate = useNavigate()
  return (
    <Container id="about-section" maxWidth="xl" sx={{ pt: { xs: 12, md: 16 }, pb:10 }}>
      <Box>
        <Grid container spacing={6} alignItems="center">
          {/* LEFT SECTION */}
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Heading */}
            <Typography
              data-aos="fade-right"
              data-aos-delay="100"
              variant="h3"
              sx={{
                fontWeight: 500,
                color: "primary.main",
                mb: 1,
              }}
            >
              About Coregent
            </Typography>

            {/* Sub text */}
            <Typography
              data-aos="fade-right"
              data-aos-delay="200"
              variant="body2"
              sx={{
                maxWidth: "420px",
                mb: 4,
              }}
            >
              We turn ideas into digital products through design,
              technology, and data.
            </Typography>

            {/* Image with decorative accent */}
            <Box data-aos="fade-up" data-aos-delay="300" sx={{ position: "relative", width: "fit-content" }}>
              <Box
                component="video"
                src={aboutImg}
                autoPlay
                loop
                muted
                alt="About Coregent"
                sx={{
                  width: "100%",
                  maxWidth: "550px",
                  // borderRadius: "8px",
                }}
              />

              {/* Yellow curved accent */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-18px",
                  right: "60px",
                  width: "80px",
                  height: "24px",
                  borderRadius: "0 0 80px 80px",
                  backgroundColor: "secondary.main",
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT SECTION */}
          <Grid size={{ xs: 12, md: 6 }} sx={{display:"flex", justifyContent:'center'}}>
            <Box data-aos="fade-left" data-aos-delay="400" sx={{ maxWidth: "500px" }}>
              <Typography
              variant="body1"
              sx={{
                maxWidth: "450px",
                lineHeight: 1.4,
                mb: 2,
              }}
            >
              We combine creative thinking with strong technical
              execution. Our focus is not just on building products,
              but on building the right products — ones that are
              user-friendly, business-driven, and future-ready.
            </Typography>

            {/* Read More */}
            <Typography
              data-aos="fade-up"
              data-aos-delay="500"
              variant="body2"
              onClick={() => {
                navigate('/about');
                window.scrollTo(0, 0);
              }}
              sx={{
                color: "primary.main",
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Read More →
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
