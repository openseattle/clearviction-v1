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
    fontSize: 16,
    body1: {
      fontFamily: "Lora",
      fontSize: "1.5rem",
    },
    body2: {
      fontFamily: "Lora",
      fontSize: "1.25rem",
    },
    subtitle1: {
      fontFamily: ["Roboto", "sans-serif"],
      fontSize: "1.5rem",
      fontWeight: "normal",
      lineHeight: "32px",
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontSize: ".875rem",
    },
    button: {
      textAlign: "center",
      fontSize: "1.125rem",
      fontFamily: ["Roboto", "sans-serif"],
      fontWeight: "bold",
      lineHeight: "3rem",
      textTransform: "none",
    },
  },
});

// Font will resize for these elements depending on screen size
Theme.typography.h1 = {
  fontSize: "4rem",
  [Theme.breakpoints.up("sm")]: {
    fontSize: "6rem",
  },
};
Theme.typography.h2 = {
  fontSize: "3rem",
  [Theme.breakpoints.up("sm")]: {
    fontSize: "4rem",
  },
};
Theme.typography.h3 = {
  fontSize: "2rem",
  [Theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
  },
};
Theme.typography.h4 = {
  fontWeight: 500,
  fontSize: "1.875rem",
  [Theme.breakpoints.up("sm")]: {
    fontSize: "2.25rem",
  },
};

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
};

export default Theme;
