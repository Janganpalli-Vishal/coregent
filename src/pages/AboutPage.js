import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, IconButton, Grid } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PartneringSection from './PartneringSection';
import bg from '../assets/herosec-bg.svg'

const AboutPage = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const services = [
        {
            title: "UI/UX DESIGN",
            description: "User-centered, business-driven experiences",
            dots: 1,
        },
        {
            title: "WEB & APP DEVELOPMENT",
            description: "Reliable, scalable, and secure builds",
            dots: 2,
        },
        {
            title: "AI & SMART INTEGRATIONS",
            description: "Automation and intelligence that improve efficiency",
            dots: 3,
        },
        {
            title: "ONGOING SUPPORT & OPTIMIZATION",
            description: "Continuous improvement as your business grows",
            dots: 4,
        },
    ];


    // const [stopSticky, setStopSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const pageHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const scrollPercentage = (scrollTop / pageHeight) * 100;

            // if (scrollPercentage >= 80) {
            //     setStopSticky(true);
            // } else {
            //     setStopSticky(false);
            // }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 200, // 0.2 seconds
            once: true,
        });
    }, []);

    return (
        <Box sx={{backgroundColor:"#f5f6fb"}}> 
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
                            Where strong foundations
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
                            meet <span style={{
                                backgroundImage: "linear-gradient(to right, #FFCF23, #FFB623)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>future-ready</span> thinking
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
                            We don’t chase trends. We build systems, brands, and experiences that stand the test of time.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <PartneringSection />

            <Box>

                <Box
                    sx={{
                        position: "relative",
                        py: { xs: 5, md: 5 },
                    }}
                >
                    <Container maxWidth="xl">
                        <Grid container>

                            {/* LEFT HEADING */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box sx={{
                                    position: "sticky",
                                    top: "35vh",
                                }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "32px", md: "58px" },
                                            fontWeight: 600,
                                            color: "primary.main",
                                        }}
                                    >
                                        Why{" "}
                                        <Box
                                            component="span"
                                            sx={{
                                                backgroundImage:
                                                    "linear-gradient(to right, #FFCF23, #FFB623)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            Coregent
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* RIGHT CONTENT */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box sx={{ maxWidth: "650px" }}>
                                    <Typography
                                        sx={{
                                            mt: 3,
                                            fontSize: { xs: "22px", md: "36px" },
                                            fontWeight: 500,
                                            color: "primary.main",
                                            mb: 7,
                                            lineHeight: 1.0,
                                        }}
                                    >
                                        Built for businesses that value <br /> clarity, consistency, and growth.
                                    </Typography>

                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        Coregent is a digital solutions company created with a clear purpose: to help businesses build strong, reliable, and future-ready digital foundations. We work with founders, leadership teams, and growing organizations that want more than quick fixes or short-term results.
                                    </Typography>

                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        At Coregent, we believe great outcomes start with understanding the business first. Before design or development begins, we take time to understand your goals, users, challenges, and growth plans. This ensures every decision we make supports real business value—whether that’s improving efficiency, increasing customer engagement, or enabling scalability.
                                    </Typography>

                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        Our approach is structured and disciplined. We follow proven processes, clear timelines, and transparent communication so stakeholders always know what’s happening and why. This reduces uncertainty, avoids rework, and helps projects move forward with confidence.
                                    </Typography>

                                    <Typography variant="body1">
                                        We combine thoughtful UI/UX design, robust development, and modern technologies—including AI integrations—to build solutions that are practical, scalable, and maintainable. Everything we create is designed to perform in real-world business environments, not just look good on paper.
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>



                <Box
                    sx={{
                        position: "relative",
                        py: { xs: 10, md: 20 },
                    }}
                >
                    <Container maxWidth="xl">
                        <Grid container>

                            {/* LEFT HEADING */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box
                                    sx={{
                                        position: "sticky",
                                        top: "35vh",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "32px", md: "58px" },
                                            fontWeight: 600,
                                            color: "primary.main",
                                        }}
                                    >
                                        Our{" "}
                                        <Box
                                            component="span"
                                            sx={{
                                                backgroundImage:
                                                    "linear-gradient(to right, #FFCF23, #FFB623)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            Approach
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* RIGHT CONTENT */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box sx={{ maxWidth: "650px" }}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "22px", md: "36px" },
                                            fontWeight: 500,
                                            color: "primary.main",
                                            mb: 7,
                                            mt: 3,
                                            lineHeight: 1.0,
                                        }}
                                    >
                                        Simple, structured, and business-focused.
                                    </Typography>

                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        At Coregent, our approach is built to remove uncertainty from digital projects and replace it with clarity, control, and confidence. We understand that for businesses, time, cost, and outcomes matter just as much as creativity and technology.
                                    </Typography>

                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        That’s why we follow a clear, step-by-step process designed to keep all stakeholders aligned from day one. Every project begins with understanding the business—its goals, challenges, users, and success metrics. This foundation ensures that decisions are driven by purpose, not assumptions.
                                    </Typography>

                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        We then move into structured planning, where scope, timelines, and responsibilities are clearly defined. Clients always know what is being built, why it is being built, and how it contributes to business objectives. This eliminates confusion, prevents scope creep, and keeps execution predictable.
                                    </Typography>

                                    <Typography variant="body1">
                                        Throughout the project, we maintain transparent communication and regular progress updates. Stakeholders are never left guessing. Feedback loops are intentional and efficient, allowing teams to make informed decisions without delays or rework.
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>

                {/* ================= WHAT WE DO ================= */}
                <Box
                    sx={{
                        position: "relative",
                        py: { xs: 10, md: 20 },
                    }}
                >
                    <Container maxWidth="xl">
                        <Grid container>

                            {/* LEFT STICKY HEADING */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box
                                    sx={{
                                        position: "sticky",
                                        top: "35vh",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "32px", md: "58px" },
                                            fontWeight: 600,
                                            color: "primary.main",
                                        }}
                                    >
                                        What{" "}
                                        <Box
                                            component="span"
                                            sx={{
                                                backgroundImage:
                                                    "linear-gradient(to right, #FFCF23, #FFB623)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            We Do
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* RIGHT CONTENT */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box sx={{ maxWidth: "650px" }}>

                                    {/* Section Heading */}
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "22px", md: "36px" },
                                            fontWeight: 500,
                                            color: "primary.main",
                                            mb: 3,
                                            mt: 2.5,
                                            lineHeight: 1.0,
                                        }}
                                    >
                                        Design, technology, and intelligence working together.
                                    </Typography>

                                    {/* Description */}
                                    <Typography variant="body1" sx={{ mb: 6 }}>
                                        We build practical, scalable digital solutions that align with business goals and deliver long-term value.
                                    </Typography>

                                    {/* ================= SERVICE CARDS ================= */}

                                    {services.map((service, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                border: "1px solid #E0E4ED",
                                                p: 4,
                                                mb: index !== services.length - 1 ? 4 : 0,
                                            }}
                                        >
                                            {/* Dots */}
                                            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                                                {[...Array(service.dots)].map((_, i) => (
                                                    <Box
                                                        key={i}
                                                        sx={{
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: "50%",
                                                            backgroundColor: "#FFCF23",
                                                        }}
                                                    />
                                                ))}

                                                {[...Array(4 - service.dots)].map((_, i) => (
                                                    <Box
                                                        key={`gray-${i}`}
                                                        sx={{
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: "50%",
                                                            backgroundColor: "#C9D0E3",
                                                        }}
                                                    />
                                                ))}
                                            </Box>

                                            {/* Title */}
                                            <Typography
                                                variant='h5'
                                                sx={{
                                                    fontWeight: 500,
                                                    color: "primary.main",
                                                    mb: 0.5,
                                                }}
                                            >
                                                {service.title}
                                            </Typography>

                                            {/* Description */}
                                            <Typography variant="body2">
                                                {service.description}
                                            </Typography>
                                        </Box>
                                    ))}


                                </Box>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>



            </Box>
        </Box>
    );


}

export default AboutPage