import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    hero: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    heroTitle: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    heroSubtitle: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        fontSize: 24,
        [theme.breakpoints.down("sm")]: {
            fontSize: 18,
        },
    },
}));
const HeroPanel = props => {
    const { title, subtitle } = props;
    const classes = useStyles();
    return (
        <Box className={classes.hero}>
            <Typography className={classes.heroTitle} variant="h1">
                {title}
            </Typography>
            {subtitle && (
                <Typography className={classes.heroSubtitle} variant="subtitle1" component="p">
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
};

export default HeroPanel;
