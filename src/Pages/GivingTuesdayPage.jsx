import { Container, Typography } from "@mui/material";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";

const GivingTuesdayPage = () => {
    useDocumentTitle("Giving Tuesday - ");

    return (
        <Container>
            <Typography variant="h2">GivingTuesday</Typography>
        </Container>
    );
};

export default GivingTuesdayPage;
