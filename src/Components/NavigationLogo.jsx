import { ButtonBase } from "@material-ui/core";
import logo from "../Assets/cv_small_logo_dark. 1.svg";

export const NavigationLogo = () => (
    <ButtonBase href="/" aria-label="clearviction home page" disableRipple>
        <img src={logo} alt="clearviction logo" style={{ height: 40 }} />
    </ButtonBase>
);
