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
} from "@material-ui/core";
import { MenuSharp as MenuIcon, CloseSharp } from "@material-ui/icons";
import pages from "../data/siteMap";
import navLogo from "../Assets/cvp-logo-white.png";
import { useState } from "react";
import NavButton from "../ui-kit/NavButton";

const NavigationAlt = () => {
  const [menuState, setMenuState] = useState(null);

  const handleOpenMenu = (event) => {
    setMenuState(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container>
        <Toolbar>
          <Box
            component={Button}
            href="/"
            disableRipple
            style={{ textTransform: "none" }}
          >
            <Box
              component="img"
              src={navLogo}
              alt="conviction vacation project logo"
              style={{ height: 25, paddingRight: 2 }}
            />
            <Typography
              style={{
                color: "white",
                fontFamily: "helvetica",
                fontSize: "2em",
                mr: { xl: 10 },
              }}
            >
              WA Conviction Vacation Project
            </Typography>
          </Box>
          <Box style={{ flexGrow: 1 }} />
          {/* desktop menu */}
          <Box display={{ xs: "none", md: "flex" }}>
              {pages.map((page) => (
                <NavButton
                  key={page.name}
                  pageName={page.name}
                  url={page.url}
                />
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
              <MenuIcon style={{fontSize: "3rem"}}/>
            </IconButton>
          </Box>
          <Drawer
            anchor="right"
            open={Boolean(menuState)}
            onClose={handleCloseMenu}
            PaperProps={{ style: { backgroundColor: "#2d3047", width: "250px" } }}
          >
            <List>
              <ListItem style={{ justifyContent: "center" }}>
                <IconButton onClick={handleCloseMenu}>
                  <CloseSharp style={{ color: "white", fontSize: "3rem" }} />
                </IconButton>
              </ListItem>
              {pages.map((page) => (
                <ListItem key={page.name} style={{ justifyContent: "center" }}>
                  <NavButton pageName={page.name} url={page.url} />
                </ListItem>
              ))}
              <ListItem>
              <Box justifyContent="center" >
          <Typography style={{fontSize: "10px", textAlign: "center"}} color="primary">
            {" "}
            The information on this site is not, nor should it be, considered
            legal advice.
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
