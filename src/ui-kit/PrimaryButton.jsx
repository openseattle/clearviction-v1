import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: "var(--light-blue)",
    color: "#ffffff",
    textTransform: "uppercase",
    width: "30vw",
    [theme.breakpoints.down("xs")]: {
      width: "50vw",
    },
    display: "inline-block",
    borderRadius: "30px",
    padding: "10px",
    margin: "10px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "var(--gray)",
      color: "#000000",
    },
  },
}));

const PrimaryButton = (props) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} href={props.href}>
      {props.text}
    </Button>
  );
};

export default PrimaryButton;
