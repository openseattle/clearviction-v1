import {
    Box,
    Grid,
    makeStyles,
    Typography,
    Container,
    List,
    ListItem,
    ListItemIcon,
  } from "@material-ui/core";

export const WhyVacateHousingStyles = makeStyles((theme) => ({
    volunteer: {
      marginTop: theme.spacing(5),
    },
    icon: {
      fontSize: "4rem",
      color: "yellow",
    },
    contentText: {
      margin: theme.spacing(2),
    },
    contentTextAlt: {
      color: "white",
      margin: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    listTextAlt: {
      color: "white",
    },
    title: {
      margin: theme.spacing(2),
    },
    titleAlt: {
      margin: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      color: "white",
    },
    backgroundSecondary: {
      height: 200,
      backgroundColor: theme.palette.primary.main,
      color: "white",
      padding: theme.spacing(5),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
      },
      [theme.breakpoints.down("xs")]: {
        height: 300,
      },
    },
    backgroundLightSecondary: {
      height: 400,
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(5),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1),
      },
      [theme.breakpoints.down("xs")]: {
        height: 300,
      },
    },
    roleImage: {
      height: 300,
      width: 300,
    },
    titleRoles: {
      padding: theme.spacing(5),
    },
    headingRoles: {
      color: theme.palette.primary.light,
      paddingBottom: theme.spacing(2),
    },
    roleAdjust: {
      [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(5),
      }
    },
    buttonStyles: {
      justifyContent: "center",
      margin: theme.spacing(10),
    },
    ourMission: {
        backgroundColor: theme.palette.primary.light,
        color: "white",
      },
    theProblemIcon: {
    color: "yellow",
    fontSize: "5rem",
    margin: theme.spacing(3),
    },
  }));
  