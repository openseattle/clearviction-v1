import {
  Grid,
  Box,
  Container,
  List,
  ListItem,
  makeStyles,
  Divider,
  Typography,
} from "@material-ui/core";

import democracylabLogo from "../Assets/democracylab-logo.png";
import openseattleLogo from "../Assets/openseattle-logo.png";

const useStyles = makeStyles({
  linkStyles: {
    color: "black",
    "&:hover": { color: "black" },
  },
});
const Footer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid container direction="row" sx={{ display: "flex", padding: 5 }}>
        <Grid container columns={2} spacing={6} justifyContent="space-between">
          <Grid item>
            <List>
              <ListItem>
                <a href="/" className={classes.linkStyles}>
                  Home
                </a>
              </ListItem>
              <ListItem>
                <a href="/calculator" className={classes.linkStyles}>
                  Calculator
                </a>
              </ListItem>
              <ListItem>
                <a href="/contact" className={classes.linkStyles}>
                  Contact
                </a>
              </ListItem>
              <ListItem>
                <a href="/about" className={classes.linkStyles}>
                  About
                </a>
              </ListItem>
            </List>
          </Grid>

          <Grid item sx={{ float: "right", position: "relative" }}>
            <Grid direction="column">
              <img src={openseattleLogo} alt={"Open Seattle Logo"} />
              <img src={democracylabLogo} alt={"Democracy Lab Logo"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <Box justifyContent="center" marginBottom={1}>
        <Typography align="center" fontFamily={"sans-serif"} fontSize="14px">
          {" "}
          The information on this site is not, nor should it be, considered
          legal advice.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
