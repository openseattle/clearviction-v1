import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  Container,
  makeStyles,
  ButtonGroup,
} from "@material-ui/core";
import { MenuSharp as MenuIcon, CloseSharp } from "@material-ui/icons";
import pages from "../data/siteMap";
import { useState } from "react";
import NavButton from "../ui-kit/NavButton";
import NavButtonMobile from "../ui-kit/NavButtonMobile";
import LegalDisclaimer from "./LegalDisclaimer";

const useStyles = makeStyles((theme) => ({
  closeIcon: {
    color: "white",
  },
  menuButton: {
    color: "white",
  },
  subMenuButton: {
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
    <AppBar color="primary" elevation={0}>
      <Container maxwidth="lg">
        <Toolbar>
          <Typography variant="h4">
            CV LOGO
          </Typography>
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
                  <CloseSharp fontSize="large" className={classes.closeIcon} />
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
