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
    width: 288,
    height: 368,
    borderRadius: "6px",
  },
  name: {
    fontWeight: "bold",
  },
  avatar: {
    width: "100%",
    height: 250,
  },
});

const TeamCard = (props) => {
  const classes = useStyles();
  const { firstName, lastName, role, linkedIn } = props.member;

  return (
    <Card className={classes.card}>
      <CardMedia>
        <Avatar
          className={classes.avatar}
          variant="square"
          src={`https://cvp-team-photos.s3.us-west-2.amazonaws.com/${
            firstName + lastName
          }.jpg`}
        />
      </CardMedia>
      <List>
        <ListItem>
          <ListItemText
            primary={firstName + " " + lastName}
            secondary={role}
            primaryTypographyProps={{
              variant: "body1",
              className: classes.name,
              noWrap: true,
            }}
            secondaryTypographyProps={{
              variant: "body2",
              color: "textPrimary",
            }}
          />
          <IconButton
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            {linkedIn && <LinkedIn fontSize="large" color="primary" />}
          </IconButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default TeamCard;
