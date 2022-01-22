import { makeStyles } from "@material-ui/core";

export const WhyVacateEmploymentStyles = makeStyles((theme) => ({
  containerStyles: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
  },
    title: {
      margin: theme.spacing(2),
    },
    contentText: {
      margin: theme.spacing(2),
    },
    lightBlueSectionBackground: {
      backgroundColor: theme.palette.primary.light,
      color: "white",
    },
    spacer: {
      padding: theme.spacing(3),
    },
    emphasizedText: {
        color: theme.palette.highlight.main,
        fontFamily: "lora",
        margin: theme.spacing(4),
        textAlign: "center"
    },
    regularText: {
      fontFamily: ["roboto", "sans-serif"],
      margin: theme.spacing(2),
      textAlign: "center",
      fontSize: 18,
      lineHeight: 1.25,
    },
    citeText: {
      margin: theme.spacing(2),
      textAlign: "center",
      fontSize: 12,
    }
}));