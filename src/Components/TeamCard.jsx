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

  const {firstName, lastName, role, photo, linkedIn} = props.member;

  return (
    <Card className={classes.card}>
      <CardMedia>
        <Avatar className={classes.avatar} variant="square" src={photo} />
      </CardMedia>
      <CardContent style={{ marginBottom: "-45px" }}>
        <Typography className={classes.name} variant="h6">
          {firstName} {lastName}
        </Typography>
        <Typography variant="h6">{role}</Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "right" }}>
        <IconButton href={linkedIn} target="_blank" rel="noopener noreferrer">
          <LinkedIn fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TeamCard;
