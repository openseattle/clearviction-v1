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
    color: theme.palette.primary.main,
  },
  contentTextStyle: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  regularContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  buttonBoxStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  iconStyle: {
    width: "100%",
    padding: theme.spacing(2),
  },
}));
