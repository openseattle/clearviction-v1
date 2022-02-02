import {
  Typography,
  ListItem,
  Button,
  Collapse,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useState } from "react";


const NavButtonMobile = ({ theme, page, classes }) => {
  const [expandSubMenu, setExpandSubMenu] = useState(false);

  const handleExpandClick = () => {
    setExpandSubMenu(!expandSubMenu);
  };
  return (
    <div>
      {!page.subpages && (
        <ListItem component={Button} href={page.url}>
          <Typography className={classes.menuButton}>{page.name}</Typography>
        </ListItem>
      )}
      {page.subpages && (
        <div>
          <ListItem
            component={Button}
            onClick={handleExpandClick}
            aria-expanded={expandSubMenu}
            aria-label={"show more"}
          >
            <Typography className={classes.menuButton}>{page.name}</Typography>
            <ExpandMore className={classes.expandIconStyle} fontSize="medium" />
          </ListItem>
          <Collapse in={expandSubMenu} timeout="auto" unmountOnExit>
            {page.subpages.map((subpage, idx) => (
              <ListItem key={idx} component={Button} href={subpage.url}>
                <Typography className={classes.subMenuButton}>
                  {subpage.name}
                </Typography>
              </ListItem>
            ))}
          </Collapse>
        </div>
      )}
    </div>
  );
};

export default NavButtonMobile;
