import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: "#ffffff",
    color: "var(--light-blue)",
    padding: "10px",
    textTransform: "uppercase",
    margin: "10px",
    border: "var(--light-blue) solid",
    width: "30vw",
    borderRadius: "30px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#3b5173",
      color: "#ffffff",
    },
  },
});

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
