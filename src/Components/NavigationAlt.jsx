import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  Container,
  makeStyles,
} from "@material-ui/core";
import { MenuSharp as MenuIcon, CloseSharp } from "@material-ui/icons";
import pages from "../data/siteMap";
import navLogo from "../Assets/cvp-logo-white.png";
import { useState } from "react";
import NavButton from "../ui-kit/NavButton";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  navigationLogo: {
    height: "4rem",
    paddingRight: "2rem",
  },
  navigationLogoText: {
    color: "white",
    fontFamily: "helvetica",
    fontSize: "1.75rem",
    textAlign: "left",
    maxWidth: "25rem",
  },
  disclaimer: {
    fontSize: "10px", 
    textAlign: "center"
  },
  closeIcon: {
    color: "white", 
    fontSize: "3rem" 
  }
}));

const NavigationAlt = () => {

  const classes = useStyles();

  const [menuState, setMenuState] = useState(null);

  const handleOpenMenu = (event) => {
    setMenuState(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Box component={Button} href="/" disableRipple>
            <Box
              className={classes.navigationLogo}
              component="img"
              src={navLogo}
              alt="conviction vacation project next white scales of justice"
            />
            <Typography className={classes.navigationLogoText}>
              Washington Conviction Vacation Project
            </Typography>
          </Box>
          <Box style={{ flexGrow: 1 }} />

          {/* desktop menu */}
          <Box display={{ xs: "none", md: "flex" }}>
            {pages.map((page) => (
              <NavButton key={page.name} pageName={page.name} url={page.url} />
            ))}
          </Box>
          {/* mobile menu */}

          <Box display={{ xs: "flex", md: "none" }}>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenMenu}
            >
              <MenuIcon style={{ fontSize: "3rem" }} />
            </IconButton>
          </Box>
          <Drawer
            anchor="right"
            open={Boolean(menuState)}
            onClose={handleCloseMenu}
          >
            <List>
              <ListItem style={{ justifyContent: "center" }}>
                <IconButton onClick={handleCloseMenu}>
                  <CloseSharp className={classes.closeIcon} />
                </IconButton>
              </ListItem>
              {pages.map((page) => (
                <ListItem key={page.name} style={{ justifyContent: "center" }}>
                  <NavButton pageName={page.name} url={page.url} />
                </ListItem>
              ))}
              <ListItem>
                <Box justifyContent="center">
                  <Typography
                    className={classes.disclaimer}
                    color="secondary"
                  >
                    {" "}
                    The information on this site is not, nor should it be,
                    considered legal advice.
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationAlt;
