import { Box, Container, List, ListItem, Typography } from "@material-ui/core";
import AlternativeAccord from "../../Components/AlternativeAccord";
import TabPanelGroup from "../../Components/TabPanelGroup";
import { useResourcesStyles } from "../../Styles/useResourcesStyles";
import BulletedListMui from "../../ui-kit/BulletedListMui";
import { ExternalLink } from "../../ui-kit/ExternalLink";

const LFODetails = (
  <Box>
    <Typography>
      You may be eligible for financial assistance of fees, fines, or
      restitution for a misdemeanor or felony:
    </Typography>
    <Box padding={3}>
      <BulletedListMui>
        <li>
          <ExternalLink href="https://nwjustice.org/clear-hotline">
            CLEAR hotline
          </ExternalLink>{" "}
          - refer you to legal organizations
        </li>
        <li>
          <ExternalLink href="https://columbialegal.org/wp-content/uploads/2019/10/CLS-Re-Entry-Clinic-Brochure.pdf">
            Re-Entry Clinic
          </ExternalLink>{" "}
          - a joint project of Columbia Legal Services and FareStart, focusing
          on legal issues related to LFO's
        </li>
        <li>
          Contact us at contact@clearviction.org and we will get back to you
          within 24 hours
        </li>
      </BulletedListMui>
    </Box>

    <Typography>
      If you want more info about your rights concerning LFOs, consult the
      website of{" "}
      <ExternalLink href="https://www.washingtonlawhelp.org/issues/criminal/legal-financial-obligations-restitution-reduc-1?location=Yakima%20County">
        WashingtonLawHelp
      </ExternalLink>
      .
    </Typography>
  </Box>
);

const CourtFeesDetails = (
  <div>
    <Typography component="ol">
      <li>
        Ask the Court Clerk which court will hear your motion and which fees
        will have to be paid. Even if there is no hearing, there might be an Ex
        Parte fee for an agreed order (refer to{" "}
        <ExternalLink href="https://www.courts.wa.gov/court_dir/?fa=court_dir.county">
          directory of County Clerk’s offices
        </ExternalLink>
        )
      </li>
      <li>
        If the Clerk believes a fee applies, ask them to check with their
        supervisor and/or the court's accounting department.
      </li>
    </Typography>
    <Box paddingTop={3}/>
    <Typography>
      If you do not have the financial ability to pay the fees, you might be
      eligible for relief:
    </Typography>
    <Box padding={3}>
    <BulletedListMui>
      <li>
        Use this{" "}
        <ExternalLink href="https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/3928A184-D6E5-9324-4FB9-495A060A017B/3204en_filing-motion-for-fee-waiver.pdf">
          packet from WashingtonLawHelp
        </ExternalLink>{" "}
        to find out if you are eligible to waive your fees (p. 1-2). It also
        includes the instructions to ask for a fee waiver (p. 4-9) and all
        necessary forms (p. 10-14). If you have trouble filling out the
        documents, use this website created by Northwest Justice{" "}
        <ExternalLink href="https://lawhelpinteractive.org/Interview/GenerateInterview/7063/engine">
          to help fill out the documents for free
        </ExternalLink>
        .
      </li>
      <li>
        You can also contact us at contact@cvp.com because we might be able to
        assist you.
      </li>
    </BulletedListMui>
    </Box>
  </div>
);

const financialAidFAQ = [
  {
    summary: "Legal Financial Obligations",
    details: LFODetails,
  },
  {
    summary: "Court Fees",
    details: CourtFeesDetails,
  },
];

const legalHotlineDetails = (
  <div>
    <Typography variant="body1">
      Many pro bono services are only available after being refered by{" "}
      <ExternalLink href="https://nwjustice.org/clear-hotline">
        CLEAR
      </ExternalLink>
      , a toll-free legal hotline:
    </Typography>
    <Box padding={3}>
    <BulletedListMui>
      <li>
        Outside of King County: call 1-888-201-1014 (weekdays 9.15am - 12.15pm).
      </li>
      <li>In King County: call 2-1-1 (weekdays 8am - 6pm). </li>
    </BulletedListMui>
    </Box>
    <Typography>
      You can also apply online at{" "}
      <ExternalLink href="https://nwjustice.org/apply-online">
        CLEAR*Online
      </ExternalLink>
      .
    </Typography>
    <Typography>
      Listed below are attorneys and clinics you can contact directly.
    </Typography>
  </div>
);

