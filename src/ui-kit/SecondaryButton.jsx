import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: "#ffffff",
    color: "var(--light-blue)",
    textTransform: "uppercase",
    width: "30vw",
    [theme.breakpoints.down("xs")]: {
      width: "50vw",
    },
    display: "inline-block",
    border: "var(--light-blue) solid",

    borderRadius: "30px",
    padding: "10px",
    margin: "10px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "var(--gray)",
      color: "#ffffff",
    },
  },
}));

export default function SecondaryButton({
  text,
  type,
  linkTo,
  externalLink,
  onClick,
}) {
  const classes = useStyles();
  return externalLink ? (
    <Button
      rel="noopener noreferrer"
      href={linkTo}
      type={type}
      className={classes.button}
      target={"_blank"}
    >
      {text}
    </Button>
  ) : (
    <Button
      href={linkTo}
      onClick={onClick}
      type={type}
      className={classes.button}
    >
      {text}
    </Button>
  );
}
