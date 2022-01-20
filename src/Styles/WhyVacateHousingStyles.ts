import { makeStyles } from "@material-ui/core";

export const WhyVacateHousingStyles = makeStyles((theme) => ({
  containerStyles: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
  },
    contentText: {
      margin: theme.spacing(2),
    },
    contentTextAlt: {
      color: "white",
      margin: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    title: {
      margin: theme.spacing(2),
    },
    roleImage: {
      height: 300,
      width: 300,
    },
    headingRoles: {
      color: theme.palette.primary.light,
      paddingBottom: theme.spacing(2),
    },
    blackHeaderText: {
      color: "black",
      padding: theme.spacing(2),
    },
    lightBlueSectionBackground: {
      backgroundColor: theme.palette.primary.light,
      color: "white",
    },
}));
  