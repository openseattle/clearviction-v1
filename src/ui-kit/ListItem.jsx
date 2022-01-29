import {
    Grid,
    Typography,
    ListItem,
    ListItemIcon,
    Link
} from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export const CVPListItem = (props) => {
    const { text, useBulletPoint, textAlignment, isLink, href, onClick } = props;

    const renderListItem = (listType) => {
        if (listType === "link") {
            return (
                <Link href={href} onClick={onClick} target="_blank" rel="noreferrer">
                    {text}
                </Link>
            )
        } else if (listType === "text") {
            return (
                <Typography align={textAlignment} variant="body1">
                    {text}
                </Typography>
            )
        }
    }

    return (
        <ListItem>
            { useBulletPoint &&
                <ListItemIcon>
                    <FiberManualRecordIcon  style={{ color: "black", fontSize: 8 }}/>
                </ListItemIcon>
            }
            <Grid container alignItems="flex-start">
                { isLink &&
                   renderListItem("link")
                }
                { !isLink &&
                    renderListItem("text")
                }
            </Grid>
        </ListItem>
    )
}