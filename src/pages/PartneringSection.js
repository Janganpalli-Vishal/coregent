import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

import bl1 from "../assets/bl1.svg";
import bl2 from "../assets/bl2.svg";
import green1 from "../assets/gr1.svg";
import green2 from "../assets/gr2.svg";
import yellow1 from "../assets/yellow1.png";
import yellow2 from "../assets/yellow2.svg";

const PartneringSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 18 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">

        {/* ================= HEADING ================= */}
        <Typography
          sx={{
            fontSize: { xs: "40px", md: "72px" },
            fontWeight: 600,
            color: "primary.main",
            lineHeight: 1.1,
          }}
        >
          Partnering With Businesses for
          <br />
          <Box component="span" sx={{ color: "#F4C21C" }}>
            Long-Term Growth
          </Box>
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mb: 14,
            fontSize: "18px",
            color: "#7C86A5",
          }}
        >
          We help businesses grow with clear strategy, reliable execution, and a long-term partnership mindset.
        </Typography>

        {/* ================= 3 COLUMNS ================= */}
        <Grid container spacing={8} alignItems="flex-start">

          {/* ========= COLUMN 1 ========= */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{
              position: "relative", mb: 6, width: 320,        // FIXED WIDTH
              height: 140,
            }}>
              <Box
                sx={{
                  transform: 'rotate(-2deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(-1deg)'
                  }
                }}
              >
                <img src={bl1} />
              </Box>
              <Box
                sx={{
                  transform: 'rotate(2deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(1deg)'
                  }
                }}
              >
                <img src={bl2} />
              </Box>
            </Box>

            <Typography sx={{ fontSize: "18px", lineHeight: 1.8 }}>
              We don’t jump straight into design or development. Coregent
              starts by understanding your business model, users, and revenue
              goals—so every solution supports real growth, not just visuals.
            </Typography>
          </Grid>

          {/* ========= COLUMN 2 ========= */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{
             mb: 6, width: 320,        // FIXED WIDTH
              height: 140,
            }}>
              <Box
                sx={{
                  transform: 'rotate(-2deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(-1deg)'
                  }
                }}
              >
                <img src={green1} />
              </Box>
              <Box
                sx={{
                  transform: 'rotate(2deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(1deg)'
                  }
                }}
              >
                <img src={green2} />
              </Box>
            </Box>

            <Typography sx={{ fontSize: "18px", lineHeight: 1.8 }}>
              Clear processes, defined timelines, and transparent communication.
              Clients always know what’s being built, how it’s progressing,
              and when it will be delivered.
            </Typography>
          </Grid>

          {/* ========= COLUMN 3 ========= */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: "relative", mb: 6 }}>

              <Box
                sx={{
                  backgroundImage: `url(${yellow1})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  color: "#001C75",
                }}
              >
                {/* BUILT FOR CONFIDENT */}
              </Box>

              <Box
                sx={{
                  backgroundImage: `url(${yellow2})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  color: "#001C75",
                  mt: -2,
                }}
              >
                {/* DECISION-MAKING */}
              </Box>
            </Box>

            <Typography sx={{ fontSize: "18px", lineHeight: 1.8 }}>
              We provide clarity, documentation, and predictable delivery so
              business leaders can make informed decisions without technical uncertainty.
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default PartneringSection;
