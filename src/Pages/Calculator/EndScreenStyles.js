import { makeStyles } from "@material-ui/core";

export const EndScreenStyles = makeStyles(theme => ({
    grid: {
        display: "inline-block",
        marginTop: "24px",
        justifyContent: "center",
        textAlign: "center",
    },
    header: {
        marginTop: "32px",
        marginBottom: "16px",
        textAlign: "left",
    },
    body: {
        textAlign: "left",
        marginBottom: "16px",
    },
    bodyList: {
        textAlign: "left",
        marginBottom: "16px",
    },
    bodyGrid: {
        marginBottom: "72px",
    },
    buttonGrid: {
        marginTop: "40px",
        marginBottom: "32px",
    },
    button: {
        marginBottom: "16px",
    },
    backButton: {
        marginTop: "16px",
        marginBottom: "40px",
        justifyContent: "flex-start",
    },
    restartButton: {
        marginBottom: "72px",
    },
}));
