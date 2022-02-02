import {
    Grid,
    Typography,
    Container,
    Box,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    lightBlueSectionBackground: {
        backgroundColor: theme.palette.primary.light,
        color: "white",
      },
    containerStyles: {
        margin: theme.spacing(2),
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(3),
        },
    },
    title: {
        margin: theme.spacing(2),
    },
    text: {
        margin: theme.spacing(2), 
        lineHeight: 2,
        fontSize: "1.75rem",
        fontFamily:  ["Roboto", "sans-serif"]
    }
}));

export const TwoParagraphTextWithHeader = (props) => {
    const classes = useStyles();
    const { header, text } = props;
    const textItems = text.map((t, idx) => (
        <>
            <Grid key={idx} item xs={12} sm={6} md={6}>
                <Typography className={classes.text}  align="left">
                    {t}
                </Typography>
            </Grid>
         </>
    ))

    return (
        <>
            <Box className={classes.lightBlueSectionBackground}>
                <Container
                    style={{
                        paddingBottom: "5rem",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                <Grid container className={classes.containerStyles}>
                    <Grid item xs={12}>
                        <Typography className={classes.title} variant="h2">{header}</Typography>
                    </Grid>
                    {textItems}
                </Grid>
            </Container>
          </Box>
        </>
    )
}