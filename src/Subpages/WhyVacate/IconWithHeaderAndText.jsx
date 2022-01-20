import { SvgIcon } from "@material-ui/core";
import {
    Grid,
    Typography,
    ListItem,
    ListItemIcon,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainText: {
      minWidth: 150,
      fontFamily: ["Roboto", "sans-serif"],
      fontSize: 16,
      paddingTop: 5
    },
    icons: {
        color: "#FFD200", // TODO: fix color 
        fontSize: "5rem",
        margin: theme.spacing(3),
      }
}));

export const IconWithHeaderAndText = (props) => {
    const classes = useStyles();
    const { icon, header, text } = props;
    const textItems = text.map((t, idx) => (
        <Typography className={classes.mainText} key={idx} variant="body1" align="left">
            {t}
        </Typography>
    ))

    return (
        <>
            <ListItem>
                <ListItemIcon>
                    <SvgIcon component={icon} className={classes.icons} />
                </ListItemIcon>
                <Grid container alignItems="flex-start">
                    <Typography variant="h4">{header}</Typography>
                    { textItems }
                </Grid>
            </ListItem>
        </>
    )
}