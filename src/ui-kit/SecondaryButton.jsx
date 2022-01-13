import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: "var(--light-blue)",
    color: "#ffffff",
    width: "207px",
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

export default function SecondaryButton({ text, href }) {
  const classes = useStyles();

  return (
    <Button className={classes.button} href={href}>
      {text}
    </Button>
  );
}
