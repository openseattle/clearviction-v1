import {
    Container,
    Typography,
    Box,
    List,
} from "@material-ui/core";
import { WhyVacateHousingStyles } from "../../Styles/WhyVacateHousingStyles";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import edu from "../../Assets/Graduation_TwoColor1.svg";
import lic from "../../Assets/Career_TwoColor4.svg";

export const EducationBarriers = () => {
    const classes = WhyVacateHousingStyles();
    return (
        <Box className={classes.roots}>
        <Container maxWidth="lg" className={classes.rootsContainer}>
          <List>
            <ListItemMobileSnap
                edu
                image={
                    <Box
                    component="img"
                    src={lic}
                    className={classes.rootsImage}
                    />
                }
                header={"Occupational Licenses"}
                text={
                    <Typography className={classes.rootsBodyText} variant="body1">
                        Some states’ laws contain an automatic disqualification 
                        prohibiting a person with a felony conviction from obtaining 
                        an occupational license, regardless of whether the offense 
                        is directly related to the practice of the occupation or 
                        poses a substantive risk to public safety.
                    </Typography>
                }
            />
            <ListItemMobileSnap
                edu
                image={
                    <Box
                    component="img"
                    src={edu}
                    className={classes.rootsImage}
                    />
                }
                header={"College Acceptance"}
                text={
                    <Typography className={classes.rootsBodyText} variant="body1">
                    Colleges run background checks on applicants. Whether you 
                    will be accepted depends on the kind of check they do and 
                    the type and time of crime. With competitive admissions, 
                    some schools may not accept you, but if you choose a school 
                    with high acceptance rates and write a great essay, your 
                    chances of going to college are pretty strong.
                    </Typography>
                }
                textLeft
            />
          </List>
        </Container>
      </Box>
    )
}