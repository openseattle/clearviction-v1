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
import { useResourcesStyles } from "../Styles/useResourcesStyles";

const PublicHousingList = ({ publicAssociations }) => {
  const classes = useResourcesStyles();
  return (
    <List className={classes.publicHousingListStyle}>
      {publicAssociations.map((association, idx) => (
        <ListItem key={idx} divider>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Typography> {association.area} </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <List >
                <ListItem>
                  <ListItemIcon>
                    {<HomeWorkOutlined className={classes.shelterIcon} />}
                  </ListItemIcon>
                  <ListItemText
                    primary={association.address + " " + association.city}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={4}>
              <List >
                <ListItem>
                  <ListItemIcon>
                    <Call className={classes.shelterIcon} />
                  </ListItemIcon>
                  <ListItemText primary={association.phone} />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

export default PublicHousingList;
