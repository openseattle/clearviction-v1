import { makeStyles } from "@mui/styles";

export const WhyVacateHousingStyles = makeStyles(theme => ({
    containerStyles: {
        margin: theme.spacing(2),
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(3),
        },
    },
    containerSpaceOnlyStyles: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    contentText: {
        margin: theme.spacing(2),
    },
    contentTextAlt: {
        color: "white",
        margin: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    title: {
        margin: theme.spacing(2),
    },
    roleImage: {
        height: 300,
        maxWidth: 300,
    },
    headingRoles: {
        color: theme.palette.primary.main,
        paddingBottom: theme.spacing(2),
    },
    blackHeaderText: {
        color: "black",
        padding: theme.spacing(2),
    },
    lightBlueSectionBackground: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
    },
}));
