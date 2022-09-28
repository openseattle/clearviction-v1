import { Grid, ListItem, ListItemIcon, ListItemText, Link } from "@mui/material";
import { makeStyles } from '@mui/styles';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const useStyles = makeStyles(theme => ({
    icon: {
        minWidth: "20px",
    },
}));

export const CVPListItem = props => {
    const { text, useBulletPoint, textAlignment, isLink, href, onClick } = props;
    const classes = useStyles();

    const renderListItem = listType => {
        switch (listType) {
            case "link":
                return (
                    <Link
                        style={{ textDecoration: "underline" }}
                        href={href}
                        onClick={onClick}
                        target="_blank"
                        rel="noreferrer"
                        underline="hover">
                        {text}
                    </Link>
                );
            case "text":
                return <ListItemText>{text}</ListItemText>;
        }
    };

    return (
        <ListItem>
            {useBulletPoint && (
                <ListItemIcon className={classes.icon}>
                    <FiberManualRecordIcon style={{ color: "black", fontSize: 8 }} />
                </ListItemIcon>
            )}
            <Grid container alignItems="flex-start">
                {isLink && renderListItem("link")}
                {!isLink && renderListItem("text")}
            </Grid>
        </ListItem>
    );
};
