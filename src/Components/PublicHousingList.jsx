import { List, ListItem, Grid, Typography, ListItemText } from "@material-ui/core";
import { HomeWorkOutlined, Call } from "@material-ui/icons";

import { useResourcesStyles } from "../Styles/useResourcesStyles";
import { ListItemLink } from "../ui-kit/ListItemLink";

const PublicHousingList = ({ publicAssociations, }) => {
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
                            <List>
                                <ListItemLink
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://www.google.com/maps/search/?api=1&query=${association.area}+${association.address}+${association.city}`}
                                >
                                    <HomeWorkOutlined className={classes.shelterIcon} />
                                    <ListItemText primary={association.address + " " + association.city} />
                                </ListItemLink>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <List>
                                <ListItemLink href={`tel:+${association.phone}`}>
                                    <Call className={classes.shelterIcon} />
                                    <ListItemText primary={association.phone} />
                                </ListItemLink>
                            </List>
                        </Grid>
                    </Grid>
                </ListItem>
            ))}
        </List>
    );
};

export default PublicHousingList;
