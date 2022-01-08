import { createTheme } from "@material-ui/core";
const Theme = createTheme({
  palette: {
    primary: {
      main: "#c4c4c4",
      light: "#dcdcdc",
    },
    secondary: {
      main: "#2d3047",
      light: "#4e6c99",
    },
    success: {
      main: "#419d77",
      light: "#9ed6be",
      dark: "#396452"
    },
    error: {
      main: "#DF1F1F",
    }
  },
  typography: {
    fontSize: "16px",
    body1: {
      fontFamily: "Lora",
      fontSize: "1.25rem",
    },
    body2: {
      fontFamily: "Lora",
      fontSize: ".875rem",
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontSize: ".875rem",
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontSize: ".6875rem",
    },
    button: {
      textAlign: "center",
      fontSize: "1.125rem",
      fontFamily: ["Roboto", "sans-serif"],
      fontWeight: "bold",
      lineHeight: "3rem",
      textTransform: "none",
    }
  },
});

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

export default Theme;
