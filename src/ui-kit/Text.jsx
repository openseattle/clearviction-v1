import { Typography } from "@mui/material";

export default function Text({
  variant,
  text,
  style,
  fontWeight,
  fontFamily,
  fontSize,
}) {
  return (
    <Typography
      variant={variant}
      style={{ style }}
      sx={{
        size: fontSize,
        margin: "5px",
        padding: "5px",
        fontWeight: fontWeight,
        fontFamily: fontFamily,
      }}
    >
      {text}
    </Typography>
  );
}