const adultDetails = (
  <List>
    <ListItem>
      <ExternalLink href="https://serve.gonzaga.edu/agency/detail/?agency_id=101214">
        Center for Justice (Spokane County)
      </ExternalLink>
    </ListItem>
    <ListItem>
      <ExternalLink href="https://ccvlp.org/">
        Clark County Volunteer Lawyers Program (CCVLP) (Clark County)
      </ExternalLink>
    </ListItem>
    <ListItem>
      <ExternalLink href="http://cwlap.org/">
        Cowlitz-Wahkiakum Legal Aid (Cowlitz & Wahkiakum County)
      </ExternalLink>
    </ListItem>
    <ListItem>
      <ExternalLink href="https://nwjustice.org/get-legal-help">
        Northwest Justice Project (Statewide - 15 offices)
      </ExternalLink>
    </ListItem>
    <ListItem>
      <ExternalLink href="https://www.kcba.org/For-the-Public/Free-Legal-Assistance/The-Records-Project">
        The Records Project (if conviction is in King County)
      </ExternalLink>
    </ListItem>
  </List>
);

const juvenilesDetails = (
  <List>
    <ListItem>
      <ExternalLink href="https://teamchild.org/record-sealing/">
        TeamChild (Statewide - 4 offices)
      </ExternalLink>
    </ListItem>
    <ListItem>
      <ExternalLink href="https://ccyj.org/our-work/empowering-foster-homeless-youth/">
        Center for Children & Youth Justice (CCYJ) (Brenton, Franklin, King &
        Walla Walla County)
      </ExternalLink>
    </ListItem>
  </List>
);

const patronsDetails = (
  <List>
    <ListItem>
      <ExternalLink href="https://kcll.org/contact-us/">
        Public Law Library of King County Legal Clinics (KCLL) (King County)
      </ExternalLink>
    </ListItem>
    <ListItem>
      <ExternalLink href="https://www.kcba.org/For-Lawyers/Pro-Bono-Services/YLD-Law-Library-Walk-in-Clinic">
        Walk-In Clinic (WIC) (King County)
      </ExternalLink>
    </ListItem>
    <ListItem>
      <ExternalLink href="http://www.kcba.org/For-the-Public/Free-Legal-Assistance/Neighborhood-Legal-Clinics">
        King County Bar (King County)
      </ExternalLink>
    </ListItem>
    <ListItem>
      <ExternalLink href="https://www.ugm.org/what-we-do/stabilization/legal-services/#">
        Open Door Legal Services (Seattle, Bellevue & Everett)
      </ExternalLink>
    </ListItem>
  </List>
);

const legalAidFAQ = [
  {
    summary: "Legal hotline & Pro bono referral",
    details: legalHotlineDetails,
  },
  {
    summary: "Assistance for Adults",
    details: adultDetails,
  },
  {
    summary: "Assistance for Juveniles",
    details: juvenilesDetails,
  },
  {
    summary: "Pro Se Patrons",
    details: patronsDetails,
  },
];

const scheduleHearingTabPanelGroup = [
  {
    index: 0,
    label: "Financial Aid",
    content: (
      <AlternativeAccord
        sectionHeading={"LFOs & Court Fees"}
        faqs={financialAidFAQ}
      />
    ),
  },
  {
    index: 1,
    label: "Legal Aid",
    content: (
      <AlternativeAccord
        sectionHeading={"For low-income applicants:"}
        faqs={legalAidFAQ}
      />
    ),
  },
];
export const ScheduleHearing = () => {
  const classes = useResourcesStyles();
  return (
    <Container maxWidth={"md"}>
      <Typography className={classes.headingStyle} variant="h2">
        Step 4: Schedule a Hearing
      </Typography>
      <Typography className={classes.contentTextStyle} variant="body1">
        Last but not least, schedule a hearing with a judge!
      </Typography>
      <TabPanelGroup tabs={scheduleHearingTabPanelGroup} />
    </Container>
  );
};
