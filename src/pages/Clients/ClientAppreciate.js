import React, { useState, useEffect } from "react";
import { Box, Container, Typography, useTheme, Grid } from "@mui/material";
import Confetti from "react-confetti";
import CircularText from "../../reactbits/CircularText";

import c1 from '../../assets/ci1.svg';
import c2 from '../../assets/ci2.svg';
import c3 from '../../assets/ci3.svg';
import c4 from '../../assets/ci4.svg';
import c5 from '../../assets/ci5.svg';
// import c6 from '../../assets/ci6.svg';

const ClientAppreciate = () => {
  const theme = useTheme();
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAppreciateClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={450}
          recycle={false}
          gravity={0.32}
          colors={[
            theme.palette.primary.main,
            theme.palette.secondary.main,
            theme.palette.warning.main,
          ]}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}

      <Box
        sx={{
          // backgroundColor: "#F5F6FA",
          pt: { xs: 8, md: 14 },
          pb: { xs: 8, md: 12 },
          overflowX: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 8 }}>
            {/* LEFT SIDE - Grid Item */}
            <Grid item xs={12} md={8} size={{ xs: 12, md: 7 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box>

                <Typography variant="h2" color="initial" sx={{
                  fontSize: { xs: "44px", md: "72px" },
                  fontWeight: 500,
                  lineHeight: 1.15,
                  letterSpacing: "-0.5px", color: theme.palette.secondary.main
                }}>2026 Founded.<span style={{ fontWeight: 300, color: theme.palette.primary.main }}>10+ <br /> Projects Delivered. <br />
                    One</span> Clear Mission.</Typography>

                {/* Appreciate */}
                <Box
                  onClick={handleAppreciateClick}
                  sx={{
                    my: 3,
                    display: "inline-block",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: theme.palette.primary.main,
                      textDecoration: "underline",
                    }}
                  >
                    Appreciate 👏
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* RIGHT SIDE - Circular Text - Grid Item */}
            <Grid
              item
              xs={12}
              md={4}
              size={{ xs: 12, md: 5 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "end" }
              }}
            >
              <Box
                sx={{
                  width: { xs: 160, md: 200 },
                  height: { xs: 160, md: 200 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 5, mr: 3
                }}
              >
                <CircularText
                  text="• DRIVEN BY VISION • WHAT'S POSSIBLE • SINCE 2026 "
                  spinDuration={18}
                  onHover="speedUp"
                  showLogo={true}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Paragraph - Grid */}
          <Grid container>
            <Grid
              item
              xs={12}
              size={{ xs: 12, md: 12 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                mt: { xs: 6, md: 0 }
              }}
            >
              <Typography
                sx={{
                  maxWidth: "420px",
                  fontSize: "18px",
                  lineHeight: 1.7,
                  color: theme.palette.text.secondary,
                }}
              >
                Founded on February 11, 2026, Coregent carries forward a strong
                foundation from Greeclancer, with 10+ successful projects
                delivered and a commitment to building smarter solutions for
                tomorrow.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={4} alignItems={"center"} gap={{ xs: 6, md: 10 }} justifyContent={"center"} sx={{ display: 'flex' }} mt={14} >

            <img src={c4} width={100} />
            <img src={c5} width={100} />
            <img src={c3} width={70} />

            <img src={c1} width={100} />
            <img src={c2} width={100} />

          </Grid>

        </Container>
      </Box>
    </>
  );
};

export default ClientAppreciate;
