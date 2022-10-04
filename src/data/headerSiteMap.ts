type Page = {
  name: string;
  url: string;
  subpages?: Page[];
};

// commented out pages are still in under development
const pages: Page[] = [
  { name: "Home", url: "/" },
  // { name: "Calculator", url: "/calculator" },
  { name: "Get Started", url: "/get-started", },
  // { name: "About", url: "/about" },
  { name: "Get Involved", url: "/get-involved",
      // subpages: [
      //   { name: "Volunteer", url: "/get-involved/volunteer" },
      //   { name: "Donate", url: "/get-involved/donate" },
      //   { name: "Partner with Us", url: "/get-involved/partner-with-us" },
      // ],
  },
  { name: "Why Vacate", url: "/why-vacate", },
  { name: "Contact", url: "/contact" },
  { name: "Access Calculator", url: "/calculator/landing-0"}
];

export default pages;
