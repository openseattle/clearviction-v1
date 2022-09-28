import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    RedesignButtonSecondaryStyle: {
        width: "248px",
        height: "48px",
        borderRadius: "50px",
        padding: "16px",
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.secondary,
            color: theme.palette.secondary.contrastText,
        },
    },
}));

export const RedesignButtonSecondary = props => {
    const classes = useStyles();

    return (
        <Button
            className={`${classes.RedesignButtonSecondaryStyle} ${props.classes}`}
            role="button"
            variant="contained"
            {...props}
        >
            {props.children}
        </Button>
    );
};
