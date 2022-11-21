import { makeStyles } from "@mui/styles";

export const useDonationStyles = makeStyles(theme => ({
    // Added About Styles in comment Code

    regularContainer: {
        display: "flex",
        padding: theme.spacing(8),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(3),
        },
    },
    donationBox: {},
    // darkBlueBackground: {
    //     backgroundColor: theme.palette.primary.dark,
    //     color: "white",
    //     padding: theme.spacing(9),
    //     marginBottom: theme.spacing(4),
    //     [theme.breakpoints.down("md")]: {
    //         padding: theme.spacing(9, 0),
    //     },
    // },
    // regularContainer: {
    //     padding: theme.spacing(8),
    //     [theme.breakpoints.down("md")]: {
    //         padding: theme.spacing(3),
    //     },
    // },
    // embedContainer: {
    //     paddingTop: theme.spacing(8),
    //     paddingBottom: theme.spacing(8),
    // },
    headingStyle: {
        marginBottom: theme.spacing(6),
    },
    subheadingStyle: {
        marginBottom: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        [theme.breakpoints.down("md")]: {
            fontSize: "40px",
        },
    },
    // linkTextStyle: {
    //     marginRight: theme.spacing(1),
    //     textDecoration: "none",
    //     color: theme.palette.primary.main,
    // },
    // gridStyle: {
    //     padding: theme.spacing(8, 0),
    // },
    // gridItemStyle: {
    //     padding: theme.spacing(0.8),
    //     [theme.breakpoints.down("md")]: {
    //         marginBottom: theme.spacing(3),
    //     },
    // },
    // boxShadow: {
    //     backgroundColor: "#fff",
    //     boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.2)",
    //     borderRadius: "6px",
    //     padding: theme.spacing(9),
    //     [theme.breakpoints.down("md")]: {
    //         padding: theme.spacing(4),
    //     },
    // },
    // divider: {
    //     color: "grey",
    //     backgroundColor: "#d8d8d8",
    //     height: 1,
    //     width: "80%",
    //     margin: theme.spacing(22, "auto"),
    //     [theme.breakpoints.down("md")]: {
    //         margin: theme.spacing(15, "auto"),
    //     },
    // },
    // buttonBoxStyle: {
    //     display: "flex",
    //     justifyContent: "center",
    //     marginTop: theme.spacing(8),
    // },
    // iconStyle: {
    //     width: "100%",
    //     padding: theme.spacing(2),
    // },
    // cardGridStyle: {
    //     padding: theme.spacing(1),
    //     // [theme.breakpoints.down("sm")]: {
    //     //   padding: theme.spacing(1)
    //     // },
    //     [theme.breakpoints.down("sm")]: {
    //         padding: theme.spacing(1, 0),
    //     },
    // },
    // theProblemIcon: {
    //     color: theme.palette.secondary.main,
    //     fontSize: "40px",
    //     margin: theme.spacing(4),
    // },
    // listStyle: {
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-around",
    // },
    // centerText: {
    //     textAlign: "center",
    // },
    // headingSpacing: {
    //     marginBottom: theme.spacing(4),
    // },
    // spaceAfter: {
    //     marginRight: theme.spacing(0),
    // },
}));
