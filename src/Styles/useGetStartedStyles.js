import { makeStyles } from "@material-ui/core";
export const useGetStartedStyles = makeStyles((theme) => ({
  darkBlueBackground: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  headingStyle: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  colorfulHeadingStyle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.dark,
  },
  contentTextStyle: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  colorfulContentTextStyle: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    color: theme.palette.primary.dark,
  },
  lightContentTextStyle: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    color: theme.palette.primary.main,
  },
  regularContainer: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
  },
  paperContiainer: {
    padding: theme.spacing(6),
  },
  cardContainer: {
    padding: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
    height: "280px",
  },
  dropDown: {
    minHeight: "120px",
  },

  buttonBoxStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  iconStyle: {
    width: "100%",
    fontSize: "75px",
    color: theme.palette.secondary.main,
    margin: theme.spacing(2),
  },
  imageStyle: {
    width: "100%",
  },
}));
