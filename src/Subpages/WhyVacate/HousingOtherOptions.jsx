import { Box, Grid, Typography, List, Container } from "@mui/material";
import { WhyVacateHousingStyles } from "../../Styles/WhyVacateHousingStyles.ts";
import { CVPListItem } from "../../ui-kit/ListItem";

export function HousingOtherOptions() {
    const classes = WhyVacateHousingStyles();
    return (
        <Box>
            <Container
                style={{
                    paddingBottom: "5rem",
                    display: "flex",
                    justifyContent: "center",
                }}
                maxWidth="md"
            >
                <Grid container className={classes.containerStyles}>
                    <Grid item xs={12}>
                        <Typography className={classes.blackHeaderText} variant="h3" align="left">
                            Other options for those with convictions
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <List>
                            <CVPListItem
                                useBulletPoint
                                text="Find a flexible landlord. Using craigslist was often mentioned as a resource"
                            />
                            <CVPListItem
                                useBulletPoint
                                text="Stay with friends/ family at their will"
                            />
                            <CVPListItem
                                useBulletPoint
                                text="Look for townhouses, duplexes, single-family homes and trailers. Stay away from large apartment complexes"
                            />
                            <CVPListItem
                                useBulletPoint
                                text="Have someone rent for you and pay them back under the table"
                            />
                            <CVPListItem
                                useBulletPoint
                                text="Subletting from someone looking to get out of a lease"
                            />
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <List>
                            <CVPListItem useBulletPoint text="Hotels / motels" />
                            <CVPListItem useBulletPoint text="Government Referrals" />
                            <CVPListItem
                                useBulletPoint
                                text="Money Talks, pay months upfront to a private landlord"
                            />
                            <CVPListItem
                                useBulletPoint
                                text="Write letters when submitting an application"
                            />
                            <CVPListItem
                                useBulletPoint
                                text="Buy a house. Banks and lenders care about Income, credit score, how long you have been with an employer, and ability to pay back the loan"
                            />
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
