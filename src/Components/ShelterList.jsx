import { List, ListItem, Grid, Typography } from "@material-ui/core";
import { HomeWorkOutlined } from "@material-ui/icons";
import { Call } from "@material-ui/icons";
import { ResourcesStyles } from "../Styles/ResourcesStyles";

const ShelterList = ({shelters}) => {
  const classes = ResourcesStyles();
  return (
    <List>
    {shelters.map((shelter, idx) => (
      <ListItem key={idx} style={{ display: "block" }} divider>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography >{shelter.name} </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography >
              {<HomeWorkOutlined className={classes.shelterIcon} />}{shelter.address}
             
              {" "}{shelter.city}
              <br/>
              {<Call className={classes.shelterIcon} />}{shelter.phone}
            </Typography>
          </Grid>
        </Grid>
      </ListItem>
    ))}
  </List>
  )
}

export default ShelterList;