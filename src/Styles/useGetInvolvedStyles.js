import { makeStyles } from "@material-ui/core";
export const useGetInvolvedStyles = makeStyles((theme) => ({
  //donation page styles
  donationRoot: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  donation: {
    height: "100%",
  },
  donationImageStyle: {
    width: "100%",
  },
  donationAmountStyle: {
    textAlign: "center",
    fontFamily: ["roboto", "sans-serif"],
    fontWeight: "Bold",
    fontSize: 50,
  },
  donationDescStyle: {
    padding: theme.spacing(3),
    textAlign: "center",
    fontFamily: ["roboto", "sans-serif"],
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  qrCode: {
    marginTop: theme.spacing(5),
    width: "100%",
  },
  donate: {
    backgroundColor: theme.palette.primary.dark,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  donateRight: {
    paddingTop: theme.spacing(3),
  },
  donateHeading: {
    color: "white",
    margin: theme.spacing(3),
  },
  donateBody: {
    color: "white",
    fontSize: 20,
    margin: theme.spacing(3),
  },
  donateBody2: {
    color: "white",
    fontSize: 16,
    margin: theme.spacing(3),
  },
  // faq: {
  //   marginTop: theme.spacing(8),
  //   marginBottom: theme.spacing(8),
  // },
  // faqAccordionStyle: {
  //   borderRadius: 4,
  //   marginBottom: theme.spacing(2),
  // },
  // faqSummary: {
  //   backgroundColor: theme.palette.primary.light,
  //   color: "white",
  //   borderRadius: 4,
  // },
  // faqSumText: {
  //   fontFamily: ["roboto", "sans-serif"],
  //   fontSize: 20,
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: 16,
  //   },
  // },
  // faqDetailsText: {
  //   overflowWrap: "break-word",
  //   width: "100%",
  // },
  // expand: {
  //   color: "white",
  //   fontSize: 24,
  // },

  //volunteer page styles
  volunteer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  contentText: {
    margin: theme.spacing(2),
  },
  contentTextAlt: {
    color: "white",
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  listTextAlt: {
    color: "white",
  },
  title: {
    margin: theme.spacing(2),
  },
  titleAlt: {
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: "white",
  },
  backgroundSecondary: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  backgroundLightSecondary: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  teamMeeting: {
    width: "100%",
  },
  roleImage: {
    width: "100%",
  },
  titleRoles: {
    padding: theme.spacing(5),
  },
  headingRoles: {
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(2),
  },
  roleAdjust: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
    },
  },
  buttonPad: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  emailLink: {
    overflowWrap: "break-word",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },

  // partner page styles
  partner: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  partnerHeading: {
    margin: theme.spacing(4),
    textAlign: "center",
  },

  share: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  sharePR: {
    maxHeight: 400,
    maxWidth: 400,
  },
  shareRight: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(1),
    },
  },
  shareHeading: {
    paddingTop: theme.spacing(2),
    color: "white",
  },
  shareBody: {
    paddingTop: theme.spacing(2),
    color: "white",
  },
}));
