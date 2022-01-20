import {
    Box,
    Grid,
    Typography,
    List,
    Container,
} from "@material-ui/core";
import { WhyVacateHousingStyles } from "../../Styles/WhyVacateHousingStyles";
import { CVPListItem } from "../../ui-kit/ListItem";

export const EducationOccLicReq = () => {
    const classes = WhyVacateHousingStyles();
    return (
        <>
            <Box>
                <Container
                    style={{
                        paddingBottom: "5rem",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                <Grid container className={classes.containerStyles}>
                    <Grid item xs={12}>
                        <Typography
                            className={classes.blackHeaderText}
                            variant="h4"
                            align="left"
                        >
                            Occupational licensing requirements can be among the most difficult barriers faced by people with criminal records seeking to enter the workforce.
                        </Typography>
                        <Typography
                            className={classes.blackHeaderText}
                            variant="h4"
                            align="left"
                        >
                            The following factors will be considered in determining whether a criminal conviction should be grounds to deny a license:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <List>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"} text={"Find a flexible landlord. Using craigslist was often mentioned as a resource"}/>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"} text={"Stay with friends/ family at their will"}/>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"} text={"Look for townhouses, duplexes, single-family homes and trailers. Stay away from large apartment complexes"}/>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"}  text={"Have someone rent for you and pay them back under the table"}/>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"}  text={"Subletting from someone looking to get out of a lease"}/>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"}  text={"Subletting from someone looking to get out of a lease"}/>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <List>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"} text={"Find a flexible landlord. Using craigslist was often mentioned as a resource"}/>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"} text={"Stay with friends/ family at their will"}/>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"} text={"Look for townhouses, duplexes, single-family homes and trailers. Stay away from large apartment complexes"}/>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"}  text={"Have someone rent for you and pay them back under the table"}/>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"}  text={"Subletting from someone looking to get out of a lease"}/>
                            <CVPListItem useBulletPoint={false} textAlignment={"center"}  text={"Subletting from someone looking to get out of a lease"}/>
                        </List>
                    </Grid>
                </Grid>
            </Container>
          </Box>
        </>
    )
}