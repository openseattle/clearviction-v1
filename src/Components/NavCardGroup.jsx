import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    width: "100%",
    minHeight: 80,
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
  }
}));

const NavCardGroup = (props) => {
  const classes = useStyles();
  const { subPages, xs, sm, md } = props;
  return (
    <Box>
      <Grid container >
        {subPages.map((pageCard) => (
          <Grid className={classes.gridStyle} item key={pageCard.name} xs={xs} sm={sm} md={md}>
            <Button
              className={classes.cardStyle}
              activeClassName={classes.cardStyleActive}
              component={NavLink}
              to={pageCard.link} 
              >
                <div>
                <Typography variant="h4">{pageCard.name}</Typography>
                <Typography variant="body2">{pageCard.desc}</Typography>

                </div>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NavCardGroup;
