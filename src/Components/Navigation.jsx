import {
    AppBar,
    IconButton,
    Toolbar,
    Box,
    Drawer,
    List,
    ListItem,
    Container,
    ButtonGroup,
    Button,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { MenuSharp as MenuIcon, CloseSharp } from "@mui/icons-material";
import { headerPages } from "../data/siteMap";
import { useState } from "react";
import NavButton from "../ui-kit/NavButton";
import NavButtonMobile from "../ui-kit/NavButtonMobile";
import LegalDisclaimer from "./LegalDisclaimer";
import NavigationLogo from "./NavigationLogo";
import SkipLink from "../ui-kit/SkipLink";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";

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
    navCalc: {
        height: "40px",
        fontSize: "14px",
        borderRadius: "50px",
        padding: "16px",
        backgroundColor: "white",
        color: theme.palette.primary.dark,
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
        },
        [theme.breakpoints.down('lg')]: {
            height: "60px",
        },
    }
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

    return <>
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
                            {headerPages.map((page, idx) => (
                                page.name !== "Access Calculator" ? <NavButton key={idx} page={page} /> : null
                            ))}
                        </ButtonGroup>
                        <RedesignButtonPrimary 
                            href="/calculator/landing-0"
                            className={classes.navCalc}
                            >
                            Access Calculator
                        </RedesignButtonPrimary>

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
                                <IconButton onClick={handleCloseMenu} aria-label="close menu" size="large">
                                    <CloseSharp fontSize="large" className={classes.closeIcon} />
                                </IconButton>
                            </ListItem>
                            {headerPages.map(page => (
                                <NavButtonMobile key={page.name} page={page} classes={classes} />
                            ))}
                            <ListItem>
                                <LegalDisclaimer />
                            </ListItem>
                        </List>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
        <Box height={56} />
    </>;
};

export default Navigation;
