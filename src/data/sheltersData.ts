type shelter = {
  name: string;
  address: string;
  city: string;
  phone: string;
};

type housingFinderResource = {
  name: string;
  url: string;
  desc: string;
  address: string;
  phone: string;
  phone2?: string;
  tags2Phones?: string[];
  email: string;
};

type additionalLinksType = {
  name: string;
  url: string;
};

const forMen: shelter[] = [
  {
    name: "Union Gospel Mission Men’s Shelter",
    address: "318 2nd Ave Extension South,",
    city: "Seattle, WA 98104",
    phone: "(206) 622-5177",
  },
  {
    name: "Bread of Life Mission Overnight Shelter",
    address: "97 South Main St,",
    city: "Seattle, WA 98104",
    phone: "(206) 682-3579",
  },
  {
    name: "DESC Queen Anne Shelter",
    address: "157 Roy St,",
    city: "Seattle, WA 98109",
    phone: "(206) 283-9567",
  },
  {
    name: "Congregations for the Homeless Year-Round Shelter",
    address: "2030 3rd Ave",
    city: "Seattle, WA 98121",
    phone: "(206) 441-3210",
  },
  {
    name: "Compass Housing Alliance Blaine Center (by referral only)",
    address: "Denny Way near Seattle Center",
    city: "",
    phone: "(206) 474-1660",
  },
];

const forWomen: shelter[] = [
  {
    name: "Union Gospel Mission Hope Place (for women and children)",
    address: "3802 South Othello St",
    city: "Seattle, WA 98118",
    phone: "(206) 628-2008",
  },
  {
    name: "Union Gospel Mission KentHOPE Day Center",
    address: "9009 Canyon Dr",
    city: "Kent, WA 98030",
    phone: "(253) 480-2325",
  },
  {
    name: "Union Gospel Mission BelRed Family Resource Center (for women and their children)",
    address: "2315 173rd Ave NE",
    city: "Redmond, WA 98052",
    phone: "(206) 491-0651",
  },
  {
    name: "YWCA Angeline’s Day Center",
    address: "2030 3rd Ave",
    city: "Seattle, WA 98121",
    phone: "(206) 436-8650",
  },
  {
    name: "Compass Housing Alliance Hammond House",
    address: "2030 3rd Ave",
    city: "Seattle, WA 98121",
    phone: "(206) 441-3210",
  },
];

const findHousing: housingFinderResource[] = [
  {
    name: "Catholic Community Services/Housing Services ",
    url: "https://ccsww.org/",
    desc: "Owns a large number of housing units including shelters, transitional and permanent housing for low-income individuals in Western Washington.",
    address: "",
    phone: "(206)-328-5696",
    email: "CatholicHousingServicesInfo@ccsww.org",
  },
  {
    name: "The STAR Project",
    url: "http://www.thestarproject.us/",
    desc: "Has relationships with a number of local landlords who have agreed to provide transitional housing for some formerly incarcerated individuals.",
    address: "321 Wellington Avenue PO Box 159 Walla Walla, WA 99362",
    phone: "(509)-525-3612",
    email: "info@thestarproject.us",
  },
  {
    name: "Compass Housing Alliance",
    url: "http://www.compasshousingalliance.org",
    desc: "Owns a large number of housing units and provides emergency shelter, transitional and permanent housing for low-income individuals.",
    address: "377 S. Washington Street, 5th Floor, Seattle, WA 98104",
    phone: "(206)-474-1000",
    email: "",
  },
  {
    name: "Pioneer Human Services",
    url: "http://pioneerhumanservices.org/housing",
    desc: "Owns housing units in King, Pierce, Skagit, Spokane, and Whatcom counties and provides transitional and permanent housing rental programs for people with criminal histories.",
    address: "",
    phone: "(206)-624-0082",
    phone2: "(253)-272-5486",
    tags2Phones: ["Seattle: ", "Tacoma: "],
    email: "housing@p-h-s.com",
  },
];

const additionalLinks: additionalLinksType[] = [
  {
    name: "Affordable Apartment Search",
    url: "http://www.hud.gov/apps/section8/step2.cfm?state=WA%2CWashington",
  },
  {
    name: "Apartment Finder",
    url: "http://aptfinder.org",
  },
  {
    name: "Housing Search NW.org",
    url: "http://www.housingsearchnw.org",
  },
  {
    name: "Affordable Housing Online",
    url: "https://affordablehousingonline.com/housing-search/Washington",
  },
];
export { forMen, forWomen, findHousing, additionalLinks };
