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
    fontFamily: `"Lexend", "Mohave", sans-serif`,

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
      fontSize: "42px",
      fontWeight: 500,
      lineHeight: 1.2,
      color: "#011C75",
    },

    h4: {
      fontFamily: "Mohave",
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: 1.3,
      color: "#011C75",
    },

    /* SECTION TITLES */
    h5: {
      fontFamily: "Lexend",
      fontSize: "26px",
      fontWeight: 400,
      lineHeight: 1.4,
      color: "#000000",
    },

    /* BODY TEXT */
    body1: {
      fontFamily: "Lexend",
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: 1.6,
      color: "#000000",
    },

    body2: {
      fontFamily: "Lexend",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.6,
      color: "#97A1C0",
    },

    button: {
      fontFamily: "Lexend",
      fontSize: "16px",
      fontWeight: 500,
      textTransform: "none",
    },
  },

  /* =========================
     Component Overrides
  ========================= */
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          padding: "12px 24px",
        },
        containedPrimary: {
          backgroundColor: "#011C75",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#00155A",
          },
        },
        containedSecondary: {
          backgroundColor: "#FFCF23",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#FFB623",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        },
      },
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          body1: "p",
          body2: "p",
        },
      },
    },
  },
});

export default theme;
