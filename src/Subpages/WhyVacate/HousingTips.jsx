import {
    AttachFileOutlined,
    MoveToInboxOutlined,
    MonetizationOnOutlined,
    NoSimOutlined,
    BorderColorOutlined,
    DescriptionOutlined
} from "@material-ui/icons";
import {
    Box,
    Grid,
    Typography,
    Container,
    List,
    ListItem,
    ListItemIcon,
} from "@material-ui/core";
import { WhyVacateHousingStyles } from "../../Styles/WhyVacateHousingStyles";

export const HousingTips = () => {
    const classes = WhyVacateHousingStyles();
    return (
        <Box className={classes.ourMission}>
        <Container
          style={{
            paddingTop: "5rem",
            paddingBottom: "5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography className={classes.title} variant="h3">
              Tips for applying to a private landlord if you have a conviction
            </Typography>
            
            <Grid item sm={12} md={12}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DescriptionOutlined className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Grid container justifyContent="left" alignItems="left">
                    <Typography variant="h4">Secure character references</Typography>
                    <Typography variant="subtitle1">
                      Get as many positive recommendations as you can from anyone who will vouch for you. This includes your family, former employers, or even your rehab facility.
                    </Typography>
                  </Grid>
            
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <MonetizationOnOutlined className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Grid container justifyContent="left" alignItems="left">
                    <Typography variant="h4">Offer a higher security deposit</Typography>
                    <Typography variant="subtitle1">
                      This will let your landlord know that you are willing to go above and beyond to receive, and hold on to, a second chance.
                    </Typography>
                  </Grid>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MoveToInboxOutlined className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Grid container justifyContent="left" alignItems="left">
                    <Typography variant="h4">Provide bank statements and pay stubs</Typography>
                    <Typography variant="subtitle1">
                      To show that you have the money to pay for both your rent and higher security deposit, you’ll want to provide bank statements showing a steady balance.
                    </Typography>
                  </Grid>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NoSimOutlined className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Grid container justifyContent="left" alignItems="left">
                    <Typography variant="h4">Don’t apply for a loan before renting</Typography>
                    <Typography variant="subtitle1">
                      Landlords are going to be looking closely at your debt to income ratio. To calculate this, they will add up the cost of rent, along with any other debts you have found during a credit check. Once this number is calculated, it is divided by your annual gross income. Landlords are looking for a DTI of 35 percent or lower.
                    </Typography>
                  </Grid>
            
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <BorderColorOutlined className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Grid container justifyContent="left" alignItems="left">
                    <Typography variant="h4">Write a personal letter</Typography>
                    <Typography variant="subtitle1">
                      Write a letter from the heart, showing your remorse and explaining what kind of person you are today. It could go a long way towards having your application accepted by creating a connection with your landlord and offering a new perspective.
                    </Typography>
                  </Grid>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AttachFileOutlined className={classes.theProblemIcon} />
                  </ListItemIcon>
                  <Grid container justifyContent="left" alignItems="left">
                    <Typography variant="h4">Provide the “University of Minnesota Study” (if applicable)</Typography>
                    <Typography variant="subtitle1">
                      In the 1960s, the University of Minnesota conducted a study on criminal activity concluding that if you’ve committed a crime, but don’t commit another crime for at least seven years, you are aren’t any more likely to commit a crime as someone who had never been convicted in the first place.
                    </Typography>
                    <Typography variant="subtitle1">
                      If you have been a member of everyday society for seven years without committing a crime, you can provide this study, which the Department of Housing and Urban Development is pointing to in an effort to have landlords broaden their application standards.
                    </Typography>
                  </Grid>
                </ListItem>
              </List>
            </Grid>

          </Box>
        </Container>
      </Box>
    )
}