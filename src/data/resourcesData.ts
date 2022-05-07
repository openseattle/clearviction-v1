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
export { jobPortals, professionalTraining, adultLegalAid, juvenileLegalAid, proSePatronsLegalAid };
