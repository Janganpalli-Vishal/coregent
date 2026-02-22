import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  Container,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "swiper/css";
import "swiper/css/navigation";

import webImg from "../../assets/swiper1.svg"
import appImg from "../../assets/swiper2.svg"
import { useNavigate } from "react-router-dom";


const SolutionsSwiper = () => {
  // const { isSmallScreen } = useResponsive();
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const [color, setColor] = useState(localStorage.getItem("theme"));

  const techItems = [
    {
      image: webImg,
      title: "Web site Development",
      description:
        "At Greeklancer, we build high-performance, user-friendly websites tailored to your business goals. Whether you need a web site.",
      link: "/web-development",
    },
    {
      image: appImg,
      title: "Mobile app Development",
      description:
        "We craft intuitive and scalable mobile apps that bring your ideas to life. Whether it’s iOS, Android, or cross-platform development.",
      link: "/mobile-app-development",
    },
    {
      image: webImg,
      title: "Backend Development",
      description:
        "Boost your product with secure, fast, and scalable backend solutions tailored to your app’s architecture and user demands.",
      link: "/dev-support",
    },
    {
      image: appImg,
      title: "UI/UX Design",
      description:
        "Engaging, user-first interfaces that drive conversions and create memorable digital experiences for your users.",
      link: "/ui-ux-design",
    },
  ];

  return (
    <Box
      sx={{
        // bgcolor: "secondary.main",
        color: "primary.contrastText",
        py: 10,
        overflow: "hidden",
        pl: { sm: 0, xs: 0, md: 6, lg: 6 },
      }}
    >
      <Container maxWidth="xl"
        sx={{
          // maxWidth: "1400px !important",
          // bgcolor: "secondary.main",
          color: "primary.contrastText",
          overflow: "hidden",
          paddingRight: { xs: 0, md: 0 },
          pl: { sm: 0, xl: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            px: 0,
            mb: 5,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              Built on Modern,
            </Typography>
            <Typography
              variant="h3"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              scalable technologies.
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
              variant="body2"
              // color="text.primary"
              sx={{
                // mt: 1.5,
                width: { xs: "100%", sm: "100%", md: "70%", lg: "70%" },
              }}
            >
              We use a wide range of modern technologies to bring your ideas to
              life efficiently, securely, and at scale.{" "}
            </Typography>
          </Box>
          <Box
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            sx={{
              mr: 5,
              width: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
              display: "flex",
              justifyContent: "end",
              mt: 2,
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => swiperRef.current.swiper.slidePrev()}
              sx={{
                bgcolor: color === "primary.main" ? "#fff" : "primary.main",
                color: "primary.contrastText",
                mr: 2,
                "&:hover": { bgcolor: "primary.main" },
              }}
            >
              <ArrowBackRoundedIcon sx={{ fontSize: { xs: "22px", md: "32px" }  }} />
            </IconButton>
            <IconButton
              onClick={() => swiperRef.current.swiper.slideNext()}
              sx={{
                bgcolor: color === "primary.main" ? "#fff" : "primary.main",
                color: "primary.contrastText",
                ml: 2,
                "&:hover": { bgcolor: "primary.main", color: "#fff" },
              }}
            >
              <ArrowForwardRoundedIcon sx={{ fontSize: { xs: "22px", md: "32px" } }} />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ px: 0 }}>
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
              },
              1200: {
                slidesPerView: 2.3,
              },
            }}
          >
            {techItems.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    bgcolor: "background.default",
                    borderRadius: 1.5,
                    boxShadow: "none",
                    p: 2,
                    height: {
                      sm: "fit-content",
                      xs: "fit-content",
                      md: "300px",
                      lg: "300px",
                    },
                  }}
                  data-aos="fade-up"
                  data-aos-duration={`${1000 + 50 * index}`}
                  data-aos-delay={`${300 + 150 * index}`}
                  data-aos-offset={`${200 + 10 * index}`}
                  onClick={() => navigate(item.link)}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img loading="lazy" src={item.image} width={100} alt={item.image} />
                    <Typography
                      variant="h5"
                      color="primary.main"
                      fontWeight={400}
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      // color="text.primary"
                      textAlign={"center"}
                    >
                      {item.description}
                    </Typography>
                    <Button sx={{ color: "primary.main", mt: 2 }}>
                      Read more{" "}
                      <ArrowForwardRoundedIcon
                        fontSize="small"
                        sx={{ ml: 0.5 }}
                      />
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default SolutionsSwiper;
