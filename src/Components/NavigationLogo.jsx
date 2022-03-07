import { IconButton } from "@material-ui/core";
import logo from "../Assets/clearviction_logo_small_light 2.svg";

export const NavigationLogo = () => (
  <IconButton href="/" aria-label="clearviction home page" disableRipple>
    <img src={logo} alt="clearviction" />
  </IconButton>
);
