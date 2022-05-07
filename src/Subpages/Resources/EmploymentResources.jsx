import { Grid } from "@material-ui/core";
import FactExpandMoreCard from "../../Components/FactExpandMoreCard";
import FactSubList from "../../Components/FactSubList";
import { jobPortals, professionalTraining } from "../../data/resourcesData";

const employmentResourcesFacts = [
    {
        id: "erf0",
        summary: "Job Portals",
        content: <FactSubList resources={jobPortals} />,
    },
    {
        id: "erf1",
        summary: "Professional Training",
        content: <FactSubList resources={professionalTraining} />,
    },
];
const EmploymentResources = () => {
    return (
        <>
            <Grid container>
                {employmentResourcesFacts.map(fact => (
                    <Grid key={fact.id} item xs={12} sm={6} md={4}>
                        <FactExpandMoreCard summary={fact.summary} content={fact.content} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default EmploymentResources;
