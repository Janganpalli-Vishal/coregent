import React, { useRef, useState } from "react";
import { Box, Typography, useTheme, Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import b1 from "../assets/b1.svg";
import b2 from "../assets/b2.svg";
import b3 from "../assets/b3.svg";
import b4 from "../assets/b4.svg";

/* AOS init */
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

const services = [
  {
    icon: b1,
    title: "Mobile Application Development",
    desc: "We build custom Android and iOS applications.",
  },
  {
    icon: b2,
    title: "Website & Web App Development",
    desc: "We build conversion-focused websites.",
  },
  {
    icon: b3,
    title: "UI UX Designing & Graphic Designing",
    desc: "Thoughtful UI/UX designs that convert.",
  },
  {
    icon: b4,
    title: "Digital Marketing & Ad Campaign",
    desc: "Data-driven marketing strategies.",
  },
  {
    icon: b2,
    title: "Website & Web App Development",
    desc: "High-performing web solutions.",
  },
  
];

/* Scrollbar config */
const SCROLLBAR_TRACK_WIDTH = 260;
const SCROLLBAR_THUMB_WIDTH = 64;
const SCROLLBAR_HEIGHT = 6;
const SCROLLBAR_COLOR = "#FFCF23";

const Blog = () => {
  const theme = useTheme();
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleSwiperProgress = (swiper) => {
    // swiper.progress is always 0 → 1
    setProgress(swiper.progress);
  };

  const handleScrollbarClick = (e) => {
    if (!swiperRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.min(1, Math.max(0, clickX / SCROLLBAR_TRACK_WIDTH));

    swiperRef.current.slideTo(Math.round(ratio * (services.length - 1)));
  };

  return (
    <Box>
      <Container maxWidth="xl" sx={{ pt: { xs: 12, md: 16 }, pb: 12 }}>
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            data-aos="fade-up"
            sx={{
              fontFamily: "Mohave",
              fontWeight: 500,
              color: "primary.main",
            }}
          >
            Powering Your Business with <br />
            <Box component="span" sx={{ color: "warning.main" }}>
              Smart Solutions
            </Box>
          </Typography>

          <Typography
            data-aos="fade-up"
            data-aos-delay="150"
            variant="body2"
            sx={{ maxWidth: 750, mx: "auto", mt: 2 }}
          >
            We combine technology, design, and strategy to deliver services that
            move your business forward.
          </Typography>
        </Box>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onProgress={handleSwiperProgress}
          modules={[Autoplay]}
          slidesPerView={3}
          loop={true}
          spaceBetween={24}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            768: { slidesPerView: 2.1 },
            1200: { slidesPerView: 3.5 },
          }}
        >
          {services.map((serv, index) => (
            <SwiperSlide key={index}>
              <Box
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                sx={{
                  borderLeft: "1px solid #E0E0E0",
                  p: 3,
                  height: 300,
                  position: "relative",
                }}
              >
                <Box
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: `${24  * ((index + 1) * 2.1)}px`,
                    width: 4,
                    height: 40,
                    backgroundColor: theme.palette.warning.main,
                  }}
                />

                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: "#FFF9E6",
                    border: "1px solid #FFE082",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box component="img" src={serv.icon} alt={serv.title} />
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                    mb: 1,
                  }}
                >
                  {serv.title}
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {serv.desc}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Scrollbar */}
        <Box mt={3} display="flex" justifyContent="center">
          <Box
            onClick={handleScrollbarClick}
            sx={{
              width: SCROLLBAR_TRACK_WIDTH,
              height: SCROLLBAR_HEIGHT,
              backgroundColor: "rgba(0,0,0,0.08)",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left:
                  progress * (SCROLLBAR_TRACK_WIDTH - SCROLLBAR_THUMB_WIDTH),
                width: SCROLLBAR_THUMB_WIDTH,
                height: SCROLLBAR_HEIGHT,
                backgroundColor: SCROLLBAR_COLOR,
                transition: 'left 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
