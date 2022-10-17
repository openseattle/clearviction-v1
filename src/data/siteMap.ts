type Page = {
    name: string;
    url: string;
    subpages?: Page[];
};

const headerPages: Page[] = [
    { name: "Home", url: "/" },
    { name: "Get Started", url: "/get-started" },
    { name: "Get Involved", url: "/get-involved" },
    { name: "Why Vacate", url: "/why-vacate" },
    { name: "Contact", url: "/contact" },
    { name: "Access Calculator", url: "/calculator/landing-0" },
];

const footerPages: Page[] = [
    { name: "Get Started", url: "/get-started" },
    { name: "About", url: "/about" },
    { name: "Get Involved", url: "/get-involved" },
    { name: "Contact", url: "/contact" },
];

export { headerPages, footerPages };
