import { makeStyles } from "@material-ui/core";

export const useHomeStyles = makeStyles(theme => ({
    body: {
        padding: theme.spacing(5),
        margin: theme.spacing(3, "auto"),
        width: "60%",
        color: "#1d1c1c",
        [theme.breakpoints.down("sm")]: {
            width: "80%",
            padding: theme.spacing(1),
        },
    },
    bodyPara: {
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("xs")]: {
            fontSize: "18px",
            marginBottom: theme.spacing(2),
        },
    },
    cardSubheading: {
        marginBottom: theme.spacing(3),
    },
    cardBody: {
        paddingBottom: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(2),
        color: "#2b2929",
    },
    stepper: {
        padding: theme.spacing(0),
        margin: theme.spacing(3, "auto"),
        width: "100%",
        color: "#1d1c1c",
    },
    connectorLine: {
        // borderLeft: "1px",
        borderLeftWidth: "3px",
        borderLeftStyle: "solid",
        borderLeftColor: "#4E6C99",
        height: "12em",
        marginLeft: "0.95em",
        marginTop: "-3px",
        [theme.breakpoints.down("sm")]: {
            height: "15em",
        },
    },
    spacerLine: {
        borderLeftWidth: "1px",
        borderLeftStyle: "solid",
        borderLeftColor: "#fafafa",
        height: "12em",
        marginLeft: "1em",
        [theme.breakpoints.down("sm")]: {
            height: "15em",
        },
    },
    openCircle: {
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        borderWidth: "4px",
        borderColor: "#4E6C99",
        borderStyle: "solid",
    },
    mobileHeader: {
        fontSize: "28px",
        marginBottom: theme.spacing(3),
        textAlign: "center",
        color: "#4E6C99",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    gridContainer: {
        maxWidth: "80%"
    }
}));
