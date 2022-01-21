import { Grid, Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  roleImage: {
    height: 300,
    width: 300,
  },
  titleRoles: {
    padding: theme.spacing(5),
  },
  headingRoles: {
    color: theme.palette.primary.light,
    paddingBottom: theme.spacing(2),
  },
  roleAdjust: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
    },
  },
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  fact: {
    padding: theme.spacing(1),
  },
}));

const FactGroup = (props) => {
  const { fact1, fact2, fact3 } = props;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid className={classes.fact} item xs={12} sm={4} md={4}>
          <Box display="flex" justifyContent="center">
            <Box
              component="img"
              src={fact1.graphic}
              className={classes.roleImage}
            />
          </Box>
          <Typography
            className={classes.headingRoles}
            variant="h3"
            align="center"
          >
            {fact1.title}
          </Typography>
          <Typography variant="body1" align="center">
            {fact1.text}
          </Typography>
        </Grid>
        <Grid className={classes.fact} item xs={12} sm={4} md={4}>
          <Box
            className={classes.roleAdjust}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={fact2.graphic}
              className={classes.roleImage}
            />
          </Box>
          <Typography
            className={classes.headingRoles}
            variant="h3"
            align="center"
          >
            {fact2.title}
          </Typography>
          <Typography variant="body1" align="center">
            {fact2.text}
          </Typography>
        </Grid>
        <Grid className={classes.fact} item xs={12} sm={4} md={4}>
          <Box display="flex" justifyContent="center">
            <Box
              component="img"
              src={fact3.graphic}
              className={classes.roleImage}
            />
          </Box>
          <Typography
            className={classes.headingRoles}
            variant="h3"
            align="center"
          >
            {fact3.title}
          </Typography>
          <Typography variant="body1" align="center">
            {fact3.text}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FactGroup;
