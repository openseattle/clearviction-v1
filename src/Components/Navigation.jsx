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
    Button,
    Typography,
} from "@material-ui/core";
import { MenuSharp as MenuIcon, CloseSharp } from "@material-ui/icons";
import pages from "../data/siteMap";
import { useState } from "react";
import NavButton from "../ui-kit/NavButton";
import NavButtonMobile from "../ui-kit/NavButtonMobile";
import NavigationLogo from "./NavigationLogo";
import SkipLink from "../ui-kit/SkipLink";

const useStyles = makeStyles(theme => ({
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
    disclaimer: {
        margin: theme.spacing(2),
        fontSize: 11,
    },
    skipLink: {
        marginRight: "1rem",
        position: "absolute",
        left: "-100vw",
        transition: "transform 0.3s",
        "&:focus": {
            position: "static",
            transform: "translateX(0)",
        },
    },
}));

const Navigation = () => {
    const [menuState, setMenuState] = useState(null);
    const handleOpenMenu = event => {
        setMenuState(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuState(null);
    };

    const classes = useStyles();

    return (
        <>
            <AppBar color="primary" elevation={0} role="navigation">
                <Container maxWidth="xl">
                    <Toolbar>
                        <SkipLink className={classes.skipLink}>
                            <Button style={{ color: "white" }}>Skip Navigation Links</Button>
                        </SkipLink>
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
                                aria-label="Show/hide navigation menu"
                                onClick={handleOpenMenu}
                            >
                                <MenuIcon fontSize="large" />
                            </IconButton>
                        </Box>
                        <Drawer anchor="right" open={Boolean(menuState)} onClose={handleCloseMenu}>
                            <List className={classes.menuStyle}>
                                <ListItem style={{ justifyContent: "center" }}>
                                    <IconButton onClick={handleCloseMenu} aria-label="close menu">
                                        <CloseSharp fontSize="large" className={classes.closeIcon} />
                                    </IconButton>
                                </ListItem>
                                {pages.map(page => (
                                    <NavButtonMobile key={page.name} page={page} classes={classes} />
                                ))}
                                <ListItem>
                                    <Box justifyContent="center">
                                        <Typography className={classes.disclaimer} align="center" variant="subtitle2">
                                            The information on this site is not, nor should it be, considered legal
                                            advice.
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </Drawer>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box height={56} />
        </>
    );
};

export default Navigation;
