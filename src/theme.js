// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7fb3ff", // pastel blue
      contrastText: "#fff",
    },
    secondary: {
      main: "#5a9cff",
      contrastText: "#fff",
    },
    background: {
      default: "#0f1827",
      paper: "#1c2942",
    },
    text: {
      primary: "#ffffff",
      secondary: "#e0e6f0",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1c2942",
          color: "#e0e6f0",
          border: "1px solid #2a3a5a",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#1c2942",
          borderRadius: "8px",
          input: {
            color: "#ffffff",
          },
        },
      },
    },
  },
});

export default theme;
