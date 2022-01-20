import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import SecondaryButton from "../ui-kit/SecondaryButton";
import { Alarm, CloudDoneOutlined, SchoolOutlined } from "@material-ui/icons";

import meeting from "../Assets/team_meeting.svg";
import team from "../Assets/team_building.svg";
import brainstorm from "../Assets/brainstorming_session.svg";
import laptop from "../Assets/laptop.svg";

const useStyles = makeStyles((theme) => ({
  volunteer: {
    marginTop: theme.spacing(5),
  },
  icon: {
    fontSize: "4rem",
    color: theme.palette.highlight.main,
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
      height: 350,
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
      height: 350,
    },
  },
  teamMeeting: {
    maxHeight: 500,
    maxWidth: 500,
  },
  roleImage: {
    height: 300,
    width: 300,
  },
  titleRoles: {
    padding: theme.spacing(5),
  },
  headingRoles: {
    color: theme.palette.primary.light,
    paddingBottom: theme.spacing(2),
  },
  roleAdjust: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
    }
  },
  buttonPad: {
    margin: theme.spacing(10),
  },
  emailLink: {
    color: theme.palette.highlight.main,
    "&:hover": {
      color: theme.palette.highlight.main,
    }
  }
}));

const VolunteerPage = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.volunteer} maxWidth="lg">
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={6}>
              <Box justifyContent="center" display="flex">
                <Box
                  component="img"
                  src={meeting}
                  className={classes.teamMeeting}
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
                  <a className={classes.emailLink} href="/contact">convictionvacation@gmail.com</a> and we’ll get back to
                  you within 24 hours.
                </Typography>
              </Box>
            </Grid>
          </Grid>

        <Box>
          <Typography className={classes.titleRoles} variant="h2" align="center">
            Open roles
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={4} md={4}>
              <Box display="flex" justifyContent="center">
                <Box component="img" src={team} className={classes.roleImage} />
              </Box>
              <Typography
                className={classes.headingRoles}
                variant="h3"
                align="center"
              >
                User Experience
              </Typography>
              <Typography variant="body1" align="center">
                Designers
              </Typography>
              <Typography variant="body1" align="center">
                Researchers
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box className={classes.roleAdjust} display="flex" justifyContent="center">
                <Box
                  component="img"
                  src={brainstorm}
                  className={classes.roleImage}
                />
              </Box>
              <Typography
                className={classes.headingRoles}
                variant="h3"
                align="center"
              >
                Development
              </Typography>
              <Typography variant="body1" align="center">
                Front-End Developers
              </Typography>
              <Typography variant="body1" align="center">
                Back-End Developers
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box display="flex" justifyContent="center">
                <Box
                  component="img"
                  src={laptop}
                  className={classes.roleImage}
                />
              </Box>
              <Typography
                className={classes.headingRoles}
                variant="h3"
                align="center"
              >{`Content & Outreach`}</Typography>
              <Typography variant="body1" align="center">
                Copy Writers
              </Typography>
              <Typography variant="body1" align="center">
                Marketing Directors
              </Typography>
            </Grid>
          </Grid>

          <Box
            justifyContent="center"
            display="flex"
            className={classes.buttonPad}
          >
            <SecondaryButton text={"Join Our Team"} linkTo={"https://www.democracylab.org/projects/226"} />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default VolunteerPage;
