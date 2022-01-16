import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Container,
  ButtonGroup,
  Button,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import meeting from "../Assets/team_meeting.svg";
import HeroPanel from "../Components/HeroPanel";
import RolesDisplay from "../Components/RolesDisplay";
import SecondaryButton from "../ui-kit/SecondaryButton";
import { Alarm, CloudDoneOutlined, SchoolOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "4rem",
    color: "yellow",
  },
  contentText: {
    margin: theme.spacing(2),
  },
  contentTextAlt: {
    color: "white",
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  listTextAlt: {
    color: "white",
  },
  title: {
    margin: theme.spacing(2),
  },
  titleAlt: {
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: "white",
  },
  backgroundSecondary: {
    height: 400,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
  },
  backgroundLightSecondary: {
    height: 400,
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
  },
  teamMeeting: {
    maxHeight: "500px",
    maxWidth: "500px",
  },
  rolesHeading: {
    color: "white",
    padding: "4rem",
  },
}));

const VolunteerPage = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <HeroPanel
          title={"Get involved"}
          subtitle={
            "There are many ways to participate with the CVP team, and we appreciate all of them!"
          }
        />
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <ButtonGroup>
            <Button>Volunteer</Button>
            <Button>Donate</Button>
            <Button>Partner With Us</Button>
          </ButtonGroup>
        </Box>

        <Box>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={6}>
              <Box justifyContent="center" display="flex">
                <Box
                  component="img"
                  src={meeting}
                  className={classes.mainImage}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box justifyContent="center" display="flex">
                <Box>
                  <Typography className={classes.title} variant="h2">
                    Why volunteer?
                  </Typography>
                  <Typography className={classes.contentText} variant="body1">
                    Conviction vacation makes it easier for formerly
                    incarcerated individuals to access housing and employment.
                    The two things that are crucial for reducing the odds of
                    re-incarceration.
                  </Typography>
                  <Typography className={classes.contentText} variant="body1">
                    By volunteering, you will help us reduce barriers and
                    streamline the process of vacating eligible convictions in
                    Washington state to make it easier for people to move
                    forward.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              className={classes.backgroundLightSecondary}
              item
              xs={12}
              sm={6}
              md={6}
            >
              <Typography className={classes.titleAlt} variant="h2">
                Who can apply?
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Alarm className={classes.icon} />
                  </ListItemIcon>
                  <Typography className={classes.listTextAlt}>
                    You can commit to 4 hours a week for at least 6 months
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SchoolOutlined className={classes.icon} />
                  </ListItemIcon>
                  <Typography className={classes.listTextAlt}>
                    You want to share your expertise in a field to help us make
                    a better product
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CloudDoneOutlined className={classes.icon} />
                  </ListItemIcon>
                  <Typography className={classes.listTextAlt}>
                    You are self-motivated and are comfortable with remote work
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid
              className={classes.backgroundSecondary}
              item
              xs={12}
              sm={6}
              md={6}
            >
              <Box>
                <Typography
                  className={classes.titleAlt}
                  variant="h2"
                  align="right"
                >
                  How can you apply?
                </Typography>
                <Typography
                  className={classes.contentTextAlt}
                  variant="body1"
                  align="right"
                >
                  We are currently using DemocracyLab to streamline the
                  volunteering process, which you can find by clicking the
                  button below.
                </Typography>
                <Typography
                  className={classes.contentTextAlt}
                  variant="body1"
                  align="right"
                >
                  If you want further information and want to have a chat, don’t
                  hesitate to contact us by email at{" "}
                  <a href="/contact">contact@cvp.com</a> and we’ll get back to
                  you within 24 hours.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Typography variant="h2" align="center">
            Open Roles
          </Typography>
          
          <Box
            justifyContent="center"
            display="flex"
            style={{ padding: "4rem" }}
          >
            <SecondaryButton text="Join Us" />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default VolunteerPage;
