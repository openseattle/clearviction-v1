import { makeStyles } from "@material-ui/core";

export const useModuleContentStyles = makeStyles((theme) => ({
  moduleContentCard: {
    margin: theme.spacing(9, "auto"),
    width: "80%",
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(6, "auto"),
      paddingBottom: theme.spacing(2),
    }
  },
  moduleCardHeading: {
    color: theme.palette.primary.main, 
    marginBottom: theme.spacing(5),
    lineHeight: 1.2,
    [theme.breakpoints.down("sm")]: {

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
    marginRight: "-25px"
  },
  icon: {
    width: "70px",
  },
  moduleContentLink: {
    border: "2px solid #4e6c99",
    margin: "20px auto",
    backgroundColor: "#fefeff",
    width: "90%",
    minWidth: "300px",
    maxWidth: "555px",
    height: "85px",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
    fontSize: "19px",
    fontWeight: "bold",
    display: "flex",
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      height: "70px",
      fontSize: "16px",
    }
  },
  linkIcon: {
    margin: theme.spacing(1.5),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "30px",      
    }
  },
  linkText: {
    // margin: theme.spacing(0.9), 
    // marginLeft: theme.spacing(2), 
    // [theme.breakpoints.down("xs")]: {
    //   margin: theme.spacing(0.5),
    // }
  },
  linkContainer: {
    display: "flex", 
    flexDirection: "row",
    justifyContent: "flex-start", 
    // width: "550px",
    // alignItems: "flex-start",
    // padding: theme.spacing(1.3),
  }
  
}));
