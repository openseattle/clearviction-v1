import {
  List,
  ListItem,
  Grid,
  Typography,
  ListItemText,
} from "@material-ui/core";
import { Email, HomeWorkOutlined, Call } from "@material-ui/icons";
import { useResourcesStyles } from "../Styles/useResourcesStyles";
import { ExternalLink } from "../ui-kit/ExternalLink";
import { ListItemLink } from "../ui-kit/ListItemLink";

const HousingFinderList = ({ resources }) => {
  const classes = useResourcesStyles();
  return (
    <List style={{ width: "100%" }}>
      {resources.map((contact, idx) => (
        <ListItem key={idx} divider>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography>
                <ExternalLink href={contact.url}>{contact.name}</ExternalLink>
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <List >
                {contact.address && (
                  <ListItemLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.google.com/maps/search/?api=1&query=${contact.name}+${contact.address}+${contact.city}`}
                  >
                    <HomeWorkOutlined className={classes.shelterIcon} />
                    <ListItemText
                      primary={contact.address}
                    />
                  </ListItemLink>
                )}
                {contact.phone && (
                  <ListItemLink href={`tel:+${contact.phone}`}>
                    <Call className={classes.shelterIcon} />
                    {contact.tags2Phones && (
                      <Typography variant="body1">
                        {contact.tags2Phones[0]}
                      </Typography>
                    )}
                    <ListItemText primary={contact.phone} />
                  </ListItemLink>
                )}
                {contact.phone2 && (
                  <ListItemLink href={`tel:+${contact.phone2}`}>
                    <Call className={classes.shelterIcon} />
                    {contact.tags2Phones && (
                      <Typography variant="body1">
                        {contact.tags2Phones[1]}
                      </Typography>
                    )}
                    <ListItemText primary={contact.phone2} />
                  </ListItemLink>
                )}
                {contact.email && (
                  <ListItemLink href={`mailto:${contact.email}`}>
                    <Email className={classes.shelterIcon} />
                    <ListItemText
                      primaryTypographyProps={{
                        style: { overflowWrap: "break-word" },
                      }}
                      primary={contact.email}
                    />
                  </ListItemLink>
                )}
              </List>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

export default HousingFinderList;
