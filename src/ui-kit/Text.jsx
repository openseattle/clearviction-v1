import { Typography } from "@mui/material";

export default function Text({
  variant,
  text,
  style,
  fontWeight,
  fontFamily,
  fontSize,
  textAlign,
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
        textAlign: textAlign,
      }}
    >
      {text}
    </Typography>
  );
}
