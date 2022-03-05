import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  RedesignButtonSecondaryStyle: {
    width: "248px",
    height: "48px",
    borderRadius: "50px",
    [theme.breakpoints.down("xs")]: {
      width: "50vw",
    },
    padding: "16px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
  },
}));

export const RedesignButtonSecondary = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.RedesignButtonSecondaryStyle}
      variant="outlined"
      color="primary"
      {...props}
    >
      {props.children}
    </Button>
  );
};
