import React from 'react'
import { Box, Container, Typography } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from '../../assets/herosec-bg.svg'




const ClientHero = () => {
    return (
        <div>
            <Box
                sx={{
                    minHeight: { xs: "70vh", md: "110vh" },
                    display: "flex",
                    alignItems: "center",
                    position: 'relative',
                    backgroundImage: `url("${bg}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <Container maxWidth="xl">
                    <Box sx={{ maxWidth: "990px", px:{sm:0, md:4}}}>

                        <Typography
                            data-aos="fade-up"
                            data-aos-delay="100"
                            sx={{
                                fontFamily: "Mohave",
                                fontSize: { xs: "55px", md: "96px" },
                                fontWeight: 600,
                                lineHeight: 1,
                                mb: 0,
                                color: "primary.main",

                            }}
                        >
                            Turning Global Ambitions

                        </Typography>


                        <Typography
                            data-aos="fade-up"
                            data-aos-delay="200"
                            sx={{
                                fontFamily: "Mohave",
                                fontSize: { xs: "55px", md: "96px" },
                                fontWeight: 600,
                                lineHeight: 1,
                                mb: 2,
                                color: "primary.main",
                            }}
                        >
                            into <span style={{
                                backgroundImage: "linear-gradient(to right, #FFCF23, #FFB623)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>Measurable Impact.</span>
                        </Typography>

                        <Typography
                            data-aos="fade-up"
                            data-aos-delay="400"
                            variant="body2"
                            sx={{
                                maxWidth: "800px",
                                fontSize: "18px",
                                marginLeft: '2px'
                            }}
                        >
                            From strategy to execution, Coregent helps brands move from vision to real-world success with clarity and precision.                        </Typography>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default ClientHero