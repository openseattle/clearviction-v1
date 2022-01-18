type Page = {
  name: string;
  url: string;
};

const pages: Page[] = [
  { name: "Home", url: "/" },
  { name: "Calculator", url: "/calculator" },
  { name: "Volunteer", url: "/volunteer" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export default pages;
