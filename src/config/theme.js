import { createTheme } from "@mui/material/styles";

/**
 * Core Design Theme
 * Based on provided brand colors, typography scale & font families
 */

const theme = createTheme({
  palette: {
    mode: "light",

    /* =========================
       Brand Colors
    ========================= */
    primary: {
      main: "#011C75", // Deep Blue (Headings, Primary buttons)
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#FFCF23", // Primary Accent Yellow
      contrastText: "#000000",
    },

    warning: {
      main: "#FFB623", // Secondary Yellow Accent
    },

    text: {
      primary: "#000000", // Main text
      secondary: "#97A1C0", // Muted / description text
    },

    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },

    divider: "#97A1C0",
  },

  /* =========================
     Typography System
  ========================= */
  typography: {
    fontFamily: `"Mohave", "Mohave", sans-serif`,

    /* HERO / DISPLAY */
    h1: {
      fontFamily: "Mohave",
      fontSize: "106px",
      fontWeight: 600,
      lineHeight: 1.05,
      color: "#011C75",
    },

    h2: {
      fontFamily: "Mohave",
      fontSize: "68px",
      fontWeight: 500,
      lineHeight: 1.1,
      color: "#011C75",
    },

    h3: {
      fontFamily: "Mohave",
      fontSize: "48px",
      fontWeight: 500,
      lineHeight: 1.2,
      color: "#011C75",
    },

    h4: {
      fontFamily: "Mohave",
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: 1.3,
      color: "#011C75",
    },

    /* SECTION TITLES */
    h5: {
      fontFamily: "Mohave",
      fontSize: "26px",
      fontWeight: 400,
      lineHeight: 1.4,
      color: "#000000",
    },

    /* BODY TEXT */
    body1: {
      fontFamily: "Mohave",
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: 1.6,
      color: "#000000",
    },

    body2: {
      fontFamily: "Mohave",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.2,
      color: "#97A1C0",
    },

    button: {
      fontFamily: "Mohave",
      fontSize: "16px",
      fontWeight: 500,
      textTransform: "none",
    },
  },

});

export default theme;
