import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
    width: "327px",
    padding: "10px",
    margin: "10px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
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
