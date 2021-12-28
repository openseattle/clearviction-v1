import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
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
