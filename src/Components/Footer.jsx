import {
  Grid,
  Box,
  Container,
  List,
  ListItem,
  makeStyles,
  Link,
  Typography,
} from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";

import democracylabLogo from "../Assets/democracylab-logo.png";
import openseattleLogo from "../Assets/openseattle-logo.png";
import pages from "../data/siteMap";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    paddingTop: theme.spacing(6),
    marginTop: "auto",
  },
  title: {
    margin: theme.spacing(1),
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  body: {
    margin: theme.spacing(1),
  },
  linkStyles: {
    color: "white",
    "&:hover": { color: "white" },
  },
  disclaimer: {
    margin: theme.spacing(2),
    fontSize: 11,
  },
  subHeader: {
    fontSize: 11,
  },
  openSeattle: {
    width: 100,
    height: 80,
    [theme.breakpoints.down("xs")]: {
      width: 80,
      height: 60,
    },
  },
  democracyLab: {
    marginRight: theme.spacing(2),
    width: 120,
    height: 40,
    [theme.breakpoints.down("xs")]: {
      width: 100,
      height: 30,
    },
  },
  mobileCenter: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  mobileHidden: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} component="footer">
      <Container maxWidth="lg">
        <Grid container>
          <Grid className={classes.mobileHidden} item xs={12} sm={4} md={4}>
            <Typography className={classes.title} variant="h4">
              Welcome!
            </Typography>
            <List>
              <ListItem>
                <Typography
                  className={classes.subHeader}
                  variant="body1"
                  style={{ maxWidth: 250 }}
                >
                  Clearviction is reducing barriers faced by formerly
                  incarcerated individuals by streamlining the process of
                  vacating eligible convictions in Washington state.
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography className={classes.title} variant="h4">
              Explore
            </Typography>
            <List>
              <Grid className={classes.body} container>
                {pages.map((page) => (
                  <Grid
                    className={classes.mobileCenter}
                    item
                    key={page.name}
                    xs={12}
                    sm={12}
                    md={4}
                  >
                    <Link className={classes.linkStyles} href={page.url}>
                      {page.name}
                    </Link>
                    <ArrowRight color="secondary" fontSize="small" />
                  </Grid>
                ))}
              </Grid>
            </List>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Typography
              className={classes.title}
              variant="h4"
              style={{ borderRadius: "solid" }}
            >
              Partnerships
            </Typography>
            <List>
              <ListItem className={classes.mobileCenter}>
                <img
                  className={classes.democracyLab}
                  src={democracylabLogo}
                  alt={"Democracy Lab Logo"}
                />
                <img
                  className={classes.openSeattle}
                  src={openseattleLogo}
                  alt={"Open Seattle Logo"}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Box justifyContent="center">
          <Typography
            className={classes.disclaimer}
            align="center"
            variant="subtitle2"
          >
            {" "}
            The information on this site is not, nor should it be, considered
            legal advice.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
