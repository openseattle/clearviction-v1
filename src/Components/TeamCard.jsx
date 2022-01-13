import {
  Avatar,
  Card,
  makeStyles,
  Typography,
  CardContent,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  card: {
    borderRadius: 0,
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
    <Grid className={classes.root} item xs={12} sm={6} md={4} lg={3}>
    <Card className={classes.card}>
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
    </Grid>
  );
};

export default TeamCard;
