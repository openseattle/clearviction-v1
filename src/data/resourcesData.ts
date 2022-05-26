type JobHelpResource = {
    name: string;
    url: string;
    body?: string;
};

type LegalAidService = {
    name: string;
    url: string;
    serviceArea?: string;
};
type resourceLink = {
    name: string;
    url: string;
};
const otherEduAssistance: resourceLink[] = [
    {
        name: "Adams State University Prison College Program",
        url: "http://www.adams.edu/extended_studies/undergrad/prisoncollegeprogram.php",
    },
    {
        name: "College Board Scholarship Search",
        url: "https://bigfuture.collegeboard.org/pay-for-college/scholarship-search",
    },
    {
        name: "University Beyond Bars",
        url: "http://www.universitybeyondbars.org/",
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
        name: "HUD Resource",
        url: "https://resources.hud.gov/#",
    },
    {
        name: "Social Serve",
        url: "https://www.socialserve.com/tenant/WA/index.html?ch=KCHA",
    },
    {
        name: "Aptfinder",
        url: "http://aptfinder.org",
    },
    {
        name: "Affordable Housing",
        url: "https://affordablehousingonline.com/housing-search/Washington",
    },
];

const housingAdvisory: resourceLink[] = [
    {
        name: "HUD Exchange",
        url: "https://www.hudexchange.info/housing-and-homeless-assistance/homeless-help/?csrf_token=A027E19F-A4E2-45C1-863E37BCF1E8E003&params=%7B%22limit%22%3A20%2C%22newSearch%22%3Atrue%2C%22homelessPOCsOnly%22%3Atrue%2C%22state%22%3A%22WA%22%7D##granteeSearch",
    },
    {
        name: "Compass Housing Alliance",
        url: "https://www.compasshousingalliance.org",
    },
    {
        name: "The STAR Project",
        url: "https://www.thestarproject.us/",
    },
    {
        name: "Transgender Law Center (2016)",
        url: "hhttp://transgenderlawcenter.org/wp-content/uploads/2016/02/03.09.2016-Model-Homeless-Shelter-TG-Policy-single-pages.pdf",
    },
];

const jobPortals: JobHelpResource[] = [
    {
        name: "Employment Security Department Washington State",
        url: "https://www.esd.wa.gov/jobs-and-training",
    },
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
        name: "Craigslist",
        url: "http://seattle.craigslist.org/",
    },
];

const professionalTraining: JobHelpResource[] = [
    {
        name: "Washington State Department of Labor and Industries Apprenticeship",
        url: "https://www.lni.wa.gov/licensing-permits/apprenticeship/become-an-apprentice",
    },
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
    jobPortals,
    professionalTraining,
    adultLegalAid,
    juvenileLegalAid,
    proSePatronsLegalAid,
    housingAdvisory,
    shelterListings,
    studentAid,
    postIncarEduPrograms,
    otherEduAssistance,
};
