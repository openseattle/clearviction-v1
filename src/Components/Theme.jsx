import { createTheme } from "@material-ui/core";
const Theme = createTheme({
  spacing: 8,
  palette: {
    secondary: {
      main: "#c4c4c4",
      light: "#dcdcdc",
    },
    primary: {
      dark: "#2F3554",
      main: "#2d3047",
      light: "#4e6c99",
      contrastText: "#ffffff"
    },
    success: {
      main: "#419d77",
      light: "#9ed6be",
      dark: "#396452",
    },
    error: {
      main: "#DF1F1F",
    },
    highlight: {
      main: "#FFD200",
    },
  },
  typography: {
    fontFamily: ["Sintony", "sans-serif"]
  }
});

Theme.overrides = {
  MuiDrawer: {
    paper: {
      backgroundColor: Theme.palette.primary.main,
      width: "250px",
    },
  },
  MuiTabs: {
    root: {
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    indicator: {
      height: 0,
    },
  },
  MuiTab: {
    root: {
      fontSize: 14,
      backgroundColor: Theme.palette.primary.light,
    },
    selected: {
      color: Theme.palette.primary.dark,
      backgroundColor: "white",
    },
  },
  MuiButton: {
    root: {
      borderRadius: 50,
    },
    label: {
      fontFamily: ["Inter", "sans-serif"],
      textDecoration: "none",
    }
  },
  MuiButtonGroup: {
    root: {
      borderRadius: 50,
    },

  },
};

export default Theme;
