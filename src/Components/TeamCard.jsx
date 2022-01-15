import {
  Avatar,
  Card,
  makeStyles,
  Typography,
  CardContent,
  IconButton,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import { LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  card: {
    width: 200,
    borderRadius: 0,
  },
  name: {
    fontWeight: "bold",
  },
  avatar: {
    width: "100%",
    height: 200,
  },
});

const TeamCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia>
        <Avatar className={classes.avatar} variant="square" />
      </CardMedia>
      <CardContent style={{ marginBottom: "-45px" }}>
        <Typography className={classes.name} variant="h6">
          Name Surname {props.teamNumber}
        </Typography>
        <Typography variant="h6">Title {props.teamNumber}</Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "right" }}>
        <IconButton>
          <LinkedIn fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TeamCard;
