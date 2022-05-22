import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    flexGrow: {
        flex: "1",
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        textTransform: "uppercase",
        minHeight: "48px",
        minWidth: "248px",
        maxWidth: "30vw",
        fontSize: "18px",
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
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
        },
    },
}));

const PrimaryButton = props => {
    const classes = useStyles();

    return (
        <Button role="button" className={classes.button} href={props.href} target={props.target} variant="contained">
            {props.text}
        </Button>
    );
};

export default PrimaryButton;
