import { makeStyles } from "@material-ui/core";

export const SpecialCaseTitleStyles = makeStyles((theme) => ({
    grid: {
        display: "inline-block",
        marginTop: "24px",
        justifyContent: "center",
        textAlign: "center",
    },
    header: {
        marginBottom: "16px",
        fontWeight: 600,
    },
    body: {
        textAlign: "left",
        padding: "5px",
    },
    bodyGrid: {
        display: "inline-block",
        width: "60%",
        marginBottom: "40px"
    },
    button: {
        marginBottom: "40px"
    },
    backButton: {
        marginTop: "24px",
        justifyContent: "flex-start"
    }
}))