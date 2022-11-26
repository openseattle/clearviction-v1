import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
    // Added About Styles in comment Code

    contentContainer: {
        display: "flex",
        padding: theme.spacing(3),
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(3),
        },
    },
    regularContainer: {
        padding: theme.spacing(8),
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(3),
        },
    },
    bodyContent: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },
    donationBoxSticky: {
        [theme.breakpoints.up("xs")]: {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            display: "inline-block",
        },
        position: "relative",
        height: "5021px",
    },
    donationBoxInline: {
        [theme.breakpoints.up("xs")]: {
            display: "flex",
        },
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
    },
    headingStyle: {
        marginBottom: theme.spacing(6),
        color: theme.palette.primary.dark,
    },
    subheadingStyle: {
        marginBottom: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    },
    boxShadow: {
        backgroundColor: "#fff",
        display: "flex",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px",
        padding: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(4),
        },
    },
    shareContent: {
        margin: theme.spacing(0),
        padding: theme.spacing(1),
    },
    socialIcons: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        flexDirection: "column",
        justifyContent: "space-evenly",
        display: "flex",
    },
    iconItem: {
        "&:hover": {
            transform: "translateY(-2px)",
        },
    },
    divider: {
        color: "grey",
        backgroundColor: "#d8d8d8",
        height: 1,
        width: "80%",
        margin: theme.spacing(22, "auto"),
        [theme.breakpoints.down("md")]: {
            margin: theme.spacing(15, "auto"),
        },
    },
    GTButtonContainerStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: "flex",
        justifyContent: "center",
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column",
    },
    centerImageBox: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
    },
    centeredImage: {
        height: 300,
        width: 500,
        maxHeight: { xs: 235, md: 300 },
        maxWidth: { xs: 338, md: 500 },
        marginLeft: "auto",
        marginRight: "auto",
    },
    customHero: {
        [theme.breakpoints.up("xs")]: {
            minHeight: "870px",
        },
        [theme.breakpoints.up("md")]: {
            minHeight: "fit-content",
        },
    },
    // darkBlueBackground: {
    //     backgroundColor: theme.palette.primary.dark,
    //     color: "white",
    //     padding: theme.spacing(9),
    //     marginBottom: theme.spacing(4),
    //     [theme.breakpoints.down("md")]: {
    //         padding: theme.spacing(9, 0),
    //     },
    // },
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
