import { makeStyles } from "@material-ui/core";

export const useHeaderStyles = makeStyles((theme) => ({
  darkBlueBackground: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      // padding: theme.spacing(9, 0),
    }
  },
  logoStyle: {
    width: "100px",
    margin: theme.spacing(4),
    position: "absolute",
    top: 0,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      width: "70px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50px",
    }
  },
  socialContainer: {
    padding: theme.spacing(4),
  },
  socialIcons: {
    float: "right",
    padding: theme.spacing(2, 2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 1)
    }
  },
  regularContainer: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    }
  },

  headingStyle: {
    marginBottom: theme.spacing(6),
    lineHeight: "73px",
    fontWeight: 500,
    padding: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    }
  },
  title: {
    fontSize: "50px",
    lineHeight: "50px",
    fontWeight: 400,
    marginBottom: theme.spacing(1),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    }
  },
  subheading: {
    fontSize: "60px",
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
      lineHeight: 1.2,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
      lineHeight: 1,
    },
  },
  infoPara: {
    marginTop: theme.spacing(3),
  },
  modHeaderContainer: {
    textAlign: "center",
  },
  welcome: {
    textAlign: "center",
    fontSize: "61px",
    paddingTop: theme.spacing(8),
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    }
  },
  welcomePara: {
    fontSize: "35px",
    lineHeight: 1.3,
    marginBottom: theme.spacing(9),
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    }
  }



}));
