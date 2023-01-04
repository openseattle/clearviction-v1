import { makeStyles } from "@mui/styles";

export const useWhyVacateStyles = makeStyles(theme => ({
    dividerStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    regularContainerStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        scrollMarginTop: "4em",
    },
    headingStyle: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    colorfulHeadingStyle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        color: theme.palette.primary.main,
    },
    highlightHeadingStyle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        color: theme.palette.secondary.main,
    },
    contentTextStyle: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    listItemsStyle: {
        margin: theme.spacing(2),
    },
    buttonBoxStyle: {
        display: "flex",
        justifyContent: "center",
        margin: theme.spacing(5),
    },
    shelterIcon: {
        color: theme.palette.success.main,
        margin: theme.spacing(1),
    },
    publicHousingListStyle: {
        width: "100%",
    },
    titleLinkStyle: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        color: "white",
        fontWeight: "bold",
        textDecoration: "underline",
        "&:hover": {
            color: "white",
            fontWeight: "bold",
            textDecoration: "underline",
        },
    },
    reportStyle: {
        padding: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(0),
        },
    },
    reportHeading: {
        marginBottom: theme.spacing(3),
    },
}));
