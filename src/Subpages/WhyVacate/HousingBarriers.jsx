import { Box, Grid } from "@mui/material";

import pha from "../../Assets/city.svg";
import supportiveHousing from "../../Assets/diversity.svg";
import privateHousing from "../../Assets/process.svg";
import transitionalHousing from "../../Assets/dream.svg";
import { TextWithImage } from "./TextWithImage";

export const HousingBarriers = () => {
    return (
        <Box>
            <Grid container spacing={1}>
                <TextWithImage
                    img={pha}
                    header="Public Housing Authorities"
                    text={[
                        "Income capped",
                        "Can’t be a registered offender",
                        "PHAs have discretion on who they decide to house",
                    ]}
                    cols={6}
                />
                <TextWithImage
                    img={privateHousing}
                    header="Private Housing"
                    text={[
                        "Landlords often deny people with criminal records",
                        "Management companies often have background checks and also deny people with criminal records",
                    ]}
                    cols={6}
                />
                <TextWithImage
                    img={supportiveHousing}
                    header="Supportive Housing"
                    text={[
                        "Funded by HUD homeless programs",
                        "Must have been residing in emergency shelter in the 90 days prior",
                    ]}
                    cols={6}
                />
                <TextWithImage
                    img={transitionalHousing}
                    header="Transitional Housing"
                    text={[
                        "Some require you have substance abuse, emotional or physical issues",
                        "May require you attend special meetings or work",
                    ]}
                    cols={6}
                />
            </Grid>
        </Box>
    );
};
