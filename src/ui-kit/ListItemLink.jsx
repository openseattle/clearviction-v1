import { ListItem } from "@mui/material";

// eslint-disable-next-line import/prefer-default-export
export const ListItemLink = props => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ListItem button component="a" {...props} />;
};
