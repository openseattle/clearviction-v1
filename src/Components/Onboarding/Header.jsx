import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Typography } from "@mui/material";
import smallLogo from "../../Assets/Onboarding/smallLogo.svg";
import { useHeaderStyles } from "../../Styles/Onboarding/useHeaderStyles";
import SocialContainer from "./SocialContainer";

const Header = ({ text }) => {
    const classes = useHeaderStyles();
    const { title, description, information } = text;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.darkBlueBackground}>
            <Link to="/onboarding">
                <img src={smallLogo} className={classes.logoStyle} alt="CV logo" />
            </Link>

            <div className={classes.socialContainer}>
                <SocialContainer />
            </div>

            <div className={classes.headingContainer}>
                {title === "Welcome!" ? (
                    <div className={classes.welcomeHeader}>
                        <Typography variant="h1" className={classes.welcome} style={{ fontWeight: 400 }}>
                            {title}
                        </Typography>
                        <Typography variant="h2" className={classes.welcomePara}>
                            {information}
                        </Typography>
                    </div>
                ) : (
                    <div className={classes.modHeaderContainer}>
                        <Typography variant="h2" className={classes.title}>
                            {title}
                        </Typography>
                        <Typography variant="h1" className={classes.subheading}>
                            {description}
                        </Typography>
                    </div>
                )}
            </div>

            {/* mobile header
            {/* Drawer based nav */}
            {/* <Box display={{ xs: "flex", sm: "none" }}>
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
                    <ListItem>
                        <ListItemText style={{ textAlign: "center" }}>{title}</ListItemText>
                    </ListItem>
                    <ListItem >
                        <SocialContainer />
                    </ListItem>
                </List>
            </Drawer> */}
        </div>
    );
};

export default Header;
