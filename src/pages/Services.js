// import React from 'react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { Container } from '@mui/material';

// const servicesData = [
//   {
//     title: 'AI Automation <br/> Systems',
//     description: 'Save time, reduce costs, and scale operations without increasing manpower.',
//     image: require('../assets/serv1.png'),
//   },
//   {
//     title: 'AI-Driven <br/> Data & Insights',
//     description: 'Make smarter decisions, predict trends, and improve performance with clarity.',
//     image: require('../assets/serv2.png'),
//   },
//   {
//     title: 'AI Marketing & Growth <br/> Systems',
//     description: 'Higher conversions, better ROI, and consistent growth across all platforms.',
//     image: require('../assets/serv3.png'),
//   },
//   {
//     title: 'AI Customer Experience <br/> Solutions',
//     description: 'Faster responses, improved customer satisfaction, and always-on support.',
//     image: require('../assets/serv4.png'),
//   },
// ];

// const Services = () => {
//   const theme = useTheme();


//   return (
//     <Container maxWidth="xl" sx={{ py: 6 }}>
//       <Box>
//         <Typography variant="h2" sx={{fontSize:{sm:'h5', md:'h2'}}} color="primary" textAlign={'center'}>Powering Tomorrow with <br />
//           Intelligent <span style={{color:'#FFB623'}}> AI Solutions</span></Typography>
//       </Box>
//       <Grid container spacing={2} py={2}>
//         {
//           servicesData.map((serv)=>{
//             return (
//               <Grid size={{xs:10,sm:6,md:3 }} key={serv.title}>
//                 <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//                   <CardMedia
//                     component="img"
//                     height="300"
//                     image={serv.image}
//                     alt={serv.title}
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       {serv.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {serv.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             )
//           })
//         }
//       </Grid>
//     </Container>
//   );
// };

// export default Services;


import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

const servicesData = [
  {
    title: ["AI Automation", "Systems"],
    description:
      "Save time, reduce costs, and scale operations without increasing manpower.",
    image: require("../assets/serv1.png"),
  },
  {
    title: ["AI-Driven Data &", "Insights"],
    description:
      "Make smarter decisions, predict trends, and improve performance with clarity.",
    image: require("../assets/serv2.png"),
  },
  {
    title: ["AI Marketing &", "Growth Systems"],
    description:
      "Higher conversions, better ROI, and consistent growth across all platforms.",
    image: require("../assets/serv3.png"),
  },
  {
    title: ["AI Customer", "Experience Solutions"],
    description:
      "Faster responses, improved customer satisfaction, and always-on support.",
    image: require("../assets/serv4.png"),
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      {/* ================= Heading ================= */}
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
          Powering Tomorrow with <br />
          Intelligent{" "}
          <Box component="span" sx={{ color: "warning.main" }}>
            AI Solutions
          </Box>
        </Typography>

        <Typography
          data-aos="fade-up"
          data-aos-delay="200"
          variant="body2"
          sx={{
            maxWidth: "620px",
            mx: "auto",
            mt: 2,
          }}
        >
          We create future-ready AI systems that drive smarter decisions
          and sustainable growth.
        </Typography>
      </Box>

      {/* ================= Cards Wrapper ================= */}
      <Box
        sx={{
          overflowX: { xs: "auto", sm: "visible" },
          pb: 2,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            flexWrap: { xs: "nowrap", sm: "wrap" },
          }}
        >
          {servicesData.map((serv, index) => (
            <Grid
              key={index}
              size={{ xs: 10, sm: 6, md: 3 }}
              sx={{ flexShrink: 0 }}
            >
              <Card
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
                sx={{
                  boxShadow: "none",
                  height: "100%",
                  // borderRadius: "14px",
                  border: "1px solid #dcdde0ff",
                  pb: 1

                }}
              >


                <img src={serv.image} alt={serv.title.join(" ")} height={300} width={'100%'} />

                {/* Content */}
                <CardContent sx={{ px: 3, pb: 4 }}>
                  <Typography
                    data-aos="fade-up"
                    data-aos-delay={400 + (index * 100)}
                    variant="h4"
                    sx={{

                      fontWeight: 500,
                      color: "primary.main",
                      lineHeight: 1.1,
                      mb: 1,
                    }}
                  >
                    {serv.title.map((line, i) => (
                      <Box key={i} component="span" display="block">
                        {line}
                      </Box>
                    ))}
                  </Typography>

                  <Typography
                    data-aos="fade-up"
                    data-aos-delay={500 + (index * 100)}
                    variant="body2"
                  >
                    {serv.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
