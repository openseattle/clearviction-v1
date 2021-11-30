import { Typography } from "@mui/material";

export default function Text({ variant, text, style, fontWeight }) {
    return (
        <Typography variant={variant} style={{style}} sx={{ margin: '10px', padding: '10px', fontWeight: fontWeight }}>
            {text}
        </Typography>        
    );
  }