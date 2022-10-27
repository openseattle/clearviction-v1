import { Box, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(2),
    },
    headingStyle: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(4),
    },
    contentStyle: {
        margin: "auto",
    },
    cardImageStyle: {
        maxWidth: "100%",
    },
}));

function FactImageCard({ fact }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Box display="flex" justifyContent="center">
                <img className={classes.cardImageStyle} alt="" src={fact.src} />
            </Box>
            <Typography variant="h5" align="center" className={classes.headingStyle}>
                {fact.title}
            </Typography>
            <CardContent>
                {fact.textList && (
                    <Typography component="ul" variant="subtitle2">
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
    );
}

export default FactImageCard;
