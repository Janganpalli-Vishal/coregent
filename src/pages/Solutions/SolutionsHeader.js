import React, { useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import bg from '../../assets/herosec-bg.svg'
import starImg from '../../assets/star.png'
import bgstrips from '../../assets/bgstrips.png'


const SolutionsHeader = () => {

    const data = {
        services: [
            { emoji: starImg, text: "Web development" },
            { emoji: starImg, text: "Mobile app development" },
            { emoji: starImg, text: "UI/UX Designing" },
            { emoji: starImg, text: "Graphics Design" },
            { emoji: starImg, text: "Digital Strategy" },
            { emoji: starImg, text: "Software Engineering" },
        ],
    };

     useEffect(() => {
    const scrollContent = document.querySelector(".scroll-content");
    const scrollWidth = scrollContent.scrollWidth;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0;
      }
      scrollContent.style.transform = `translateX(-${scrollPosition}px)`;
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

    return (
        <div>
            <Box
                sx={{
                    minHeight: { xs: "90vh", md: "110vh" },
                    display: "flex",
                    alignItems: "center",
                    position: 'relative',
                    backgroundImage: `url("${bg}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    // px:'0px !important'

                }}
            >
                <Container maxWidth="xl">
                    <Box sx={{
                        // maxWidth: "990px",

                        px: { xs: 0, md: 4 },
                        position: 'relative',
                    }}>

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
                            Where creativity meets
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
                            <span style={{
                                backgroundImage: "linear-gradient(to right, #FFCF23, #FFB623)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>cutting-edge technologies.
                            </span>
                        </Typography>

                        <Typography
                            data-aos="fade-up"
                            data-aos-delay="400"
                            variant="body2"
                            sx={{
                                maxWidth: "680px",
                                fontSize: "18px",
                                marginLeft: '2px'
                            }}
                        >
                            We build future-ready experiences that elevate your brand. Creativity fuels us. Technology drives us. Results define us.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="xl">
                <Box
                    sx={{
                        bgcolor: "#1a1a1a",
                        minHeight: { xs: "", md: 550 },
                        borderRadius: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 8,
                    }}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                // px={8}
                >
                    {/* <VideocamOutlinedIcon sx={{ fontSize: 80, color: 'text.primary' }} /> */}
                    <video
                        src="https://res.cloudinary.com/dam7djhj2/video/upload/v1750003376/large_uxqxkv.mp4"
                        autoPlay
                        loop
                        muted
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "8px",
                        }}
                    />
                </Box>
            </Container>

            <Box sx={{ pb: 6 }}>
                <Box
                    className="scroll-banner"
                    sx={{
                        overflow: "hidden", width: "100%", py: 2,
                        // backgroundImage: `url(${bgstrips})`,
                        backgroundColor: "warning.main",
                        backgroundRepeatX: "repeat",
                    }}
                >
                    <Box
                        className="scroll-content"
                        sx={{
                            display: "flex",
                            whiteSpace: "nowrap",
                            transition: "transform 0.2s linear infinite",
                        }}
                    >
                        {data.services.map((service, index) => (
                            <Box
                                key={index}
                                sx={{
                                    margin: "0 20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    loading="lazy"
                                    src={service.emoji}
                                    alt={service.text}
                                    style={{ width: "30px", height: "30px", marginRight: "30px" }}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{ color: "#ffffff", mb: 0, fontWeight: 400 }}
                                >
                                    {service.text}
                                </Typography>
                            </Box>
                        ))}
                        {/* Duplicating the content for infinite scroll effect */}
                        {data.services.map((service, index) => (
                            <Box
                                key={index + data.services.length}
                                sx={{
                                    margin: "0 20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    loading="lazy"
                                    src={service.emoji}
                                    alt={service.text}
                                    style={{ width: "30px", height: "30px", marginRight: "30px" }}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{ color: "primary.contrastText", mb: 0, fontWeight: 400 }}
                                >
                                    {service.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default SolutionsHeader