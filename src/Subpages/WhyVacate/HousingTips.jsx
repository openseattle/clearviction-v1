import {
    AttachFileOutlined,
    MoveToInboxOutlined,
    MonetizationOnOutlined,
    NoSimOutlined,
    BorderColorOutlined,
    DescriptionOutlined,
} from "@mui/icons-material";
import { Box, Grid, Typography, Container, List } from "@mui/material";
import { WhyVacateHousingStyles } from "../../Styles/WhyVacateHousingStyles.ts";
import { IconWithHeaderAndText } from "./IconWithHeaderAndText";

export const HousingTips = () => {
    const classes = WhyVacateHousingStyles();
    return (
        <Box className={classes.lightBlueSectionBackground}>
            <Container
                style={{
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    display: "flex",
                    justifyContent: "center",
                }}
                maxWidth="md"
            >
                <Box>
                    <Typography className={classes.title} variant="h3">
                        Tips for applying to a private landlord if you have a conviction
                    </Typography>
                    <Grid item sm={12} md={12}>
                        <List>
                            <IconWithHeaderAndText
                                icon={DescriptionOutlined}
                                header="Secure character references"
                                text={[
                                    "Get as many positive recommendations as you can from anyone who will vouch for you. This includes your family, former employers, or even your rehab facility.",
                                ]}
                            />
                            <IconWithHeaderAndText
                                icon={MonetizationOnOutlined}
                                header="Offer a higher security deposit"
                                text={[
                                    "This will let your landlord know that you are willing to go above and beyond to receive, and hold on to, a second chance.",
                                ]}
                            />
                            <IconWithHeaderAndText
                                icon={MoveToInboxOutlined}
                                header="Provide bank statements and pay stubs"
                                text={[
                                    "To show that you have the money to pay for both your rent and higher security deposit, you’ll want to provide bank statements showing a steady balance.",
                                ]}
                            />
                            <IconWithHeaderAndText
                                icon={NoSimOutlined}
                                header="Don’t apply for a loan before renting"
                                text={[
                                    "Landlords are going to be looking closely at your debt to income ratio. To calculate this, they will add up the cost of rent, along with any other debts you have found during a credit check. Once this number is calculated, it is divided by your annual gross income. Landlords are looking for a DTI of 35 percent or lower.",
                                ]}
                            />
                            <IconWithHeaderAndText
                                icon={BorderColorOutlined}
                                header="Write a personal letter"
                                text={[
                                    "Write a letter from the heart, showing your remorse and explaining what kind of person you are today. It could go a long way towards having your application accepted by creating a connection with your landlord and offering a new perspective.",
                                ]}
                            />
                            <IconWithHeaderAndText
                                icon={AttachFileOutlined}
                                header="Provide the “University of Minnesota Study” (if applicable)"
                                text={[
                                    "In the 1960s, the University of Minnesota conducted a study on criminal activity concluding that if you’ve committed a crime, but don’t commit another crime for at least seven years, you aren’t any more likely to commit a crime as someone who had never been convicted in the first place.",
                                    "If you have been a member of everyday society for seven years without committing a crime, you can provide this study, which the Department of Housing and Urban Development is pointing to in an effort to have landlords broaden their application standards.",
                                ]}
                            />
                        </List>
                    </Grid>
                    <Typography className={classes.contentText}>
                        If you live in Seattle, you have more protection: under a new law, landlords may not require
                        that you talk about your criminal history at all, and may not reject your application for
                        housing because of your adult criminal history unless they think there is a reason to believe
                        you will be a danger to other tenants or to the property
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
