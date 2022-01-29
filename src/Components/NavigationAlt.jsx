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
  ButtonGroup,
} from "@material-ui/core";
import { MenuSharp as MenuIcon, CloseSharp } from "@material-ui/icons";
import pages from "../data/siteMap";
import navLogo from "../Assets/cvp-logo-white.png";
import { useState } from "react";
import NavButton from "../ui-kit/NavButton";
import NavButtonMobile from "../ui-kit/NavButtonMobile";

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
    textAlign: "center",
  },
  closeIcon: {
    color: "white",
    fontSize: "3rem",
  },
  menuButton: {
    color: "white",
    fontFamily: ["Roboto", "sans-serif"],
  },
  subMenuButton: {
    color: "white",
    fontFamily: ["Roboto", "sans-serif"],
    marginLeft: theme.spacing(2),
  },
  menuStyle: {
    padding: theme.spacing(3),
  },
  expandIconStyle: {
    color: "white",
    margin: theme.spacing(1),
  },
}));

const NavigationAlt = () => {
  const [menuState, setMenuState] = useState(null);
  const handleOpenMenu = (event) => {
    setMenuState(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Box component={Button} href="/">
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
            <ButtonGroup>
              {pages.map((page) => (
                <NavButton page={page} />
              ))}
            </ButtonGroup>
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
            <List className={classes.menuStyle}>
              <ListItem style={{ justifyContent: "center" }}>
                <IconButton onClick={handleCloseMenu}>
                  <CloseSharp className={classes.closeIcon} />
                </IconButton>
              </ListItem>
              {pages.map((page, idx) => (
                <NavButtonMobile key={idx} page={page} classes={classes} />
              ))}
              <ListItem>
                <Box justifyContent="center">
                  <Typography className={classes.disclaimer} color="secondary">
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
