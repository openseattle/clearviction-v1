import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import SecondaryButton from "../ui-kit/SecondaryButton";
import pr from "../Assets/pr.svg";

const useStyles = makeStyles((theme) => ({
  partner: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  partnerHeading: {
    margin: theme.spacing(4),
    textAlign: "center",
  },

  share: {
    backgroundColor: theme.palette.primary.light,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  sharePR: {
    maxHeight: 400,
    maxWidth: 400,
  },
  shareRight: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(1),
    },
  },
  shareHeading: {
    paddingTop: theme.spacing(2),
    color: "white",
  },
  shareBody: {
    paddingTop: theme.spacing(2),
    color: "white",
  },
}));

const PartnerPage = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.partner} maxWidth="lg">
        <Typography className={classes.partnerHeading} variant="h2">
          Help us bring a message of hope into your community.
        </Typography>
        <Typography className={classes.partnerHeading} variant="h5">
          We appreciate finding new ways to work with organizations and people
          who share our goals and want to help us raise awareness. Whether it be
          guidance or support, we'd love to hear more.
        </Typography>
        <Box display="flex" justifyContent={"center"}>
          <SecondaryButton text={"Contact Us"} linkTo={"/contact"} />
        </Box>
      </Container>
      <Container className={classes.share} maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box display={"flex"} justifyContent={"center"}>
              <Box className={classes.sharePR} component="img" src={pr} />
            </Box>
          </Grid>
          <Grid className={classes.shareRight} item xs={12} sm={6}>
            <Typography className={classes.shareHeading} variant="h3">
              Share the calculator with your community
            </Typography>
            <Typography className={classes.shareBody} variant="body1">
              Do you know someone who could benefit from our calculator? Want to
              help us spread the word around your community?
            </Typography>
            <Typography className={classes.shareBody} variant="body1">
              Share our mission on your social media or send it to someone you
              know needs it.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PartnerPage;
