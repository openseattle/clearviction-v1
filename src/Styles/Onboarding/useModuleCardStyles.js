import { makeStyles } from "@material-ui/core";

export const useModuleCardStyles = makeStyles((theme) => ({
  moduleCard: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    margin: theme.spacing(4, "auto"),
    width: "790px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    }
  },
  cardHeading: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2, 5),
    color: "#f6f6f6",
    borderRadius: "20px",
    textTransform: "uppercase",

  },
  cardSubheading: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-around",

    }
  },
  cardBody: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(4),
    color: "#2b2929",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(3),
    }
  },
  iconStyle: {
    marginRight: theme.spacing(4.5),
  },
  headingStyle: {
    marginBottom: theme.spacing(6),
    fontSize: "50px",
    lineHeight: "93px",
    textDecoration: "none",
  },
  subheadingStyle: {
    marginBottom: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    }
  },
  linkTextStyle: {
    marginRight: theme.spacing(1),
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));
