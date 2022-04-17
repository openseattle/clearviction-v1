import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  disclaimer: {
    margin: theme.spacing(2),
    fontSize: 11,
  },
}));

const LegalDisclaimer = () => {
  const classes = useStyles();
  return (
    <Box justifyContent="center">
      <Typography
        className={classes.disclaimer}
        align="center"
        variant="subtitle2"
      >
        The information on this site is not, nor should it be, considered legal
        advice.
      </Typography>
    </Box>
  );
};

export default LegalDisclaimer;
