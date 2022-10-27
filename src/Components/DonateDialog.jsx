import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import venmo from "../Assets/venmo.png";

const useStyles = makeStyles(theme => ({
    closeButtonStyle: {
        color: theme.palette.secondary.main,
        margin: theme.spacing(2),
    },
}));

function DonateDialog({ onClose, open }) {
    const classes = useStyles();
    return (
        <Dialog
            onClose={onClose}
            aria-labelledby="donate-to-clearviction"
            open={open}
            maxWidth="md"
        >
            <DialogTitle>Right now, we accept donations through Venmo*.</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <img src={venmo} alt="donate to clearviction qr code" width={300} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">You can Venmo @Seamus-Brugh by:</Typography>
                        <List>
                            <ListItem>Searching the username in the Venmo app</ListItem>
                            <ListItem>or by scanning this QR code in the Venmo app</ListItem>
                        </List>

                        <Typography variant="subtitle2">
                            *this donation should not be marked as goods or service.
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                    aria-controls="closes dialog"
                    className={classes.closeButtonStyle}
                    onClick={onClose}
                >
                    okay
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DonateDialog;
