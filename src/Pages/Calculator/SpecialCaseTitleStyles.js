import { makeStyles } from "@material-ui/core";

export const SpecialCaseTitleStyles = makeStyles((theme) => ({
    grid: {
        display: "inline-block",
        marginTop: "32px",
        justifyContent: "center",
        textAlign: "center",
    },
    header: {
        marginBottom: "24px",
        fontWeight: 600,
    },
    body: {
        textAlign: "left",
        padding: "5px",
    },
    bodyGrid: {
        display: "inline-block",
        marginBottom: "72px"
    },
    button: {
        marginBottom: "40px"
    },
    backButton: {
        marginBlock: "32px",
        justifyContent: "flex-start"
    }
}))