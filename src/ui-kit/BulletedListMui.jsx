import { Typography } from "@material-ui/core";

/**
 * BulletedListMui is a solution for unordered lists that want bullet points
 * since Material-Ui does not have a specific solution for this scenario.
 * @param {*} props
 * @returns ul element with Material Ui style applied to it
 */
const BulletedListMui = (props) => {
  const { children, textColor } = props;
  return (
    <Typography
      component="ul"
      style={{ listStyleType: "disc", color: textColor, }}
    >
      {children}
    </Typography>
  );
};

export default BulletedListMui;
