import { List, ListItem, Grid, Typography, Link, Divider } from "@material-ui/core";
import { Email, HomeWorkOutlined, Call } from "@material-ui/icons";
import { ResourcesStyles } from "../Styles/ResourcesStyles";

const HousingFinderList = ({ resources }) => {
  const classes = ResourcesStyles();
  return (
    <List>
      {resources.map((contact, idx) => (
        <ListItem key={idx} style={{ display: "block" }} divider>
          <Grid container>
            <Grid item xs={6}>
              <Typography>
                <Link href={contact.url} color="initial">
                  {contact.name}
                </Link>
              </Typography>
              <br />
              <Typography>{contact.desc}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">
                {contact.address && (
                  <HomeWorkOutlined className={classes.shelterIcon} />
                )}
                {contact.address}
                <br />
                {contact.city && contact.city}
                <br />
                {contact.phone && <Call className={classes.shelterIcon} />}
                {contact.phone}
                <br />
                {contact.email && (
                  <Email className={classes.shelterIcon} />
                )}{" "}
                {contact.email && contact.email}
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

export default HousingFinderList;
