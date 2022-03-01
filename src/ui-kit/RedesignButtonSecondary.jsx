import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  RedesignButtonSecondaryStyle: {
    width: "248px",
    height: "48px",
    border: "3px solid",
    borderRadius: "50px",
    color: theme.palette.primary.dark,
    [theme.breakpoints.down("xs")]: {
      width: "50vw",
    },
    padding: "10px",
    margin: "10px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      borderColor: theme.palette.primary.dark,
    },
  },
}));

export const RedesignButtonSecondary = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.RedesignButtonSecondaryStyle}
      variant="outlined"
      {...props}
    >
      {props.children}
    </Button>
  );
};
