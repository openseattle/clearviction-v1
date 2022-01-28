type JobHelpResource ={
  name: string;
  url: string;
  body: string;
}

export const workResources: JobHelpResource[] = [
  {
    name:"Washington State WorkSource",
    url: "https://www.worksourcewa.com/",
    body: "WorkSource offers self-help programs, group programs and activities, workshops, one on one consultations, and training programs for job seekers.",
  },
  {
    name:"Employment Security Department",
    url: "http://www.esd.wa.gov/jobs-and-training",
    body: "The agency works with local WorkSource centers and other sites in addition to providing placement assistance.",
  },
  {
    name:"People for People",
    url: "http://www.pfp.org/",
    body: "Provides several resources, including employment training",
  },
  {
    name:"Goodwill",
    url: "http://www.goodwill.org/find-jobs-and-services/find-a-job/",
    body: "Offers those with criminal backgrounds pre-release services, basic skills development, employment readiness training, occupational skill training, and job placement assistance",
  },
  {
    name:"Careeronestop",
    url: "http://www.careeronestop.org/",
    body: "Sponsored by the U.S. Department of Labor, and is a resource for finding jobs and job training",
  },
  {
    name:"Craigslist",
    url: "http://seattle.craigslist.org/",
    body: "Lists many jobs in a variety of occupations",
  },
]