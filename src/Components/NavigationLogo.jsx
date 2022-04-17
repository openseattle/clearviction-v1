import { ButtonBase } from "@material-ui/core";
import logo from "../Assets/clearviction_logo_small_light 2.svg";

export const NavigationLogo = () => (
  <ButtonBase
    href="/"
    aria-label="clearviction home page"
    disableRipple
  >
    <img src={logo} alt="clearviction logo" style={{ height: 40 }} />
  </ButtonBase>
);
