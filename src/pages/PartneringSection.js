import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

import bl1 from "../assets/blue1.svg";
import bl2 from "../assets/blue2.svg";
import green1 from "../assets/gr1.svg";
import green2 from "../assets/gr2.svg";
import yellow1 from "../assets/yellow1.svg";
import yellow2 from "../assets/yellow2.svg";

import pc1 from "../assets/pc1.svg";
import pc2 from "../assets/pc2.svg";
import pc3 from "../assets/pc3.svg";

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
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}
          >
            <Box sx={{ mb: 2.5 }}>
              <img
                src={pc1}
              // width="220"
              // style={{ transform: "rotate(-3deg)", display: "block", margin: "0 auto" }}
              />
              {/* <img
        src={bl2}
        width="240"
        style={{ transform: "rotate(3deg)", display: "block", margin: "12px auto 0" }}
      /> */}
            </Box>

            <Typography sx={{ fontSize: "18px", lineHeight: 1.8 }}>
              We don’t jump straight into design or development. Coregent
              starts by understanding your business model, users, and revenue
              goals—so every solution supports real growth, not just visuals.
            </Typography>
          </Grid>

          {/* ========= COLUMN 2 ========= */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}
          >
            <Box sx={{ mb: 6 }}>
              <img
                src={pc2}
                width="340"
              // style={{ transform: "rotate(-3deg)", display: "block", margin: "0 auto" }}
              />
              {/* <img
        src={green2}
        width="340"
        style={{ transform: "rotate(3deg)", display: "block", margin: "12px auto 0" }}
      /> */}
            </Box>

            <Typography sx={{ fontSize: "18px", lineHeight: 1.8 }}>
              Clear processes, defined timelines, and transparent communication.
              Clients always know what’s being built, how it’s progressing,
              and when it will be delivered.
            </Typography>
          </Grid>

          {/* ========= COLUMN 3 ========= */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}
          >
            <Box sx={{ mb: 6 }}>
              <img
                src={pc3}
                width="320"
              // style={{ transform: "rotate(3deg)", display: "block", margin: "0 auto" }}
              />
              {/* <img
        src={yellow2}
        width="260"
        style={{ transform: "rotate(-3deg)", display: "block", margin: "12px auto 0" }}
      /> */}
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
