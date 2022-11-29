import { makeStyles } from "@mui/styles";

export const useFooterStyles = makeStyles(theme => ({
    footerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: theme.spacing(6),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(2),
        },
    },
    completeContainer: {
        display: "flex",
        justifyContent: "flex-end",
        margin: theme.spacing(6),
        marginBottom: "-20px",
        [theme.breakpoints.down("md")]: {
            justifyContent: "center",
        },
    },
}));
