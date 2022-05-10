import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    RedesignButtonPrimaryStyle: {
        width: "248px",
        height: "48px",
        borderRadius: "50px",
        padding: "16px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
        },
    },
}));

export const RedesignButtonPrimary = props => {
    const classes = useStyles();

    return (
        <Button className={classes.RedesignButtonPrimaryStyle} variant="contained" color="primary" {...props}>
            {props.children}
        </Button>
    );
};
