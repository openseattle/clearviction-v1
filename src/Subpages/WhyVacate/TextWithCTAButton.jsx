import {
  Box,
  Typography,
  Container,
  makeStyles
} from "@material-ui/core";
import SecondaryButton from "../../ui-kit/SecondaryButton";

const useStyles = makeStyles((theme) => ({
  mainText: {
    minWidth: 150,
    fontFamily: ["Roboto", "sans-serif"],
    fontSize: 22,
  },
  backgroundSecondary: {
    height: 250,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    align: "center",
    paddingTop: theme.spacing(5),
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
  },
  buttonBoxStyles: {
    marginTop: theme.spacing(5),
    justifyContent: "center",
    display: "flex"
  }
}));

export const TextWithCTAButton = (props) => {
  const { text, buttonText } = props;
  const classes = useStyles();
  return (
    <>
      <Box className={classes.backgroundSecondary}>
        <Container maxWidth="lg">
          <Typography variant="body1" className={classes.mainText} align="center">
              {text}
          </Typography>
          <Box className={classes.buttonBoxStyles}>
            <SecondaryButton text={buttonText} />
          </Box>
        </Container>
      </Box>
    </>
  )
}