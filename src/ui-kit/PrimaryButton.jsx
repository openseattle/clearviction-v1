import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: "var(--light-blue)",
    color: "#ffffff",
    textTransform: "none",
    minHeight: "48px",
    minWidth: "248px",
    maxWidth: "30vw",
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "12px",
    },
    borderRadius: "30px",
    padding: "10px",
    margin: "10px",

    "&:hover": {
      backgroundColor: "var(--gray)",
      color: "#000000",
    },
  },
}));

const PrimaryButton = (props) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} href={props.href} tabIndex={0}>
      {props.text}
    </Button>
  );
};

export default PrimaryButton;
