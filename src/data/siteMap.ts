type Page = {
    name: string;
    url: string;
    subpages?: Page[];
};

// commented out pages are still in under development
const pages: Page[] = [
    { name: "Home", url: "/" },
    // { name: "Calculator", url: "/calculator" },
    // {
    //   name: "Why Vacate",
    //   url: "/why-vacate",
    // },
    // {
    //   name: "Resources",
    //   url: "/resources",
    //   subpages: [
    //     { name: "The Process", url: "/resources/the-process" },
    //     { name: "Housing Assistance", url: "/resources/assistance/housing" },
    //     {
    //       name: "Employment Assistance",
    //       url: "/resources/assistance/employment",
    //     },
    //     { name: "Education Assistance", url: "/resources/assistance/education" },
    //   ],
    // },
    {
        name: "Get Started",
        url: "/get-started",
    },
    {
        name: "Get Involved",
        url: "/get-involved",
        // subpages: [
        //   { name: "Volunteer", url: "/get-involved/volunteer" },
        //   { name: "Donate", url: "/get-involved/donate" },
        //   { name: "Partner with Us", url: "/get-involved/partner-with-us" },
        // ],
    },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
];

export default pages;
