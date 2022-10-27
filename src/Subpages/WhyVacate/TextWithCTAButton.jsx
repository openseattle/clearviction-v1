import { Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SecondaryButton from "../../ui-kit/SecondaryButton";

const useStyles = makeStyles(theme => ({
    mainText: {
        minWidth: 150,
    },
    backgroundSecondary: {
        minHeight: 250,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        align: "center",
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        padding: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
            padding: theme.spacing(2),
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: 300,
        },
    },
    buttonBoxStyles: {
        marginTop: theme.spacing(5),
        justifyContent: "center",
        display: "flex",
    },
}));

export function TextWithCTAButton(props) {
    const { text, buttonText, buttonLinkTo } = props;
    const classes = useStyles();
    return (
        <Box className={classes.backgroundSecondary}>
            <Container maxWidth="lg">
                <Typography variant="body1" className={classes.mainText} align="center">
                    {text}
                </Typography>
                <Box className={classes.buttonBoxStyles}>
                    <SecondaryButton linkTo={buttonLinkTo} text={buttonText} />
                </Box>
            </Container>
        </Box>
    );
}
