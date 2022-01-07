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
  },
  typography: {
    body1: {
      fontFamily: "lora",
    },
  },
});

export default Theme;
