import { ButtonBase } from "@mui/material";
import { useEffect, useState } from "react";
import largeLogo from "../Assets/cVLogoInlineLight.svg";
import smallLogo from "../Assets/cv_small_logo_dark. 1.svg";

const NavigationLogo = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        const mediaSize = window.innerWidth;
        const shouldSetAsLargeScreen = mediaSize >= 768;
        setIsLargeScreen(shouldSetAsLargeScreen);
    }, []);

    return (
        <ButtonBase href="/" aria-label="clearviction home page" disableRipple>
            {isLargeScreen ? (
                <img src={largeLogo} alt="clearviction logo" style={{ height: 60 }} />
            ) : (
                <img src={smallLogo} alt="clearviction logo" style={{ height: 50 }} />
            )}
        </ButtonBase>
    );
};

export default NavigationLogo;
