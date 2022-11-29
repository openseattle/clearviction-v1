import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Uses styled() instead of makeStyles()
export const RedesignButtonPrimary = styled(Button)(({ theme }) => ({
    width: 248,
    height: 48,
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    color: theme.palette.primary.contrastText,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
}));
