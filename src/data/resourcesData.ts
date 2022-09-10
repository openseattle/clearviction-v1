interface JobHelpResource {
    name: string;
    url: string;
    body?: string;
}

interface LegalAidService {
    name: string;
    url: string;
    serviceArea?: string;
}
interface resourceLink {
    name: string;
    url: string;
}
const otherEduAssistance: resourceLink[] = [
    {
        name: "Adams State University Prison College Program",
        url: "http://www.adams.edu/extended_studies/undergrad/prisoncollegeprogram.php",
    },
];

const postIncarEduPrograms: resourceLink[] = [
    {
        name: "Freedom Education Project",
        url: "http://www.fepps.org/",
    },
    {
        name: "People for People",
        url: "http://www.pfp.org/pfp/index.aspx",
    },
    {
        name: "Pioneer Human Services",
        url: "http://pioneerhumanservices.com",
    },
    {
        name: "Post-Prison Education Program",
        url: "http://postprisonedu.org/",
    },
    {
        name: "The Star Project",
        url: "http://thestarproject.us/",
    },
];

const studentAid: resourceLink[] = [
    {
        name: "FAQ on Incarcerated Individuals and Eligibility for Federal Student Aid",
        url: "https://studentaid.ed.gov/sites/default/files/aid-info-for-incarcerated-individuals.pdf",
    },
    {
        name: "Free Application for Federal Student Aid (FAFSA)",
        url: "http://www.fafsa.gov",
    },
    {
        name: "Federal Pell Grants",
        url: "https://studentaid.ed.gov/sa/types/grants-scholarships/pell",
    },
    {
        name: "Federal Work-Study Programs",
        url: "https://studentaid.ed.gov/types/work-study",
    },
];

const shelterListings: resourceLink[] = [
    {
        name: "Washington Shelter List",
        url: "https://www.shelterlist.com/state/washington",
    },
    {
        name: "Catholic Community Services and Catholic Housing Services of Western Washington",
        url: "https://ccsww.org",
    },
    {
        name: "Pioneer Human Services",
        url: "https://pioneerhumanservices.org/housing",
    },
    {
        name: "Social Serve",
        url: "https://www.socialserve.com/tenant/WA/index.html?ch=KCHA",
    },
];

const housingAdvisory: resourceLink[] = [
    {
        name: "Compass Housing Alliance",
        url: "https://www.compasshousingalliance.org",
    },
    {
        name: "The STAR Project",
        url: "https://www.thestarproject.us/",
    },
];

const jobBoards: JobHelpResource[] = [
    {
        name: "Careeronestop",
        url: "https://www.careeronestop.org",
    },
    {
        name: "WorkforceWA",
        url: "https://www.worksourcewa.com",
    },
    {
        name: "Goodwill",
        url: "https://www.goodwill.org/jobs-training/find-a-job/",
    },
    {
        name: "People for People",
        url: "https://mypfp.org/about-us/careers/",
    },
];

const professionalTraining: JobHelpResource[] = [
    {
        name: "People for People",
        url: "https://mypfp.org/services/employment-training/",
    },
    {
        name: "Pioneer Human Services",
        url: "https://pioneerhumanservices.org/job-skills",
    },
    {
        name: "Evergreen Goodwill",
        url: "https://evergreengoodwill.org/job-training-and-education",
    },
];

const adultLegalAid: LegalAidService[] = [
    {
        name: "Center for Justice",
        url: "https://serve.gonzaga.edu/agency/detail/?agency_id=101214",
        serviceArea: "Spokane County",
    },
    {
        name: "Clark County Volunteer Lawyers Program (CCVLP)",
        url: "https://ccvlp.org/",
        serviceArea: "Clark County",
    },
    {
        name: "Cowlitz-Wahkiakum Legal Aid",
        url: "http://cwlap.org/",
        serviceArea: "Cowlitz County, WahkiaKum County",
    },
    {
        name: "Northwest Justice Project",
        url: "https://nwjustice.org/get-legal-help",
        serviceArea: "Statewide",
    },
    {
        name: "The Records Project",
        url: "https://www.kcba.org/For-the-Public/Free-Legal-Assistance/The-Records-Project",
        serviceArea: "King County",
    },
];

const juvenileLegalAid: LegalAidService[] = [
    {
        name: "TeamChild",
        url: "https://teamchild.org/record-sealing/",
        serviceArea: "Statewide",
    },
    {
        name: "Center for Children & Youth Justice (CCYJ)",
        url: "https://ccyj.org/our-work/empowering-foster-homeless-youth/",
        serviceArea: "Brenton County, Franklin County, King County, Walla Walla County",
    },
];

const proSePatronsLegalAid: LegalAidService[] = [
    {
        name: "Public Law Library of King County Legal Clinics (KCLL)",
        url: "https://kcll.org/contact-us/",
        serviceArea: "King County",
    },
    {
        name: "Walk-In Clinic",
        url: "https://www.kcba.org/For-Lawyers/Pro-Bono-Services/YLD-Law-Library-Walk-in-Clinic",
        serviceArea: "King County",
    },
    {
        name: "King County Bar",
        url: "http://www.kcba.org/For-the-Public/Free-Legal-Assistance/Neighborhood-Legal-Clinics",
        serviceArea: "King County",
    },
    {
        name: "Open Door Legal Services",
        url: "https://www.ugm.org/what-we-do/stabilization/legal-services/#",
        serviceArea: "Statewide",
    },
];
export {
    jobBoards,
    professionalTraining,
    adultLegalAid,
    juvenileLegalAid,
    proSePatronsLegalAid,
    housingAdvisory,
    shelterListings,
    studentAid,
    postIncarEduPrograms,
    otherEduAssistance
};
