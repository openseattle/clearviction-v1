import {
    AccessibilityOutlined,
    ShoppingCartOutlined,
    RestaurantOutlined,
    ChildFriendlyOutlined,
    HomeWorkOutlined,
    LocalPharmacyOutlined,
    AttachMoneyOutlined,
} from "@mui/icons-material";
import { Box, Grid, Typography, Container, List } from "@mui/material";
import { WhyVacateHousingStyles } from "../../Styles/WhyVacateHousingStyles";
import { IconWithHeaderAndText } from "./IconWithHeaderAndText";

export const GovPrograms = () => {
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
                        Acessible programs for those with convictions
                    </Typography>
                    <Typography className={classes.title} variant="h6">
                        Visit Washington Connection to find out what benefits you may be eligible for. You can also use
                        the Benefits Eligibility Screening Tool (BEST) to find out if you are eligible for benefits
                        through the Social Security Administration.
                    </Typography>
                    <Grid item sm={12} md={12}>
                        <List>
                            <IconWithHeaderAndText
                                icon={AccessibilityOutlined}
                                header={"Supplemental Security Income (SSI)"}
                                text={[
                                    "Pays monthly benefits to people with limited income and resources who are also disabled, blind, or 65 years of age or older.",
                                ]}
                            />
                            <IconWithHeaderAndText
                                icon={LocalPharmacyOutlined}
                                header={"Social Security Disability Insurance (SSDI)"} // add link
                                text={[
                                    "Federal insurance program that protects workers who become disabled and cannot work for a year or more. You may be ineligible to receive SSDI if your disability arose while you were committing a felony or your disability arose while you were imprisoned in jail. For further information on eligibility, how being incarcerated affects SSDI, and how violating your probation affects SSDI visit this site.",
                                ]}
                            />
                            <IconWithHeaderAndText
                                icon={ShoppingCartOutlined}
                                header={"The Aged, Blind, and Disabled (ABD)"} // add link
                                text={[
                                    "State-run program that provides cash assistance to certain low-income adults who are 65 or older, blind, or who meet the SSI disability criteria. You can apply for ABD either online through Washington Connection, or by filling out this application.",
                                ]}
                            />
                            <IconWithHeaderAndText
                                icon={ChildFriendlyOutlined}
                                header={"The Women, Infants and Children Nutrition Program (WIC)"}
                                text={[
                                    "WIC is primarily for pregnant women, new and breastfeeding moms, and children under five. Dads, grandparents, and other caregivers of children under five may also sign the children up for WIC.",
                                ]}
                            />
                            <IconWithHeaderAndText
                                icon={RestaurantOutlined}
                                header={"The Emergency Food Assistance Program (TEFAP/EFAP)"}
                                text={[
                                    "A program that helps supplement the diets of low-income Americans, including the elderly, by providing them with emergency nutrition assistance at no cost. For more information and to find where you can receive local TEFAP assistance visit.",
                                ]}
                            />
                            <IconWithHeaderAndText
                                icon={AttachMoneyOutlined}
                                header={"The Commodity Supplemental Food Program (CSFP)"} // add link
                                text={[
                                    "CSFP works to improve the health of people who are at least 60 years of age by supplementing their diets with nutritious USDA Foods. Must have a monthly income of less than 130% of the federal poverty level. Here’s a complete table of qualifying incomes.",
                                ]}
                            />
                            <IconWithHeaderAndText
                                icon={HomeWorkOutlined}
                                header={"The Housing and Essential Needs (HEN)"} // add link
                                text={[
                                    "HEN provides access to essential needs items and potential housing assistance for low-income adults who are unable to work for at least 90 days due to a physical or mental incapacity and have income and resources below a certain level. You can also refer to this list of all providers organized by county.",
                                ]}
                            />
                        </List>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};
