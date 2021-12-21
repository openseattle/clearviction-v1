import { Avatar, Card, makeStyles, Typography } from "@material-ui/core";
import { CardContent } from "@mui/material";

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
  },
  name: {
    fontWeight: "bold",
  },
  avatar: {
    width: 200,
    height: 200,
  },
});

const TeamCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Avatar className={classes.avatar} variant="square" />
      <CardContent>
        <Typography className={classes.name} variant="h5" align="center">
          Volunteer Name {props.teamNumber}
        </Typography>
        <Typography variant="h6" align="center">
          Volunteer Title {props.teamNumber}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
