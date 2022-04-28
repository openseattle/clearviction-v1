import { Container } from "@material-ui/core";
import { Route } from "react-router-dom";
import HeroPanel from "../../Components/HeroPanel";
import NavCardGroup from "../../Components/NavCardGroup";
import AssistanceEducation from "./AssistanceEducation";
import AssistanceEmployment from "./AssistanceEmployment";
import AssistanceHousing from "./AssistanceHousing";

const subPages = [
    {
        name: "Housing",
        link: "/resources/assistance/housing",
        desc: "Emergency shelters and public housing associations",
    },
    {
        name: "Employment",
        link: "/resources/assistance/employment",
        desc: "Laws that protect you and sources of employment",
    },
    {
        name: "Education",
        link: "/resources/assistance/education",
        desc: "Educational programs and financial assistance options",
    },
];

const AssistancePage = () => {
    return (
        <>
            <Container>
                <HeroPanel
                    title={"Resources"}
                    subtitle={
                        "Re-entry programs to help you find housing, get a new job, and further your education after a felony conviction."
                    }
                />
                <NavCardGroup subPages={subPages} xs={12} sm={12} md={4} />
            </Container>
            <Route exact path="/resources/assistance/housing">
                <AssistanceHousing />
            </Route>
            <Route exact path="/resources/assistance/employment">
                <AssistanceEmployment />
            </Route>
            <Route exact path="/resources/assistance/education">
                <AssistanceEducation />
            </Route>
        </>
    );
};

export default AssistancePage;
