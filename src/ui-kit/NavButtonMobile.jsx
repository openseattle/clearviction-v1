import { Typography, ListItem, Button, Collapse } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useState } from "react";

const NavButtonMobile = ({ page, classes }) => {
  const [expandSubMenu, setExpandSubMenu] = useState(false);

  const handleExpandClick = () => {
    setExpandSubMenu(!expandSubMenu);
  };
  return (
    <div>
      {!page.subpages && (
        <Button component={Button} href={page.url} fullWidth>
          <Typography className={classes.menuButton} align="center">
            {page.name}
          </Typography>
        </Button>
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
              <Button key={idx} href={subpage.url} fullwidth>
                <Typography className={classes.subMenuButton}>
                  {subpage.name}
                </Typography>
              </Button>
            ))}
          </Collapse>
        </div>
      )}
    </div>
  );
};

export default NavButtonMobile;
