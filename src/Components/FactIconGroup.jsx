import { Grid } from "@mui/material";
import Fact from "./Fact";

function FactIconGroup({ facts }) {
    return (
        <Grid container>
            {facts.map(fact => (
                <Grid item key={fact.id} xs={12} sm={4} md={4} lg={4}>
                    <Fact icon={fact.icon} text={fact.text} />
                </Grid>
            ))}
        </Grid>
    );
}

export default FactIconGroup;
