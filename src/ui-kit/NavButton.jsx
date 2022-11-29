import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
    navButtonStyle: {
        textAlign: "center",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: "white",
        textTransform: "none",
        borderRight: "none",
        border: "1px solid transparent",
        "&:hover": {
            color: theme.palette.secondary.light,
            borderRight: "none",
            border: "1px solid transparent",
        },
    },
    navText: {},
}));
const NavButton = ({ page, theme }) => {
    const { name, url, subpages } = page;
    const classes = useStyles(theme);

    const [anchorE1, setAnchorE1] = useState(null);

    const handleClick = event => {
        setAnchorE1(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorE1(null);
    };
    if (subpages) {
        return (
            <>
                <Button
                    variant="text"
                    sx={{ border: "none" }}
                    aria-controls="sub menu"
                    aria-haspopup="true"
                    className={classes.navButtonStyle}
                    onClick={handleClick}
                >
                    <Typography className={classes.navText}>{name}</Typography>
                    <ExpandMoreOutlined />
                </Button>

                <Menu
                    id="subpages menu"
                    getContentAnchorEl={null}
                    anchorEl={anchorE1}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={Boolean(anchorE1)}
                    onClose={handleClose}
                    keepMounted
                >
                    {subpages.map((subpage, idx) => (
                        <MenuItem key={idx} onClick={handleClose} component={Button} href={subpage.url}>
                            {subpage.name}
                        </MenuItem>
                    ))}
                </Menu>
            </>
        );
    }
    return (
        <Button variant="text" sx={{ textTransform: "none", color: "white" }} href={url}>
            <Typography className={classes.navText}>{name}</Typography>
        </Button>
    );
};

export default NavButton;
