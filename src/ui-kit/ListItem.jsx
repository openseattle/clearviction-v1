import { Grid, ListItem, ListItemIcon, ListItemText, Link, makeStyles } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles(theme => ({
    icon: {
        minWidth: "20px",
    },
}));

export const CVPListItem = props => {
    const { text, useBulletPoint, isLink, href, onClick, } = props;
    const classes = useStyles();

    const renderListItem = listType => {
        switch (listType) {
            case "link":
                return (
                    <Link
                        style={{ textDecoration: "underline", }}
                        href={href}
                        onClick={onClick}
                        target="_blank"
                        rel="noreferrer"
                    >
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
                    <FiberManualRecordIcon style={{ color: "black", fontSize: 8, }} />
                </ListItemIcon>
            )}
            <Grid container alignItems="flex-start">
                {isLink && renderListItem("link")}
                {!isLink && renderListItem("text")}
            </Grid>
        </ListItem>
    );
};
