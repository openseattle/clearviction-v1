import {
  Avatar,
  Card,
  makeStyles,
  IconButton,
  CardMedia,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  card: {
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
  const { firstName, lastName, role, profileImage, linkedIn } = props.member;
  return (
    <Card className={classes.card}>
      <CardMedia>
        <Avatar
          className={classes.avatar}
          variant="square"
          src={profileImage}
        />
      </CardMedia>
      <List>
        <ListItem>
          <ListItemText primary={firstName + " " + lastName} secondary={role} />
          <IconButton href={linkedIn} target="_blank" rel="noopener noreferrer">
            {linkedIn && <LinkedIn fontSize="large" />}
          </IconButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default TeamCard;
