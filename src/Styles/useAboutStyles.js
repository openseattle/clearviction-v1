import { makeStyles } from "@material-ui/core";

export const useAboutStyles = makeStyles((theme) => ({
   darkBlueBackground: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    padding: theme.spacing(9),
    marginBottom: theme.spacing(4),
   },
   regularContainer: {
    padding: theme.spacing(8),
  },
  headingStyle: {
    marginBottom: theme.spacing(6),
  },
  subheadingStyle: {
    marginBottom: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  linkTextStyle: {
    marginRight: theme.spacing(1),
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  gridStyle: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.down("xs")]: {
        // marginLeft: "auto",
        // marginRight: "auto",
      }
  },
  gridItemStyle: {
    padding: theme.spacing(0.8),
    [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(3)
    }
  },
  contentTextStyle: {
    // marginLeft: theme.spacing(9),
    // marginRight: theme.spacing(2),
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(4),
  },
  boxShadow: {
    backgroundColor: "#fff",
    boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px",
    padding: theme.spacing(9),
    // paddingBottom: theme.spacing(8),
  },
  divider: {
    color: "grey",
    backgroundColor: "#d8d8d8",
    height: 1,
    width: "80%",
    margin: theme.spacing(22, "auto")
    // marginTop: theme.spacing(16),
    // marginBottom: theme.spacing(9),
  },
  buttonBoxStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(8),
  },
  iconStyle: {
    width: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
        // width: "60%"
    }
  },
  cardGridStyle: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    },
    teamContainer: {
        width:'80%', 
        minWidth: '90vw',
        margin: '0 auto', 
    },
    theProblemIcon: {
        color: theme.palette.secondary.main,
        fontSize: "40px",
        margin: theme.spacing(4),
    },
    avatar: {
        width: "100%",
        height: "200px",
    },
    card: {
        width: '100%',
        height: '284px',
        borderRadius: "6px",
        [theme.breakpoints.down("sm")]: {
            width: '80%'
        }
    },
    name: {
        marginTop: '-10px',
        fontSize: '20px',
        [theme.breakpoints.down("md")]: {
            fontSize: '16px',
            // paddingRight: theme.spacing(5),
        },
    },
    role: {
        fontSize: '14px',
        lineHeight: '15px',
        marginTop: theme.spacing(0.5),
    }
}));
