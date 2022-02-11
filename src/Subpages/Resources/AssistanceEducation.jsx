import { Box, Container, Grid, Typography } from "@material-ui/core";
import { useResourcesStyles } from "../../Styles/useResourcesStyles";
import ListItemMobileSnap from "../../ui-kit/ListItemMobileSnap";
import { IconWithHeaderAndText } from "../WhyVacate/IconWithHeaderAndText";
import {
  LocalAtmOutlined,
  CreateOutlined,
  AssignmentIndOutlined,
} from "@material-ui/icons";
import wallet from "../../Assets/wallet.svg";
import TeamSuccess from "../../Assets/team_success.svg";
import Achievement from "../../Assets/achievement.svg";
import { TextWithImage } from "../WhyVacate/TextWithImage";
import EducationHelp from "./EducationHelp";
import FedAidRestrictions from "./FedAidRestrictions";
import { ExternalLink } from "../../ui-kit/ExternalLink";

const AssistanceEducation = () => {
  const classes = useResourcesStyles();
  return (
    <>
      <Container className={classes.regularContainer} maxWidth="md">
        <Typography className={classes.headingStyle} variant="h2" >
          Education available post-incarceration
        </Typography>
        <Typography className={classes.contentTextStyle} variant="body1">
          Conviction history should not affect educational opportunities after
          jail or prison, yet many college and universities will collect
          background information and have full discretion over the admissions
          process.
        </Typography>
        <Typography className={classes.contentTextStyle} variant="body1">
          Writing a letter of explanation, gathering refrences, and providing
          any further aditional information may help in the application process.
        </Typography>
        <Typography className={classes.contentTextStyle} variant="body1">
          You should never lie on you application. It could result in voiding
          your application or expulsion if admitted prior to the school finding
          out.
        </Typography>
      </Container>
      <Box className={classes.lightBlueBackGround}>
        <Container maxWidth="lg">
          <ListItemMobileSnap
            textLeft
            text={
              <div>
                <Typography className={classes.headingStyle} variant="h2">
                  Financial student aid
                </Typography>
                <Typography>
                  For the most part, restrictions on recieving financial aid are
                  removed once released. As long as the conditions of your
                  sentence are being met, you will most likey be able to benefit
                  from federal student aid, as well as a few grants and
                  scholarships.
                </Typography>
              </div>
            }
            image={<Box component="img" src={wallet} width={"100%"} />}
          />
        </Container>
      </Box>
      <Container className={classes.regularContainer} maxWidth="md">
        <Typography className={classes.headingStyle} variant="h2">
          Federal Student Aid
        </Typography>
        <Typography className={classes.contentTextStyle} variant="body1">
          The U.S. Department of Education's office of Federal Student Aid
          provides more than $120 billion in financial aid to help pay for
          college or career school each year. Below are ones that apply to the
          former incarcerated.
          <br />
          <br />
          If you want to know more, check out the Federal Government’s{" "}
          <ExternalLink href="https://studentaid.ed.gov/sites/default/files/aid-info-for-incarcerated-individuals.pdf">
            FAQ on Incarcerated Individuals and Eligibility for Federal Student
            Aid.
          </ExternalLink>
        </Typography>
        <Box >
          <IconWithHeaderAndText
            icon={LocalAtmOutlined}
            header={
              <ExternalLink href="https://studentaid.gov/h/apply-for-aid/fafsa">
                Free Application for Federal Student Aid (FAFSA)
              </ExternalLink>
            }
            text={[
              "The main Federal Student Aid, necessary to apply for further. May be completed online at FAFSA’s website.",
            ]}
          />
          <IconWithHeaderAndText
            icon={CreateOutlined}
            header={
              <ExternalLink href="https://studentaid.ed.gov/sa/types/grants-scholarships/pell">
                Federal Pell Grants
              </ExternalLink>
            }
            text={[
              "Federal Pell Grants are awarded to undergraduate students who display exceptional financial need and have not earned a bachelor's, graduate, or professional degree.",
            ]}
          />
          <IconWithHeaderAndText
            icon={AssignmentIndOutlined}
            header={
              <ExternalLink href="https://studentaid.ed.gov/types/work-study">
                Federal Work-Study Programs
              </ExternalLink>
            }
            text={[
              `This program provides part-time jobs for undergraduate and 
              graduate students with financial need, allowing them to earn 
              money to help pay education expenses.You apply through your school, 
              you will be paid by your school, and you will work either at your school 
              or an organization that partners with your school. `,
            ]}
          />
        </Box>
      </Container>
      <FedAidRestrictions />
      <Box className={classes.lightBlueBackGround}>
        <Container maxWidth="md">
          <Typography className={classes.headingStyle} variant="h2">
            Student Loans
          </Typography>
          <Grid container>
            <TextWithImage
              cols={6}
              img={TeamSuccess}
              header={"Federal"}
              text={[
                `Funded by the federal government and come with many benefits that aren’t 
                typically offered with private loans, such as:`,
                "No credit checks",
                "Fixed interest rates",
                "Subsidized loans",
                "Ability to postpone payments",
              ]}
              altStyle
            />

            <TextWithImage
              cols={6}
              img={Achievement}
              header={"Private"}
              text={[
                "Comes from lenders such as banks, credit unions and schools. They're secure but have some disadvantages: ",
                "Price depends on credit score",
                "More expensive",
                "Variable interest rates",
                "Options vary by lender",
              ]}
              altStyle
            />
          </Grid>
        </Container>
      </Box>
      <EducationHelp />
    </>
  );
};

export default AssistanceEducation;
