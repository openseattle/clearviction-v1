import {
  Box,
  Card,
  CardActionArea,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  cardStyle: {
    maxWidth: 400,
    borderRadius: 0,
    margin: 1,
    backgroundColor: theme.palette.primary.light,
    color: "white",
    "&:hover": {
      color: "white",
    },
  },
  cardStyleActive: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  cardTextStyle: {
    padding: theme.spacing(1),
  },
}));

const NavCardGroup = (props) => {
  const classes = useStyles();
  const { subPages } = props;
  return (
    <Box>
      <Grid container className={classes.root}>
        {subPages.map((pageCard) => (
          <Card
            className={classes.cardStyle}
            activeClassName={classes.cardStyleActive}
            key={pageCard.name}
            component={NavLink}
            to={pageCard.link}
          >
            <CardActionArea>
              <Box padding={3}>
                <Typography
                  className={classes.cardTextStyle}
                  variant="h3"
                  align="center"
                >
                  {pageCard.name}
                </Typography>
                <Typography
                  className={classes.cardTextStyle}
                  variant="body1"
                  align="center"
                >
                  {pageCard.desc}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default NavCardGroup;
