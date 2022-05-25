import { makeStyles } from "@material-ui/core";

export const useHomeStyles = makeStyles((theme) => ({
  body: {
    padding: theme.spacing(5),
    margin: theme.spacing(3, "auto"),
    width: "791px",
    color: "#1d1c1c",
    [theme.breakpoints.down("sm")]: {
        width: "80%",
        padding: theme.spacing(1),
      }
  },
  bodyPara: {
    marginBottom: theme.spacing(3),
  },
  cardSubheading: {
    marginBottom: theme.spacing(3),
  },
  cardBody: {
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    color: "#2b2929",
  },
}));
