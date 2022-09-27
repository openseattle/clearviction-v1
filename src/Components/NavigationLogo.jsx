import { ButtonBase } from "@material-ui/core";
import largeLogo from "../Assets/cVLogoInlineLight.svg";
import smallLogo from "../Assets/cv_small_logo_dark. 1.svg";
import { useEffect, useState } from "react";

const NavigationLogo = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        const mediaSize = window.innerWidth;
        mediaSize >= 768 ? setIsLargeScreen(true) : setIsLargeScreen(false);
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
