import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import tech1 from "../../assets/tech1.png";
import tech2 from "../../assets/tech2.png";
import tech3 from "../../assets/tech3.png";
import tech4 from "../../assets/tech4.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import smartphones from "../../assets/smartphones.png"
import Mockup1 from "../../assets/Mockup1.png"

const techGridData = [
  {
    title: "Modern web development, powered by leading frameworks",
    description:
      "At Greeklancer, we specialize in building dynamic, high-performance websites using modern frameworks like React, Angular, and more. Whether it’s a sleek single-page application or a complex enterprise platform, our team crafts fast, responsive, and scalable web solutions. We choose the right tech stack for your project - focused on performance, user experience, and long-term success. Your vision, backed by the power of modern web technologies.",
    image:Mockup1
    },
  {
    title: "Custom mobile app development for Android & iOS",
    description:
      "We design and develop mobile apps that are fast, intuitive, and built to scale - whether it's for Android, iOS, or cross-platform. Our mobile solutions combine sleek UI, smooth functionality, and strong performance to help you engage users anywhere, anytime. From MVPs to enterprise-grade apps, we bring your ideas to life with the latest tech and frameworks like Flutter, React Native, and Swift. Let’s build an app your users will love — and keep coming back to.",
    image: smartphones,

  },
  {
    title: "Beautiful interfaces with purposeful experiences",
    description:
      "At Greeklancer, we design experiences that not only look great but feel effortless to use. From wireframes to pixel-perfect UIs, our process is built around understanding your users and business goals. We combine creativity, usability, and consistency to build designs that boost engagement and drive conversions. Whether it’s a mobile app or a web platform, we make sure every interaction feels natural and intuitive.",
    image: tech3,
  },
  {
    title: "Boost your brand with data-driven marketing",
    description:
      "At Greeklancer, we help brands grow online through tailored digital marketing strategies. From SEO and social media to paid ads and content marketing, we focus on delivering. Our team uses data, creativity, and the latest tools to attract the right audience and turn them into loyal customers. Let us help you build visibility, grow engagement, and drive conversions across all digital channels.",
    image: tech4,
  },
];

const Solutionsontent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Box sx={{ bgcolor: "none" }}>
      <Container maxWidth="xl" sx={{ bgcolor: "none", color: "primary.contrastText", py: 10 }}>
        {techGridData.map((item, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              pl: { xs: 0 },
              pr: { xs: 0 },
              alignItems: "center",
              gap: 5,
              mb: 5,
              flexWrap: "wrap",
            }}
            key={index}
          >
            {/* Box for the Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "auto",
                display: "flex",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                loading="lazy"
                src={item.image? item.image :"no image found"}
                alt={item.title}
                sx={{
                  width: "80%",
                  height: "auto",
                  borderRadius: 2,
                  objectFit: "cover",
                }}
                data-aos="fade-up"
                data-aos-duration="600"
                
              />
            </Box>

            {/* Box for the Text */}
            <Box
              sx={{
                flex: 1,
                width: { xs: "100%", md: "50%" },
                pl: { xs: 0, md: 5 }, // Add padding to the left on medium and larger screens
              }}
            >
              <Typography
                variant="h3"
                // fontWeight="400"
                mb={2}
                gutterBottom
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                
                textAlign={"justify"}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Solutionsontent;
