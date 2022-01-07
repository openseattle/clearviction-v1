import { Button, Typography } from "@material-ui/core";

const NavButton = (props) => {
  const { pageName, url } = props;
  return (
    <Button
      href={url}
      style={{
        minWidth: "80px",
        color: "white",
        textTransform: "none",
        "&:hover": { color: "white", textDecoration: "underline" },
      }}
    >
      <Typography fontSize="14px">{pageName}</Typography>
    </Button>
  );
};

export default NavButton;
