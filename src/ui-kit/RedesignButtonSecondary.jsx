import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    RedesignButtonSecondaryStyle: {
        width: "248px",
        height: "48px",
        borderRadius: "50px",
        padding: "16px",
        backgroundColor: theme.palette.primary.light,
        // primary.contrastText only has 2.07:1 contrast ratio with primary.light
        color: theme.palette.secondary.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.secondary,
            color: theme.palette.secondary.contrastText,
        },
    },
}));

export const RedesignButtonSecondary = props => {
    const classes = useStyles();

    return (
        <Button
            className={`${classes.RedesignButtonSecondaryStyle} ${props.classes}`}
            role="button"
            variant="contained"
            {...props}
        >
            {props.children}
        </Button>
    );
};
