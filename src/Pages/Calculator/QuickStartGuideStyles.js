import { makeStyles } from "@material-ui/core";

export const QuickStartGuideStyles = makeStyles(theme => ({
    grid: {
        display: "inline-block",
        marginTop: "32px",
        justifyContent: "center",
    },
    header: {
        marginBottom: "16px",
        textAlign: "center",
    },
    body: {
        textAlign: "left",
        marginTop: "24px",
        marginBottom: "24px",
    },
    bodyGrid: {
        marginBottom: "72px",
    },
    buttonGrid: {},
    button: {
        marginBottom: "16px",
    },
    backButton: {
        marginTop: "16px",
        marginBottom: "32px",
        justifyContent: "flex-start",
    },
    progressBar: {
        marginBottom: "16px",
        marginLeft: "5vw",
    },
    list: {
        fontSize: "18px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
        },
    },
}));
