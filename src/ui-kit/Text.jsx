import { Typography } from "@material-ui/core";

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
      style={
        (style,
        {
          size: fontSize,
          margin: "5px",
          padding: "5px",
          fontWeight: fontWeight,
          fontFamily: fontFamily,
          textAlign: textAlign,
        })
      }
    >
      {text}
    </Typography>
  );
}
