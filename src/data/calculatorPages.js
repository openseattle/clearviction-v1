/**
 * This file contains all page content for the calculator. Routes are handled dynamically using the top-level keys of 
 * the object exported from this file. For example, the data within the key "landing-0" is populated by 
 * Calculator.jsx at the route: /calculator/landing-0. This route can then be linked to from other pages.
 * 
 * For custom styling, pass a className into the body[] object you want to style and then make the necessary changes 
 * in Calculator.css
 * 
 * SCHEMA (all fields are optional):
 * [page ID]: {
 *   header,
 *   body: [
 *     {
 *       type, (available types: paragraph, link)
 *       text, (use for paragraphs or links)
 *       href, (use for links)
 *       className (can be used for any part of the schema)
 *     }
 *   ],
 *   buttons: [
 *     {
 *       text,
 *       href (can be a relative or absolute path),
 *       color (defaults to blue)
 *     }
 *   ],
 *   footerLink: {
 *     text,
 *     href (can be a relative or absolute path)
 *   },
 *   tooltip,
 *   disclaimer
 * }
 */

const CALC_PREFIX = "/calculator";
const disclaimer = "The information provided by the Conviction Vacation Project is not intended to replace legal advice and does not in any way constitute an attorney-client relationship. If you need legal advice or assistance, we strongly recommend that you reach out to a licensed professional.";
const tooltip = "I'm not sure";
const YES = "Yes";
const NO = "No";
const BODY_TYPES = {
    PARAGRAPH: "paragraph",
    LINK: "link"
};

