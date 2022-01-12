import {
  Avatar,
  Card,
  makeStyles,
  Typography,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    maxWidth: 250,
  },
  name: {
    fontWeight: "bold",
  },
  avatar: {
    width: 250,
    height: 250,
  },
});

const TeamCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Avatar className={classes.avatar} variant="square" />
      <CardContent>
        <Typography className={classes.name} variant="h5" >
           Name Surname {props.teamNumber}
        </Typography>
        <Typography variant="h6" >
           Title {props.teamNumber}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
