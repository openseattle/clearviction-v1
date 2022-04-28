import { Container, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { useResourcesStyles } from "../../Styles/useResourcesStyles";
import { ExternalLink } from "../../ui-kit/ExternalLink";

const help = [
    {
        url: "http://www.adams.edu/extended_studies/undergrad/prisoncollegeprogram.php",
        linkText: "Adams State University Prison College Program:",
        text: "Provides university-level correspondence courses to people in prisons all over the US. It offers undergraduate degrees of all kinds, as well as a Master of Business Administration degree.",
    },
    {
        url: "https://bigfuture.collegeboard.org/scholarship-search",
        linkText: "College Board Scholarship Search:",
        text: "The College Board is a non-profit organization that works to connect students to college success and opportunity. Its scholarship search covers over 2,000 programs. By entering information about yourself, your financial situation and what kinds of classes you are interested in, the system will show you scholarships that apply to you. ",
    },
    {
        url: "http://www.fepps.org/",
        linkText: "Freedom Education Project:",
        text: "Their mission is to provide a rigorous college program to incarcerated women in Washington and create pathways to higher education after women are released from prison.",
    },
    {
        url: "http://www.pfp.org/pfp/index.aspx",
        linkText: "People for People:",
        text: "Non-profit organization that provides career counseling, training, tuition assistance, job placement assistance, and follow up career counseling. To be eligible for the adult program, you must be 18 years of age or older and low-income. If you are a male born after December 31, 1959, you must also be registered for Selective Service. ",
    },
    {
        url: "http://pioneerhumanservices.com",
        linkText: "Pioneer Human Services:",
        text: "Contracts with the Department of Corrections and the Federal Bureau of Prisons to offer reentry programs and work release facilities. ",
    },
    {
        url: "http://postprisonedu.org/",
        linkText: "Post-Prison Education Program:",
        text: "Provides access to higher education. Imprisoned and formerly imprisoned people are offered the tools and human support they need to find gainful, meaningful employment, and break free from cycles of hopelessness, poverty, and imprisonment and become leaders for change. ",
    },
    {
        url: "http://seattlegoodwill.org/job-training-and-education/programs-and-classes",
        linkText: "Seattle Goodwil:",
        text: "10 locations throughout the Puget Sound region that offer a variety of free training and education programs for disadvantaged and low-income individuals. ",
    },
    {
        url: "http://thestarproject.us/",
        linkText: "The STAR Project:",
        text: "Works closely with vocational and academic programs at Walla Walla Community College. STAR partners with Washington State Penitentiary and WWCC in order to assist with uninterrupted educational plans, bridging the gap between exiting incarceration and continuing higher education. ",
    },
    {
        url: "http://www.universitybeyondbars.org/",
        linkText: "University Beyond Bars:",
        text: "Provides college and university education to people in prison in Washington State. It offers Associate degree programs, as well as other classes and lectures. Participating in a University Beyond Bars program is voluntary and you will not be turned away due to your sentence. ",
    },
];

const EducationHelp = () => {
    const classes = useResourcesStyles();
    return (
        <Container className={classes.regularContainer} maxWidth="md">
            <Typography className={classes.colorfulHeadingStyle} variant="h3" align="center">
                Other resources to help you find educational assistance
            </Typography>
            <List>
                {help.map((helpItem, idx) => (
                    <ListItem key={idx}>
                        <ListItemText
                            primary={<ExternalLink href={helpItem.url}>{helpItem.linkText}</ExternalLink>}
                            secondary={helpItem.text}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default EducationHelp;
