import {
  ListItem,
  Box,
  ListItemIcon,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing(4),
    color: theme.palette.primary.light,
  },
}));

const ListItemMobileSnap = (props) => {
  const { image, text, textLeft, edu, header } = props;
  const classes = useStyles();

  return (
    <>
      {!edu && (
        <>
          <Box display={{ xs: "block", sm: "none" }}>
            <ListItem style={{ justifyContent: "center" }}>{image}</ListItem>
          </Box>
          <ListItem>
            {textLeft && text}

            <Box display={{ xs: "none", sm: "block" }}>
              <ListItemIcon>{image}</ListItemIcon>
            </Box>
            {!textLeft && text}
          </ListItem>
        </>
      )}

      {/* If this is used for the Education Section. TODO is to refactor this so we only have one set of components */}
      {edu && (
        <>
          <Box display={{ xs: "block", sm: "none" }}>
            <ListItem style={{ justifyContent: "center" }}>{image}</ListItem>
          </Box>

          <ListItem>
            {header && textLeft && (
              <Box>
                <Typography className={classes.title} variant="h2">
                  {header}
                </Typography>
                {textLeft && text}
              </Box>
            )}

            <Box display={{ xs: "none", sm: "block" }}>
              <ListItemIcon>{image}</ListItemIcon>
            </Box>

            <Box>
              {header && !textLeft && (
                <Typography className={classes.title} variant="h2">
                  {header}
                </Typography>
              )}
              {!textLeft && text}
            </Box>
          </ListItem>
        </>
      )}
    </>
  );
};

export default ListItemMobileSnap;
