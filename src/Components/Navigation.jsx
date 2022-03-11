import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  Container,
  makeStyles,
  ButtonGroup,
  Collapse,
} from "@material-ui/core";
import { MenuSharp as MenuIcon, CloseSharp } from "@material-ui/icons";
import pages from "../data/siteMap";
import { useState } from "react";
import NavButton from "../ui-kit/NavButton";
import NavButtonMobile from "../ui-kit/NavButtonMobile";
import LegalDisclaimer from "./LegalDisclaimer";
import { NavigationLogo } from "./NavigationLogo";

const useStyles = makeStyles((theme) => ({
  closeIcon: {
    color: "white",
  },
  menuButton: {
    textTransform: "none",
    color: "white",
  },
  subMenuButton: {
    textTransform: "none",
    color: "white",
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

const Navigation = () => {
  const [menuState, setMenuState] = useState(null);
  const handleOpenMenu = (event) => {
    setMenuState(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  const classes = useStyles();

  return (
    <>
      <AppBar color="primary" elevation={0}>
        <Container maxwidth="lg">
          <Toolbar>
            <NavigationLogo />
            <Box style={{ flexGrow: 1 }} />

            {/* desktop menu */}
            <Box display={{ xs: "none", sm: "none", md: "flex" }}>
              <ButtonGroup>
                {pages.map((page, idx) => (
                  <NavButton key={idx} page={page} />
                ))}
              </ButtonGroup>
            </Box>
            {/* mobile menu */}

            {/* Drawer based nav */}
            <Box display={{ xs: "flex", sm: "flex", md: "none" }}>
              <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenMenu}
              >
                <MenuIcon fontSize="large" />
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
                    <CloseSharp
                      fontSize="large"
                      className={classes.closeIcon}
                    />
                  </IconButton>
                </ListItem>
                {pages.map((page, idx) => (
                  <NavButtonMobile key={idx} page={page} classes={classes} />
                ))}
                <ListItem>
                  <LegalDisclaimer />
                </ListItem>
              </List>
            </Drawer>
            {/* Collapse based nav */}
            {/* <Box display={{ xs: "flex", sm: "flex", md: "none" }}>
              {menuState ? (
                <IconButton onClick={handleCloseMenu}>
                  <CloseSharp fontSize="large" className={classes.closeIcon} />
                </IconButton>
              ) : (
                <IconButton
                  size="medium"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleOpenMenu}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
              )}
            </Box> */}
          </Toolbar>
        </Container>
        {/* <Collapse in={Boolean(menuState)} timeout="auto" unmountOnExit>
          <List className={classes.menuStyle}>
            {pages.map((page, idx) => (
              <NavButtonMobile key={idx} page={page} classes={classes} />
            ))}
            <ListItem>
              <LegalDisclaimer />
            </ListItem>
          </List>
        </Collapse> */}
      </AppBar>
      <Box height={56} />
    </>
  );
};

export default Navigation;
