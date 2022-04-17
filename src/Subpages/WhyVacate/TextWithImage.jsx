import { Box, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    padding: theme.spacing(3),
  },
  headingRoles: {
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(2),
  },
  altHeadingRoles: {
    color: "white",
    paddingBottom: theme.spacing(2),
  },
  roleImage: {
    height: 300,
    width: "100%",
  },
  textMinimumStyle: {
    minHeight: "4em",
  },
}));

export const TextWithImage = (props) => {
  const classes = useStyles();
  const { img, header, text, cols, altStyle } = props;
  const textItems = text.map((t, idx) => (
    <Typography
      className={classes.textMinimumStyle}
      key={idx}
      variant="body1"
      align="center"
    >
      {t}
    </Typography>
  ));

  return (
    <Grid className={classes.rootGrid} item xs={12} sm={cols} md={cols}>
      <Box display="flex" justifyContent="center">
        <Box component="img" src={img} className={classes.roleImage} />
      </Box>
      <Typography
        className={altStyle ? classes.altHeadingRoles : classes.headingRoles}
        variant="h4"
        align="center"
      >
        {header}
      </Typography>
      {textItems}
    </Grid>
  );
};
