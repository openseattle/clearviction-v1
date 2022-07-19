import { makeStyles } from "@material-ui/core";

export const SpecialCaseTitleStyles = makeStyles(theme => ({
    grid: {
        display: "inline-block",
        marginTop: "32px",
        justifyContent: "center",
        textAlign: "center",
    },
    header: {
        marginBottom: "24px",
        fontWeight: 600,
        textAlign: "left",
    },
    body: {
        textAlign: "left",
        padding: "5px",
    },
    bodyGrid: {
        display: "inline-block",
        marginBottom: "72px",
    },
    button: {
        marginBottom: "40px",
    },
    backButton: {
        marginBlock: "32px",
        justifyContent: "flex-start",
    },
    // temporary placeholder for Blake vacation -- sprint 26, 6/27/22
    blakeLink: {
        fontSize: "24px",
        lineHeight: 3,
        [theme.breakpoints.down("xs")]: {
            fontSize: "18px",
            fontWeight: "bold",
        }
    },
    list: {
        fontSize: "18px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
        }
    },
}));
