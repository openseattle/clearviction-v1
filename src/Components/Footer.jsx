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
    <Box component="footer" style={{ marginTop: "auto" }}>
      <Container maxWidth="xl">
        <Grid container direction="row" style={{ display: "flex" }}>
          <Grid container columns={2} justifyContent="space-between">
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

            <Grid item>
              <Grid container direction="column">
                <img src={openseattleLogo} alt={"Open Seattle Logo"} />
                <img src={democracylabLogo} alt={"Democracy Lab Logo"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: 1, marginBottom: 1 }} />
        <Box justifyContent="center">
          <Typography align="center" fontFamily={"sans-serif"} fontSize="14px">
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
