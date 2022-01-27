import {
  List,
  ListItem,
  Grid,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { HomeWorkOutlined } from "@material-ui/icons";
import { Call } from "@material-ui/icons";
import { ResourcesStyles } from "../Styles/ResourcesStyles";

const ShelterList = ({ shelters }) => {
  const classes = ResourcesStyles();
  return (
    <List>
      {shelters.map((shelter, idx) => (
        <ListItem key={idx} style={{ display: "block" }} divider>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography>{shelter.name} </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List >
              <ListItem >
                <ListItemIcon>
                  <HomeWorkOutlined className={classes.shelterIcon} />
                </ListItemIcon>
                <ListItemText primary={shelter.address + " " + shelter.city} />
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <Call className={classes.shelterIcon} />
                </ListItemIcon>
                <ListItemText primary={shelter.phone} />
              </ListItem>
              </List>

            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

export default ShelterList;
