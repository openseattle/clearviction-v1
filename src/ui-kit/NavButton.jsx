import { Link, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navLink: {
    margin: 15,
    color: "white",
    textTransform: "none",
    "&:hover": { color: "white", textDecoration: "underline" },
  },
  navText: {
    fontFamily: ["Helvetica Neue", "sans-serif"],
    fontSize: "14px",
  },
}));
const NavButton = (props) => {
  const { pageName, url, theme } = props;
  const classes = useStyles(theme);

  return (
    <Link className={classes.navLink} href={url}>
      <Typography className={classes.navText}>{pageName}</Typography>
    </Link>
  );
};

export default NavButton;
