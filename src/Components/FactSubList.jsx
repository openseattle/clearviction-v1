import { Link, List, ListItem } from "@material-ui/core";

const FactSubList = ({ resources }) => {
    return (
        <List>
            {resources.map(resource => (
                <ListItem key={resource.name}>
                    <Link target="_blank" rel="noopener noreferrer" href={resource.url} variant="caption">
                        {resource.name}
                    </Link>
                </ListItem>
            ))}
        </List>
    );
};
export default FactSubList;
