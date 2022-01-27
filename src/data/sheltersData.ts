type shelter = {
  name: string;
  address: string;
  city: string;
  phone: string;
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
]

export {forMen, forWomen};
