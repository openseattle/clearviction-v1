import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: "var(--light-gray)",
    color: "#000000",
    width: "327px",
    [theme.breakpoints.down("xs")]: {
      width: "50vw",
    },
    padding: "10px",
    margin: "10px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "var(--gray)",
      color: "#000000",
    },
  },
}));

export default function PrimaryButton({ text, href }) {
  const classes = useStyles();

  return (
    <Button className={classes.button} href={href}>
      {text}
    </Button>
  );
}
