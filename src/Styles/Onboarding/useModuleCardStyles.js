import { makeStyles } from "@material-ui/core";

export const useModuleCardStyles = makeStyles(theme => ({
    moduleCard: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
        margin: theme.spacing(4, "auto"),
        transition: "400ms ease-in-out",
        width: "75%",
        "&:hover": {
            transform: "scale(1.08)",
            backgroundColor: "lightgrey",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            margin: theme.spacing(2, "auto"),
        },
        [theme.breakpoints.down("xs")]: {
            width: "95%",
        },
    },
    cardHeading: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2, 5),
        color: "#f6f6f6",
        borderRadius: "20px",
        textTransform: "uppercase",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    cardSubheading: {
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
        },
    },
    cardBody: {
        display: "flex",
        flexDirection: "row",
        paddingBottom: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(4),
        color: "#2b2929",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexDirection: "column",
        },
    },
    cardText: {
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
    },
    iconStyle: {
        marginRight: theme.spacing(4.5),
        [theme.breakpoints.down("sm")]: {
            marginRight: theme.spacing(0),
            marginBottom: theme.spacing(2),
            height: "75px",
        },
    },
    headingStyle: {
        marginBottom: theme.spacing(6),
        fontSize: "50px",
        lineHeight: "93px",
        textDecoration: "none",
    },
    subheadingStyle: {
        marginBottom: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    },
    linkTextStyle: {
        marginRight: theme.spacing(1),
        textDecoration: "none",
        color: theme.palette.primary.main,
    },
    mobileButton: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2, 5),
        marginTop: theme.spacing(3),
        color: "#f6f6f6",
        borderRadius: "20px",
        textTransform: "uppercase",
        textAlign: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    mobileSuccessButton: {
        alignItems: "center",
        display: "flex",
        backgroundColor: "#fafafa",
        padding: theme.spacing(2, 5),
        marginTop: theme.spacing(3),
        color: theme.palette.success.light,
        borderRadius: "20px",
        textTransform: "uppercase",
        textAlign: "center",
        borderWidth: 3,
        borderStyle: "solid",

        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    checkMark: {
        marginRight: "1rem",
        height: "30px",
        alignSelf: "center",
    },
}));
