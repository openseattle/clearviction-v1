import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  RedesignButtonPrimaryStyle: {
    backgroundColor: theme.palette.highlight.main,
    color: theme.palette.highlight.contrastText,
    width: "248px",
    height: "48px",
    borderRadius: "50px",
    [theme.breakpoints.down("xs")]: {
      width: "50vw",
    },
    padding: "10px",
    margin: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
}));

export const RedesignButtonPrimary = ( props ) => {
  const classes = useStyles();

  return (
    <Button className={classes.RedesignButtonPrimaryStyle} variant="contained" {...props}>
      {props.children}
    </Button>
  );
}
