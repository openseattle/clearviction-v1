import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    // we can have seperate light and dark themes if the designers want to build one
    type: "light",
    primary: {
      // MAIN = dark blue, LIGHT = light blue
      main: "#2d3047",
      light: "#4e6c99",
    },
    secondary: {
      // MAIN = dark gray, LIGHT = light gray
      main: "#c4c4c4",
      light: "#dcdcdc",
    },
  },

  typography: {
    body1: "Lora",
  },
  overrides: {
    MuiButton: {
      root: {
        width: "327px",
        margin: "10px",
      },
      text: {
        padding: "10px",
        fontSize: "16px",
      },
    },
  },
});

export default theme;