export default {
    "landing-0": {
        header: "Misdemeanor Calculator",
        body: [
            {
                type: BODY_TYPES.PARAGRAPH,
                text: "You can use our eligibility calculator to determine whether you are eligible to vacate your misdemeanor conviction.",
            }
        ],
        buttons: [
            {
                text: "Start",
                href: CALC_PREFIX + "/landing-1"
            }
        ],
        tooltip: "My conviction is not a misdemeanor or I’m not sure.",
    },
    "landing-ineligible-0": {
        header: "Our calculator can’t determine your eligibility",
        body: [
            {
                type: BODY_TYPES.PARAGRAPH,
                text: "It looks like your conviction may not be a misdemeanor. Our calculator is unable to assist you with your conviction at this point. We would like to hear your input and learn about your experience as we continue building our calculator.",
            }
        ],
        footerLink: {
            text: "Take Survey",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSeuT2oIBnxFAMv6p8tsujNlSugWxFS5la4DUC4rTFekInrcqQ/viewform?usp=sf_link"
        },
    },
    "landing-1": {
        header: "Was this offense a misdemeanor?",
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/landing-2"
            },
            {
                text: NO,
                href: CALC_PREFIX + "/landing-ineligible-0"
            }
        ],
        tooltip
    },
    "landing-2": {
        header: "Does your conviction fall into any of these special cases?",
        buttons: [
            {
                text: "Possession of Marijuana Misdemeanor",
                href: CALC_PREFIX + "/marijuana-0"
            },
            {
                text: "Prostitution Misdemeanor",
                href: CALC_PREFIX + "/prostitution-0"
            },
            {
                text: "Violation of a Fishing Regulation",
                href: CALC_PREFIX + "/fishing-0"
            },
            {
                text: "My conviction doesn’t fall into any of the special cases (most convictions fall in this category)",
                href: CALC_PREFIX + "/main-0",
                color: "green"
            }
        ],
        tooltip
    },
    "marijuana-0": {
        header: "Did this offense involve possession of marijuana?",
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/marijuana-1"
            },
            {
                text: NO,
                href: CALC_PREFIX + "/marijuana-ineligible-0"
            }
        ]
    },
    "marijuana-1": {
        header: "Were you 21 years or older at the time of offense?",
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/marijuana-2"
            },
            {
                text: NO,
                href: CALC_PREFIX + "/marijuana-ineligible-0"
            }
        ]
    },
    "marijuana-2": {
        header: "Have you completed the terms of your sentence for this offense?",
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/marijuana-eligible-0"
            },
            {
                text: NO,
                href: CALC_PREFIX + "/marijuana-ineligible-1"
            }
        ]
    },
    "marijuana-ineligible-0": {
        header: "As of now, it seems that you may NOT be eligible to vacate your marijuana misdemeanor conviction because you have not completed the terms of your offense.",
        disclaimer
    },
    "marijuana-eligible-0": {
        header: "From your answers, it seems that you may be eligible to vacate your marijuana misdemeanor conviction!",
        body: [
            {
                type: BODY_TYPES.PARAGRAPH,
                text: "It looks like your conviction may be one of the following:"
            },
            {
                type: BODY_TYPES.LINK,
                text: "RCW 69.50.4014",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4014"
            },
            {
                type: BODY_TYPES.LINK,
                text: "RCW 69.50.401(e)",
                href: "https://leg.wa.gov/CodeReviser/documents/sessionlaw/1979c67.pdf?cite=1979%20c%2067%20§%201"
            },
            {
                type: BODY_TYPES.LINK,
                text: "RCW 69.50.401(d)",
                href: "https://leg.wa.gov/CodeReviser/documents/sessionlaw/1971ex1c308.pdf?cite=1971%20ex.s.%20c%20308%20§%2069.50.406"
            },
            {
                type: BODY_TYPES.PARAGRAPH,
                text: "(Possession of forty grams or less of marijuana)",
            },
            {
                type: BODY_TYPES.PARAGRAPH,
                text: "Next steps",
                className: "calculator-subheader"
            },
            {
                type: BODY_TYPES.PARAGRAPH,
                text: "1. Fill out a Motion and Declaration for Order Vacating Marijuana Conviction (CrRLJ 09.0100):",
                className: "calculator-numbered-item"
            },
            {
                type: BODY_TYPES.LINK,
                text: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38"
            },
            {
                type: BODY_TYPES.PARAGRAPH,
                text: "2. See instructions for vacating a conviction in form CrRLJ 09.0300:",
                className: "calculator-numbered-item"
            },
            {
                type: BODY_TYPES.LINK,
                text: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38"
            }
        ],
        disclaimer
    },
    "marijuana-ineligible-1": {
        header: "As of now, it seems that you may NOT be eligible to vacate your marijuana misdemeanor conviction because you have not completed the terms of your offense.",
        disclaimer
    },
    "main-0": {
        header: "We will now ask a few questions about what your conviction was for, to assess your eligibility to vacate the conviction.",
        buttons: [
            {
                text: "Continue",
                href: CALC_PREFIX + "/main-1"
            }
        ]
    },
    "main-1": {
        header: "Was your conviction a violent offense as defined in RCW 9.94A.030 or an attempt to commit a violence offense?",
        body: [
            {
                type: BODY_TYPES.LINK,
                text: "RCW 9.94A.030",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.94A.030"
            }
        ],
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/main-ineligible-0"
            },
            {
                text: NO,
                href: CALC_PREFIX + "/main-2"
            }
        ],
        tooltip,
    },
    "main-ineligible-0": {
        header: "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because your conviction is classified as a violent offense as defined in RCW 9.94A.030.",
        body: [
            {
                type: BODY_TYPES.LINK,
                text: "RCW 9.94A.030",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.94A.030"
            }
        ],
        disclaimer
    },
    "main-2": {
        header: "Was the offense was a violation of any of the following?",
        body: [
            {
                type: BODY_TYPES.LINK,
                text: "RCW 46.61.502 - driving while under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.502"
            },
            {
                type: BODY_TYPES.LINK,
                text: "RCW 46.61.504 - actual physical control while under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.504"
            },
            {
                type: BODY_TYPES.LINK,
                text: "RCW 9.91.020 - operating a railroad, etc. while intoxicated",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.91.020"
            }
        ],
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/main-ineligible-1"
            },
            {
                text: NO,
                href: CALC_PREFIX + "/main-3"
            }
        ],
        tooltip
    },
    "main-ineligible-1": {
        header: "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because your offense was on of the following:",
        body: [
            {
                type: BODY_TYPES.LINK,
                text: "RCW 46.61.502 - driving while under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.502"
            },
            {
                type: BODY_TYPES.LINK,
                text: "RCW 46.61.504 - actual physical control while under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.504"
            },
            {
                type: BODY_TYPES.LINK,
                text: "RCW 9.91.020 - operating a railroad, etc. while intoxicated",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.91.020"
            }
        ],
        disclaimer
    },
    "main-3": {
        header: "Was the offense is considered a \"prior offense\" under RCW 46.61.5055?",
        body: [
            {
                type: BODY_TYPES.LINK,
                text: "RCW 46.61.5055 (refer to Section 14 for definitions)",
                href: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.61.5055"
            }
        ],
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/main-4"
            },
            {
                text: NO,
                href: CALC_PREFIX + "/main-5"
            }
        ],
        tooltip
    },
    "main-4": {
        header: "Did you have an additional alcohol or drug violation within ten years of the date of arrest for the prior offense?",
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/main-ineligible-3"
            },
            {
                text: NO,
                href: CALC_PREFIX + "/main-7"
            }
        ],
        tooltip
    },
    "main-5": {
        header: "Was the offense a misdemeanor or gross misdemeanor violation, including attempt of any of the following:",
        body: [
            {
                type: BODY_TYPES.LINK,
                text: "Chapter 9.68 RCW - obscenity and pornography",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.68"
            },
            {
                type: BODY_TYPES.LINK,
                text: "Chapter 9.68A RCW - sexual exploitation of children",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.68A"
            },
            {
                type: BODY_TYPES.LINK,
                text: "Chapter 9A.44 RCW - sex offenses, except for failure to register as a sex offender under RCW 9A.44.132",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9a.44"
            }
        ],
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/main-ineligible-2"
            },
            {
                text: NO,
                href: CALC_PREFIX + "/main-8"
            }
        ],
        tooltip
    },
    "main-ineligible-2": {
        header: "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction.",
        body: [
            {
                type: BODY_TYPES.PARAGRAPH,
                text: "Based on RCW 9.94A.640, a misdemeanor or gross misdemeanor violation, including attempt of any of the following are not eligible for vacation:"
            },
            {
                type: BODY_TYPES.LINK,
                text: "Chapter 9.68 RCW - obscenity and pornography",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.68"
            },
            {
                type: BODY_TYPES.LINK,
                text: "Chapter 9.68A RCW - sexual exploitation of children",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.68A"
            },
            {
                type: BODY_TYPES.LINK,
                text: "Chapter 9A.44 RCW - sex offenses, except for failure to register as a sex offender under RCW 9A.44.132",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9a.44"
            }
        ],
        disclaimer
    },
    "main-ineligible-3": {
        header: "Unfortunately, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because you have had an additional alcohol or drug violation within ten years of your prior offense.",
        disclaimer
    },
    "main-7": {
        header: "Has it been ten years or more since the date of the arrest for the prior offense?",
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/main-5"
            },
            {
                text: NO,
                href: CALC_PREFIX + "/main-ineligible-4"
            }
        ],
        tooltip
    },
    "main-ineligible-4": {
        header: "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because it has been less than 10 years since your arrest for the prior offense.",
        body: [
            {
                type: BODY_TYPES.PARAGRAPH,
                text: "You might be eligible when 10 years have passed since your prior offense."
            }
        ],
        disclaimer
    },
    "main-8": {
        header: "Was the offense considered domestic violence against family / household member or spouse / partner?",
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/main-9"
            },
            {
                text: NO,
                href: CALC_PREFIX + "" // TODO: link to first "Questions about circumstances that affect CV eligibility" page
            }
        ],
        tooltip
    },
    "main-9": {
        header: "Have you had two or more domestic violence convictions each stemming from different incidents?",
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "/main-ineligible-5"
            },
            {
                text: NO,
                href: CALC_PREFIX + "/main-10"
            }
        ],
        tooltip
    },
    "main-ineligible-5": {
        header: "Unfortunately, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because you have had two or more domestic violence incidents.",
        disclaimer
    },
    "main-10": {
        header: "Have five or more years passed since fulfillment of all sentencing requirements for this conviction?",
        buttons: [
            {
                text: YES,
                href: CALC_PREFIX + "" // TODO: link to first "Questions about circumstances that affect CV eligibility" page
            },
            {
                text: NO,
                href: CALC_PREFIX + "/main-ineligible-6"
            }
        ],
        tooltip
    },
    "main-ineligible-6": {
        header: "As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because it has been less than 5 years since the conviction for this offense.",
        body: [
            {
                type: BODY_TYPES.PARAGRAPH,
                text: "You might be eligible when 5 years have passed since your conviction."
            }
        ],
        disclaimer
    }
};
