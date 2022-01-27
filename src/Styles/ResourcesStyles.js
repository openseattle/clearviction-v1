import { makeStyles } from "@material-ui/core";

export const ResourcesStyles = makeStyles((theme) => ({
  darkBlueBackground: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  regularContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  headingStyle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  contentTextStyle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  listItemsStyle: {
    margin: theme.spacing(2),
  },
  buttonBoxStyle: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(5),
  },
}));
