import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  hero: {
    marginTop: "2em",
    marginBottom: "2em",
  },
  heroTitle: {
    marginBottom: "0",
  },
  heroSubtitle: {
    marginTop: "1em",
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
        <Typography className={classes.heroSubtitle} variant="h4">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default HeroPanel;
