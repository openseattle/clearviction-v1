import { makeStyles } from "@mui/styles";

export const useModuleContentStyles = makeStyles(theme => ({
    mainModuleContentCard: {
        width: "80%",
        flexDirection: "row",
        margin: theme.spacing(4.875, "auto", 0, "auto"),
    },
    moduleContentCard: {
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(3.625, "auto"),
        width: "80%",
        justifyContent: "center",
        paddingBottom: theme.spacing(4),
    },
    moduleCardHeading: {
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(5),
        lineHeight: 1.2,
        [theme.breakpoints.down("md")]: {
            marginLeft: theme.spacing(1),
        },
    },
    moduleCardHeading2: {
        fontSize: "36px",
        lineHeight: "42.19px",
        width: "50%",
        margin: "auto",
        color: "#2b2929",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            width: "90%",
        },
    },
    bold: {
        fontWeight: "bold",
    },
    moduleCardBody: {
        paddingBottom: theme.spacing(2),
        color: "#2b2929",
    },
    listElement: {
        fontSize: "1.25rem",
        color: "#2b2929",
        "&::marker": {
            fontSize: "0.75rem",
        },
    },
    moduleCardBody2: {
        color: "#2b2929",
        width: "50%",
        margin: "40px auto",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            width: "80%",
            margin: "10px auto",
        },
    },
    cardIcon: {
        marginTop: "20px",
        textAlign: "right",
        marginRight: "-25px",
    },
    icon: {
        width: "70px",
        [theme.breakpoints.down("md")]: {
            width: "50px",
        },
    },
    moduleContentLink: {
        border: "2px solid #4e6c99",
        margin: "20px auto",
        backgroundColor: "#fefeff",
        width: "70%",
        minWidth: "300px",
        maxWidth: "800px",
        height: "85px",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        fontSize: "19px",
        fontWeight: "bold",
        display: "flex",
        padding: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            borderRadius: "25px",
            width: "50%",
            height: "60px",
            justifyContent: "space-between",
            marginLeft: theme.spacing(-7),
            alignItems: "center",
        },
    },
    linkIcon: {
        margin: theme.spacing(1.5),
        marginRight: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            width: "30px",
            margin: theme.spacing(1),
            marginRight: theme.spacing(3),
        },
    },
    linkContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    linkText: {
        color: "#4e6c99",
        alignSelf: "center",
        [theme.breakpoints.down("md")]: {
            margin: theme.spacing(0),
            fontSize: "calc(14px + 0.390625vw)",
        },
    },
    modalTitleStyle: {
        color: "#4E6C99",
        margin: theme.spacing(3),
        fontWeight: 700,
        fontSize: "30px",
        lineHeight: "39px",
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        textTransform: "capitalize",
        minWidth: "248px",
        maxWidth: "300px",
        height: "48px",
        textAlign: "center",
        display: "flex",
        verticalAlign: "middle",
        padding: "auto",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: "50px",
        margin: "auto",
        marginTop: theme.spacing(8),
        fontSize: "18px",
        fontWeight: "bold",
        lineHeight: 2.7,
        "&:hover": {
            color: "#000",
            backgroundColor: "#ffd200",
        },
    },
    mobileHeader: {
        fontSize: "20px",
        color: "#4E6C99",
        textAlign: "left",
        marginLeft: "32px",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    externalLink: {
        color: "#4e6c99",
        fontSize: "20px",
        marginBottom: theme.spacing(2),
    },
}));
