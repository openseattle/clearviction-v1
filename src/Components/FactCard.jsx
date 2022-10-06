import { Box, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
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

const FactCard = ({ simpleCardContents, isSimpleCard, fact }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                {isSimpleCard && (
                    <Typography variant="body1" align="center">
                        {simpleCardContents}
                    </Typography>
                )}

                {!isSimpleCard && fact?.textList && (
                    <Typography component="ul" variant="subtitle2">
                        {fact?.textList.map((listItem, idx) => (
                            <li key={idx}>{listItem}</li>
                        ))}
                    </Typography>
                )}

                {!isSimpleCard && fact?.text && (
                    <Typography variant="subtitle2" align="center">
                        {fact?.text}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default FactCard;
