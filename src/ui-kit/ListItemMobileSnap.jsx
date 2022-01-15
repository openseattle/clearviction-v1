import { ListItem, Box, ListItemIcon } from "@material-ui/core";

const ListItemMobileSnap = (props) => {
  const { image, text, textLeft } = props;

  return (
    <>
      <Box display={{ xs: "block", sm: "none" }}>
        <ListItem style={{ justifyContent: "center" }}>{image}</ListItem>
      </Box>
      <ListItem>
        {textLeft && text}

        <Box display={{ xs: "none", sm: "block" }}>
          <ListItemIcon>{image}</ListItemIcon>
        </Box>
        {!textLeft && text}
      </ListItem>
    </>
  );
};

export default ListItemMobileSnap;
