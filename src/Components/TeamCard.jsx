import {
  Avatar,
  Card,
  IconButton,
  CardMedia,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { LinkedIn } from "@material-ui/icons";
import { useAboutStyles } from '../Styles/useAboutStyles';

const TeamCard = (props) => {
  const classes = useAboutStyles();
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
          alt={firstName + " " + lastName + " headshot"}
        />
      </CardMedia>
      <List className={classes.listStyle} >
        <ListItem>
          <ListItemText
            primary={firstName + " " + lastName}
            secondary={role}
            primaryTypographyProps={{variant: "h6", className: classes.name, noWrap: true }}
            secondaryTypographyProps={{ variant: "body2", color: "textPrimary", className: classes.role }}
          />
        {linkedIn &&
          <IconButton
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            component="button"
            aria-label={`view ${firstName}'s LinkedIn profile`}
            // className={classes.liIcon}
          >
             <LinkedIn fontSize="large" color="primary" />
          </IconButton>
          }
        </ListItem>
      </List>
    </Card>
  );
};

export default TeamCard;
