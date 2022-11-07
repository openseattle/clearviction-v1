import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Uses styled() instead of makeStyles()
export const RedesignButtonSecondary = styled(Button)(({ theme }) => ({
    width: 248,
    height: 48,
    borderRadius: 50,
    backgroundColor: "white",
    color: theme.palette.primary.dark,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}));
