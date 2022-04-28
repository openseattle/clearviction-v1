type JobHelpResource = {
    name: string;
    url: string;
    body: string;
};

type LegalAidService = {
    name: string;
    url: string;
    serviceArea?: string;
};

const workResources: JobHelpResource[] = [
    {
        name: "Washington State WorkSource",
        url: "https://www.worksourcewa.com/",
        body: "WorkSource offers self-help programs, group programs and activities, workshops, one on one consultations, and training programs for job seekers.",
    },
    {
        name: "Employment Security Department",
        url: "http://www.esd.wa.gov/jobs-and-training",
        body: "The agency works with local WorkSource centers and other sites in addition to providing placement assistance.",
    },
    {
        name: "People for People",
        url: "http://www.pfp.org/",
        body: "Provides several resources, including employment training",
    },
    {
        name: "Goodwill",
        url: "http://www.goodwill.org/find-jobs-and-services/find-a-job/",
        body: "Offers those with criminal backgrounds pre-release services, basic skills development, employment readiness training, occupational skill training, and job placement assistance",
    },
    {
        name: "Careeronestop",
        url: "http://www.careeronestop.org/",
        body: "Sponsored by the U.S. Department of Labor, and is a resource for finding jobs and job training",
    },
    {
        name: "Craigslist",
        url: "http://seattle.craigslist.org/",
        body: "Lists many jobs in a variety of occupations",
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
export { workResources, adultLegalAid, juvenileLegalAid, proSePatronsLegalAid };
