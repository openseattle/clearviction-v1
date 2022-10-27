import { Link, List, ListItem } from "@mui/material";

function FactSubList({ resources }) {
    return (
        <List>
            {resources.map(resource => (
                <ListItem key={resource.name}>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={resource.url}
                        variant="caption"
                        underline="hover"
                    >
                        {resource.name}
                    </Link>
                </ListItem>
            ))}
        </List>
    );
}
export default FactSubList;
