import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  hero: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  heroTitle: {
    marginBottom: "0",
  },
  heroSubtitle: {
    marginTop: "2rem",
    fontSize: 20,
  },
});
const HeroPanel = (props) => {
  const { title, subtitle } = props;
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Typography className={classes.heroTitle} variant="h1">
        {title}
      </Typography>
      {subtitle && (
        <Typography className={classes.heroSubtitle} variant="body1">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default HeroPanel;
