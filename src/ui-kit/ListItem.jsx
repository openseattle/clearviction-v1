import {
    Grid,
    Typography,
    ListItem,
    ListItemIcon,
} from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export const CVPListItem = (props) => {
    const { text, useBulletPoint, textAlignment } = props;

    return (
        <ListItem>
            { useBulletPoint &&
                <ListItemIcon>
                    <FiberManualRecordIcon  style={{ color: "black", fontSize: 8 }}/>
                </ListItemIcon>
            }
            <Grid container alignItems="flex-start">
                <Typography align={textAlignment} variant="body1">
                    {text}
                </Typography>
            </Grid>
        </ListItem>
    )
}