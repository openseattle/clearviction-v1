import { Grid } from "@material-ui/core";
import FactExpandMoreCard from "./FactExpandMoreCard";

const FactGroup = ({ facts, }) => {
    return (
        <Grid container>
            {facts.map(fact => (
                <Grid key={fact.id} item xs={12} sm={6} md={4}>
                    <FactExpandMoreCard
                        summary={fact.summary}
                        content={fact.content}
                        ariaLabel={fact.ariaLabel}
                        contentID={fact.contentID}
                        summaryID={fact.summaryID}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default FactGroup;
