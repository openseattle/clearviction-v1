import { makeStyles } from "@material-ui/core";

export const useButtonStyles = makeStyles((theme) => ({
   button: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      textTransform: "capitalize",
      minWidth: "248px",
      maxWidth: "300px",
      height: "48px",
      textAlign: "center",
      verticalAlign: "middle",
      padding: "auto",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "50px",
      margin: "auto",
      fontSize: "18px",
      fontWeight: "bold",
      lineHeight: 2.7,
      transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      '&:hover' : {
         color: "#000",
         backgroundColor: "#ffd200",
       },
      [theme.breakpoints.down("sm")]: {
         marginBottom: theme.spacing(4),
      },
      [theme.breakpoints.down("xs")]: {
         marginBottom: theme.spacing(2),
         minWidth: "175px",
         maxWidth: "175px",
      }
   },
   buttonSecondary: {
      backgroundColor: "white",
      borderWidth: 3,
      borderStyle: "solid",
      color: theme.palette.primary.main,
      textTransform: "capitalize",
      minWidth: "248px",
      maxWidth: "300px",
      height: "48px",
      textAlign: "center",
      verticalAlign: "middle",
      padding: "auto",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "50px",
      margin: "auto",
      fontSize: "18px",
      fontWeight: "bold",
      lineHeight: 2.7,
      transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      '&:hover' : {
         color: "#000",
         backgroundColor: "#ffd200",
       },
      [theme.breakpoints.down("sm")]: {
         marginBottom: theme.spacing(4),
      }
   },

}));
