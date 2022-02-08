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
  containerStylesAlt: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(10),
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
  darkBlueSectionBackground: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
  },
  spacer: {
    padding: theme.spacing(3),
  },
  emphasizedText: {
    color: theme.palette.highlight.main,
    fontFamily: "lora",
    margin: theme.spacing(4),
    textAlign: "center",
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
  },
  linkStyle: {
    color: "white",
    textDecoration: "underline",
  },
}));
