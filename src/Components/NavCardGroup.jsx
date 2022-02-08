import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    width: "100%",
    minHeight: 120,
    [theme.breakpoints.down("sm")]: {
      minHeight: 50,
    },
    borderRadius: 0,
    backgroundColor: theme.palette.primary.light,
    color: "white",
    "&:hover": {
      color: "black",
    },
  },
  cardStyleActive: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  cardTextStyle: {
    padding: theme.spacing(1),
  },
  gridStyle: {
    padding: 2,
  },
}));

const NavCardGroup = (props) => {
  const classes = useStyles();
  const { subPages, xs, sm, md } = props;
  return (
    <Box>
      <Grid container>
        {subPages.map((pageCard) => (
          <Grid
            className={classes.gridStyle}
            item
            key={pageCard.name}
            xs={xs}
            sm={sm}
            md={md}
          >
            <Button
              className={classes.cardStyle}
              activeClassName={classes.cardStyleActive}
              component={NavLink}
              to={pageCard.link}
            >
              <div>
                <Typography className={classes.cardTextStyle} variant="h4">
                  {pageCard.name}
                </Typography>
                <Box display={{ xs: "none", sm: "none", md: "block" }}>
                  <Typography variant="body2">{pageCard.desc}</Typography>
                </Box>
              </div>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NavCardGroup;
