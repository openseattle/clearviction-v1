import {
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  navButtonStyle: {
    color: "white",
    textTransform: "none",
    "&:hover": { color: "white", textDecoration: "underline" },
  },
  navText: {
  },
}));
const NavButton = ({ page, theme }) => {
  const { name, url, subpages } = page;
  const classes = useStyles(theme);

  const [anchorE1, setAnchorE1] = useState(null);

  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  if (subpages) {
    return (
      <div>
        <Button className={classes.navButtonStyle} onClick={handleClick}>
          <Typography className={classes.navText}>{name}</Typography>
          <ExpandMoreOutlined />
        </Button>

        <Menu
          id={"subpages menu"}
          anchorEl={anchorE1}
          open={Boolean(anchorE1)}
          onClose={handleClose}
          keepMounted
        >
          {subpages.map((subpage, idx) => (
            <MenuItem
              key={idx}
              onClick={handleClose}
              component={Button}
              href={subpage.url}
            >
              {subpage.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  } else {
    return (
      <Button className={classes.navButtonStyle} href={url}>
        <Typography className={classes.navText}>{name}</Typography>
      </Button>
    );
  }
};

export default NavButton;
