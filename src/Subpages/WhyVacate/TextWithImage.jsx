import {
    Box,
    Grid,
    Typography,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    headingRoles: {
        color: theme.palette.primary.light,
        paddingBottom: theme.spacing(2),
      },
    altHeadingRoles: {
        color: "white",
        paddingBottom: theme.spacing(2)
    },
    roleImage: {
        height: 300,
        width: 300,
      },
      textMinimumStyle: {
        minHeight: "4em"
      },
}));

export const TextWithImage = (props) => {
    const classes = useStyles();
    const { img, header, text, cols, altStyle } = props;
    const textItems = text.map((t, idx) => (
        <Typography className={classes.textMinimumStyle} key={idx} variant="body1" align="center">
            {t}
        </Typography>
    ))

    return (
        <Grid item xs={12} sm={cols} md={cols}>
            <Box display="flex" justifyContent="center">
                <Box component="img" src={img} className={classes.roleImage} />
            </Box>
            <Typography
                className={altStyle ? classes.altHeadingRoles : classes.headingRoles}
                variant="h3"
                align="center"
                >
                {header}
            </Typography>
            { textItems }
        </Grid>
    )
}