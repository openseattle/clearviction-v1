import { Box, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  heroTitle: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  heroSubtitle: {
    maxWidth: 502,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));
const RedesignHeroPanel = (props) => {
  const { title, subtitle, children } = props;
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Container maxWidth="lg">
        <Typography className={classes.heroTitle} variant="h1">
          {title}
        </Typography>
        {subtitle && (
          <Typography className={classes.heroSubtitle} variant="subtitle1">
            {subtitle}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default RedesignHeroPanel;
