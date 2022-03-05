import {
  Grid,
  ListItem,
  ListItemIcon,
  Link,
  makeStyles,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
  icon: {
    minWidth: "20px",
  },
}));

export const CVPListItem = (props) => {
  const { text, useBulletPoint, textAlignment, isLink, href, onClick } = props;
  const classes = useStyles();

  const renderListItem = (listType) => {
    switch (listType) {
      case "link":
        return (
          <Link href={href} onClick={onClick} target="_blank" rel="noreferrer">
            {text}
          </Link>
        );
      case "text":
        return (
          <Link href={href} onClick={onClick} target="_blank" rel="noreferrer">
            {text}
          </Link>
        );
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
