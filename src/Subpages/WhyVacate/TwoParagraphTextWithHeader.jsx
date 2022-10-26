import { Grid, Typography, Container, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    lightBlueSectionBackground: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
    },
    containerStyles: {
        margin: theme.spacing(2),
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(3),
        },
    },
    title: {
        margin: theme.spacing(2),
    },
    text: {
        margin: theme.spacing(2),
    },
}));

export const TwoParagraphTextWithHeader = props => {
    const classes = useStyles();
    const { header, text } = props;
    const textItems = text.map((t, idx) => (
        <>
            <Grid key={idx} item xs={12}>
                <Typography className={classes.text} align="left" style={{ wordBreak: "break-word" }}>
                    {t}
                </Typography>
            </Grid>
        </>
    ));

    return (
        <>
            <Box className={classes.lightBlueSectionBackground}>
                <Container
                    style={{
                        paddingBottom: "5rem",
                        display: "flex",
                        justifyContent: "center",
                    }}
                    maxWidth="md"
                >
                    <Grid container className={classes.containerStyles}>
                        <Grid item xs={12}>
                            <Typography className={classes.title} variant="h2">
                                {header}
                            </Typography>
                        </Grid>
                        {textItems}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};
