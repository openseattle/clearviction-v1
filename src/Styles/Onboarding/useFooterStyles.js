import { makeStyles } from "@material-ui/core";

export const useFooterStyles = makeStyles((theme) => ({
   footerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: theme.spacing(6),
        [theme.breakpoints.down("xs")]: {
           flexDirection: "column",
           alignItems: "center",
        }
   },
  
}));
