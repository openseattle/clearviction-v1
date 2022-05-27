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
      [theme.breakpoints.down("sm")]: {
         marginBottom: theme.spacing(4),
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
      [theme.breakpoints.down("sm")]: {
         marginBottom: theme.spacing(4),
      }
   },

}));
