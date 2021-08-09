export const CalculatorService = {
  handleHead(a, qNum, cb) {
    if (a === "Possession of Marijuana") {
      cb("mj");
      return `mj/1`;
    } else if (a === "Prostitution Misdemeanor") {
      return `?`;
    } else if (a === "Violation of a Fishing Regulation") {
      return `?`;
    } else if (a === "All other cases") {
      return `?`;
    } else if (a === "No") {
      return `results`;
    } else return `head/${parseInt(qNum) + 1}`;
  },
  handleMJ(a, qNum, cb) {
    if (qNum === "4" && a === "No") {
      cb("Noneligible");
      return "results";
    } else if (a === "No") {
      return "results";
    } else if (qNum === "4" && a === "Yes") {
      cb("Eligible");
      return "results";
    } else return `mj/${parseInt(qNum) + 1}`;
  },
  ResultUnsure: {
    mj: () => {
      return (
        <>
          It looks like your conviction may not be one of the following:
          <ul>
            <li>
              <a
                href="https://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4014"
                target="_blank"
                rel="noreferrer noopener"
              >
                RCW 69.50.4014
              </a>
            </li>
            <li>
              <a
                href="https://leg.wa.gov/CodeReviser/documents/sessionlaw/1979c67.pdf?cite=1979%20c%2067%20%C2%A7%201"
                target="_blank"
                rel="noreferrer noopener"
              >
                RCW 69.50.401(e)
              </a>
            </li>
            <li>
              <a
                href="https://leg.wa.gov/CodeReviser/documents/sessionlaw/1971ex1c308.pdf?cite=1971%20ex.s.%20c%20308%20%C2%A7%2069.50.406"
                target="_blank"
                rel="noreferrer noopener"
              >
                RCW 69.50.401(d)
              </a>
            </li>
            <li>
              (*All of the above pertain to possession of forty grams or less of
              marijuana)
            </li>
          </ul>
        </>
      );
    },
    head: "It looks like your conviction may not be a misdemeanor.",
  },
  ResultNo: {
    mj: "As of now, it seems you may NOT be eligible to vacate your marijuana misdemeanor conviction because you have not completed the terms of your offense.",
  },
};
