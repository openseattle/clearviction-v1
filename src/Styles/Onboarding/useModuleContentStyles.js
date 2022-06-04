import { makeStyles } from "@material-ui/core";

export const useModuleContentStyles = makeStyles((theme) => ({
  moduleContentCard: {
    margin: theme.spacing(6, "auto"),
    width: "80%",
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    }
  },
  moduleCardHeading: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(5),
    lineHeight: 1.2,
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
    }
  },
  moduleCardHeading2: {
    fontSize: "36px",
    lineHeight: "42.19px",
    width: "50%",
    margin: "auto",
    color: "#2b2929",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    }
  },
  bold: {
    fontWeight: "bold",
  },
  moduleCardBody: {
    paddingBottom: theme.spacing(2),
    color: "#2b2929",
  },
  firstBtn: {
    // marginTop: "60px !important",
  },
  moduleCardBody2: {
    color: "#2b2929",
    width: "50%",
    margin: "40px auto",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "10px auto",
    }
  },
  cardIcon: {
    marginTop: "47px",
    textAlign: "right",
    marginRight: "-25px",
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
      marginTop: "5px"
    }
  },
  icon: {
    width: "70px",
  },
  moduleContentLink: {
    border: "2px solid #4e6c99",
    margin: "20px auto",
    backgroundColor: "#fefeff",
    width: "70%",
    minWidth: "300px",
    // maxWidth: "555px",
    height: "85px",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
    fontSize: "19px",
    fontWeight: "bold",
    display: "flex",
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      // width: "90%",
      height: "70px",
      // fontSize: "16px",
      justifyContent: "space-between",
      marginLeft: theme.spacing(-1),
      alignItems: "center"
    }
  },
  linkIcon: {
    margin: theme.spacing(1.5),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      margin: theme.spacing(1),
      marginRight: theme.spacing(3),
    }
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  linkText: {
    color: "#4e6c99",
    alignSelf: "center",
    // margin: theme.spacing(0.9), 
    // marginLeft: theme.spacing(2), 
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
      fontSize: 'calc(14px + 0.390625vw)',

    }
  },
  modalTitleStyle: {
    color: "#4E6C99",
    marginBottom: theme.spacing(5),
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
    float: "right",
    verticalAlign: "middle",
    padding: "auto",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "50px",
    margin: "auto",
    marginTop: theme.spacing(8),
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: 2.7,
    // [theme.breakpoints.down("sm")]: {
    //     marginBottom: theme.spacing(4),
    // }
  },

}));
