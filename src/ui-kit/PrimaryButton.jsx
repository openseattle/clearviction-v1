import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
        [theme.breakpoints.down("lg")]: {
            width: "100%",
            fontSize: "14px",
        },
        [theme.breakpoints.down("md")]: {
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

function PrimaryButton({ href, target, text }) {
    const classes = useStyles();

    return (
        <Button
            role="button"
            className={classes.button}
            href={href}
            target={target}
            variant="contained"
        >
            {text}
        </Button>
    );
}

export default PrimaryButton;
