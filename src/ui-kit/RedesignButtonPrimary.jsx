import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    RedesignButtonPrimaryStyle: {
        width: "450px",
        backgroundColor: "#ffffff",
        color: "#2F3554",
        height: "60px",
        borderRadius: "50px",
        padding: "16px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
        },
    },
}));

export const RedesignButtonPrimary = props => {
    const classes = useStyles();

    return (
        <Button
            className={classes.RedesignButtonPrimaryStyle}
            role="button"
            variant="contained"
            color="primary"
            {...props}
        >
            {props.children}
        </Button>
    );
};
