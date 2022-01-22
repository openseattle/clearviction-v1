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
    roleImage: {
        height: 300,
        width: 300,
      },
}));

export const TextWithImage = (props) => {
    const classes = useStyles();
    const { img, header, text, cols } = props;
    const textItems = text.map((t, idx) => (
        <Typography key={idx} variant="body1" align="center">
            {t}
        </Typography>
    ))

    return (
        <Grid item xs={12} sm={cols} md={cols}>
            <Box display="flex" justifyContent="center">
                <Box component="img" src={img} className={classes.roleImage} />
            </Box>
            <Typography
                className={classes.headingRoles}
                variant="h3"
                align="center"
                >
                {header}
            </Typography>
            { textItems }
        </Grid>
    )
}