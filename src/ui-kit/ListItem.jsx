import {
    Grid,
    Typography,
    ListItem,
    ListItemIcon,
} from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export const CVPListItem = (props) => {
    const { text } = props;

    return (
        <ListItem>
            <ListItemIcon>
                <FiberManualRecordIcon fontSize="small"/>
            </ListItemIcon>
            <Grid container alignItems="flex-start">
                <Typography variant="body1">
                    {text}
                </Typography>
            </Grid>
        </ListItem>
    )
}