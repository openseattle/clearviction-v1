enum PageId {
    Home = "HOME",
    GivingTuesday = "GIVINGTUESDAY",
    GetStarted = "GET-STARTED",
    GetInvolved = "GET-INVOLVED",
    WhyVacate = "WHY-VACATE",
    Contact = "CONTACT",
    AccessCalculator = "ACCESS-CALCULATOR",
    About = "ABOUT",
}

interface Page {
    name: string;
    url: string;
    key: PageId;
    subpages?: Page[];
}

const headerPages: Page[] = [
    { name: "Home", url: "/", key: PageId.Home },
    { name: "Get Started", url: "/get-started", key: PageId.GetStarted },
    { name: "Get Involved", url: "/get-involved", key: PageId.GetInvolved },
    { name: "Why Vacate", url: "/why-vacate", key: PageId.WhyVacate },
    { name: "Contact", url: "/contact", key: PageId.Contact },
    { name: "Access Calculator", url: "/calculator/landing-0", key: PageId.AccessCalculator },
];

const footerPages: Page[] = [
    { name: "Get Started", url: "/get-started", key: PageId.GetStarted },
    { name: "About", url: "/about", key: PageId.About },
    { name: "Get Involved", url: "/get-involved", key: PageId.GetInvolved },
    { name: "Contact", url: "/contact", key: PageId.Contact },
];

export { headerPages, footerPages, PageId };
