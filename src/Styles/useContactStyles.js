import { makeStyles } from "@material-ui/core";

export const useContactStyles = makeStyles(theme => ({
    regularContainer: {
        padding: theme.spacing(8),
        margin: theme.spacing(6),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1, 0),
            margin: theme.spacing(2, 0),
        },
    },
    headingStyle: {
        marginBottom: theme.spacing(8),
        marginLeft: theme.spacing(8),
        color: theme.palette.primary.dark,
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: theme.spacing(1),
        },
    },
    contentTextStyle: {
        marginLeft: theme.spacing(9),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        color: theme.palette.primary.dark,
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: theme.spacing(1),
        },
    },
    formContainer: {
        paddingLeft: theme.spacing(7),
        [theme.breakpoints.down("md")]: {
            paddingLeft: theme.spacing(5),
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2),
        },
    },
    formStyle: {
        maxWidth: "510px",
        width: "100%",
    },
    labelStyle: {
        marginTop: theme.spacing(4),
    },
    labelTextStyle: {
        display: "inline",
        paddingTop: "35px",
        fontSize: "16px",
        textTransform: "uppercase",
        color: theme.palette.primary.main,
    },
    inputTextStyle: {
        fontSize: "20px",
    },
    buttonBoxStyle: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(8),
    },
    iconStyle: {
        width: "100%",
        padding: theme.spacing(2),
    },
}));
