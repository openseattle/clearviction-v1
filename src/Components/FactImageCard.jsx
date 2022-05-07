import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "42em",
    },
    headingStyle: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    contentTextStyle: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
}));

const FactImageCard = ({ fact }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
                <CardContent>
                    <img alt={fact.id} src={fact.src} width={"100%"} />
                    <Typography variant="h4" align="center" className={classes.headingStyle}>
                        {fact.title}
                    </Typography>
                    {fact.textList && (
                        <Typography component="ul" variant="subtitle2" className={classes.contentTextStyle}>
                            {fact.textList.map((listItem, idx) => (
                                <li key={idx}>{listItem}</li>
                            ))}
                        </Typography>
                    )}

                    {fact.text && (
                        <Typography variant="subtitle2" align="center">
                            {fact.text}
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </Grid>
    );
};

export default FactImageCard;
