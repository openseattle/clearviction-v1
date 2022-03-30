import { createTheme } from "@material-ui/core";

const headingFontFamily = ["Sintony", "sans-serif"];
const bodyFontFamily = ["Inter", "sans-serif"];

const Theme = createTheme({
  spacing: 8,
  palette: {
    type: "light",
    primary: {
      light: "#A7B5CC",
      main: "#4E6C99",
      dark: "#2F3554",
      contrastText: "#FAFAFA",
    },
    secondary: {
      light: "#FFEEA3",
      main: "#FFD200",
      contrastText: "#000000",
    },
    error: {
      main: "#DF1F1F",
    },
    info: {
      main: "#007CFF",
    },
    success: {
      main: "#2A8613",
    },
    highlight: {
      main: "#9ED6BE",
      contrastText: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#4E6C99",
    },
  },
  typography: {
    fontFamily: bodyFontFamily,
    h2: {
      fontFamily: headingFontFamily,
      fontWeight: "700",
      fontSize: "56px",
      letterSpacing: "-0.5px",
      lineHeight: "72px",
    },
    h3: {
      fontFamily: headingFontFamily,
      fontWeight: "normal",
      fontSize: "45px",
      letterSpacing: "0px",
      lineHeight: "57px",
    },
    h4: {
      fontFamily: headingFontFamily,
      fontWeight: "bold",
      fontSize: "32px",
      letterSpacing: "0.25px",
      lineHeight: "40px",
    },
    h5: {
      fontFamily: headingFontFamily,
      fontWeight: "bold",
      fontSize: "22px",
      letterSpacing: "0px",
      lineHeight: "25px",
    },
    h6: {
      fontFamily: headingFontFamily,
      fontWeight: "bold",
      fontSize: "19px",
      letterSpacing: "0.15px",
      lineHeight: "23px",
    },
    subtitle1: {
      fontFamily: headingFontFamily,
      fontWeight: "normal",
      fontSize: "22px",
      letterSpacing: "0.15px",
      lineHeight: "30px",
    },
    subtitle2: {
      fontFamily: headingFontFamily,
      fontWeight: "normal",
      fontSize: "20px",
      letterSpacing: "0.1px",
      lineHeight: "28px",
    },
    body1: {
      fontWeight: "normal",
      fontSize: "20px",
      letterSpacing: "0.5px",
      lineHeight: "28px",
    },
    body2: {
      fontWeight: "normal",
      fontSize: "18px",
      letterSpacing: "0.25px",
      lineHeight: "26px",
    },
    button: {
      fontWeight: 700,
      fontSize: "18px",
      letterSpacing: "1px",
    },
    caption: {
      fontWeight: "lighter",
      fontSize: "14px",
      letterSpacing: "0.4px",
      lineHeight: "17px",
    },
    overline: {
      fontWeight: "lighter",
      fontSize: "12px",
      letterSpacing: "1.5px",
      lineHeight: "15px",
    },
  },
});

// Add font size breakpoints to support smaller devices
Theme.typography.h1 = {
  fontFamily: headingFontFamily,
  fontWeight: "normal",
  fontSize: "86px",
  letterSpacing: "-1.5px",
  lineHeight: "95px",
  [Theme.breakpoints.down("xs")]: {
    fontSize: "64px",
    lineHeight: "72px",
  },
};

Theme.overrides = {
  MuiAppBar: {
    colorPrimary: {
      backgroundColor: Theme.palette.primary.dark,
    },
  },
  MuiDrawer: {
    paper: {
      backgroundColor: Theme.palette.primary.dark,
      width: "250px",
      color: "white",
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
  MuiAccordion: {
    root: {
      border: `1px solid ${Theme.palette.primary.light}`,
      "&$expanded": {
        margin: 0,
      },
    },
    rounded: {
      borderRadius: 0,
      "&:first-child": {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
      },
      "&:last-child": {
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
      },
    },
  },
};

export default Theme;
