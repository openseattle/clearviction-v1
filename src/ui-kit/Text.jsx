import { Typography } from "@mui/material";

export default function Text({ variant, text, style }) {
    return (
        <Typography variant={variant} style={{style}}>
            {text}
        </Typography>        
    );
  }