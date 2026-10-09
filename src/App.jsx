
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

import EjercitoContainer from "./containers/EjercitoContainer";

const tema = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#C5A15A",
      contrastText: "#191512",
    },

    secondary: {
      main: "#8F2630",
    },

    background: {
      default: "#100F0E",
      paper: "#211C19",
    },

    text: {
      primary: "#F0E6D3",
      secondary: "#B9AD9C",
    },

    success: {
      main: "#65794B",
    },

    error: {
      main: "#A63740",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#211C19",
          border: "1px solid #51402E",
          boxShadow: "0 8px 20px #00000055",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "bold",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#34251E",
          color: "#D9BD80",
          fontWeight: "bold",
        },

        root: {
          borderBottom: "1px solid #49382B",
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <EjercitoContainer />
    </ThemeProvider>
  );
}
