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
        />
      </CardMedia>
      <List style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <ListItem>
          <ListItemText
            primary={firstName + " " + lastName}
            secondary={role}
            primaryTypographyProps={{variant: "h6", className: classes.name, noWrap: true }}
            secondaryTypographyProps={{ variant: "body2", color: "textPrimary", className: classes.role }}
          />
        
          <IconButton
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            // className={classes.liIcon}
          >
            {linkedIn && <LinkedIn fontSize="large" color="primary" />}
          </IconButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default TeamCard;
