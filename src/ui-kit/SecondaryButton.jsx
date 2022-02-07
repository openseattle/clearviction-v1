import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: "var(--light-blue)",
    color: "#ffffff",
    width: "flex",
    padding: "10px",
    margin: "10px",
    textTransform: "none",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "var(--gray)",
      color: "#000000",
    },
  },
});

export default function SecondaryButton({ text, type, linkTo, externalLink }) {
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
    <Button href={linkTo} type={type} className={classes.button}>
      {text}
    </Button>
  );
}
