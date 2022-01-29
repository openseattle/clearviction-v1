type Page = {
  name: string;
  url: string;
  subpages?: Page[];
};

const pages: Page[] = [
  { name: "Calculator", url: "/calculator" },
  {
    name: "Get Involved",
    url: "/get-involved",
    subpages: [
      { name: "Volunteer", url: "/get-involved/volunteer" },
      { name: "Donate", url: "/get-involved/donate" },
      { name: "Partner with Us", url: "/get-involved/partner-with-us" },
    ],
  },
  {
    name: "Resources",
    url: "/resources",
    subpages: [
      { name: "The Process", url: "/resources/the-process" },
      { name: "Housing Assistance", url: "/resources/assistance/housing"},
      { name: "Employment Assistance", url: "/resources/assistance/employment"},
      { name: "Education Assistance", url: "/resources/assistance/education"},
    ],
  },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export default pages;
