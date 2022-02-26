import {makeStyles} from "@material-ui/core";

const BACK_ARROW_TRANSFORM = "scale(-1, 1) rotate(270deg)";
const useStyles = makeStyles((theme) => ({
    root: {
        margin: "0 auto",
        textDecoration: "underline",
        color: theme.palette.primary.light,
        fontWeight: theme.typography.h4.fontWeight,
        "&:before": {
            content: "'↺'",
            position: "absolute",
            marginLeft: "-0.6em",
            marginTop: "-0.3em",
            fontSize: "1.75em",
            "-moz-transform": BACK_ARROW_TRANSFORM,
            "-webkit-transform": BACK_ARROW_TRANSFORM,
            "-o-transform": BACK_ARROW_TRANSFORM,
            "-ms-transform": BACK_ARROW_TRANSFORM,
            "transform": BACK_ARROW_TRANSFORM,
        }
    },
}));

const RestartButton = () => {
    const classes = useStyles();

    return (
        <a className={classes.root} href="/calculator/landing-1">
            Check another conviction
        </a>
    );
};

export default RestartButton;
