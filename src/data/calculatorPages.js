/**
 * This file contains all page content for the calculator. Routes are handled dynamically using the top-level keys of 
 * the object exported from this file. For example, the values within the key "landing-0" are populated by 
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
 *       className (can be used for any type)
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

const CALC_PREFIX = "/calculator"
const DISCLAIMER = "The information provided by the Conviction Vacation Project is not intended to replace legal advice and does not in any way constitute an attorney-client relationship. If you need legal advice or assistance, we strongly recommend that you reach out to a licensed professional."

export default {
    "landing-0": {
        header: "Misdemeanor Calculator",
        body: [
            {
                type: "paragraph",
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
                type: "paragraph",
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
                text: "Yes",
                href: CALC_PREFIX + "/landing-2"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/landing-ineligible-0"
            }
        ],
        tooltip: true
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
        tooltip: true
    },
    "marijuana-0": {
        header: "Did this offense involve possession of marijuana?",
        buttons: [
            {
                text: "Yes",
                href: CALC_PREFIX + "/marijuana-1"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/marijuana-ineligible-0"
            }
        ]
    },
    "marijuana-1": {
        header: "Were you 21 years or older at the time of offense?",
        buttons: [
            {
                text: "Yes",
                href: CALC_PREFIX + "/marijuana-2"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/marijuana-ineligible-0"
            }
        ]
    },
    "marijuana-2": {
        header: "Have you completed the terms of your sentence for this offense?",
        buttons: [
            {
                text: "Yes",
                href: CALC_PREFIX + "/marijuana-eligible-0"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/marijuana-ineligible-1"
            }
        ]
    },
    "marijuana-ineligible-0": {
        header: "As of now, it seems that you may NOT be eligible to vacate your marijuana misdemeanor conviction because you have not completed the terms of your offense.",
        disclaimer: DISCLAIMER
    },
    "marijuana-eligible-0": {
        header: "From your answers, it seems that you may be eligible to vacate your marijuana misdemeanor conviction!",
        body: [
            {
                type: "paragraph",
                text: "It looks like your conviction may be one of the following:"
            },
            {
                type: "link",
                text: "RCW 69.50.4014",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4014"
            },
            {
                type: "link",
                text: "RCW 69.50.401(e)",
                href: "https://leg.wa.gov/CodeReviser/documents/sessionlaw/1979c67.pdf?cite=1979%20c%2067%20§%201"
            },
            {
                type: "link",
                text: "RCW 69.50.401(d)",
                href: "https://leg.wa.gov/CodeReviser/documents/sessionlaw/1971ex1c308.pdf?cite=1971%20ex.s.%20c%20308%20§%2069.50.406"
            },
            {
                type: "paragraph",
                text: "(Possession of forty grams or less of marijuana)",
            },
            {
                type: "paragraph",
                text: "Next steps",
                className: "calculator-subheader"
            },
            {
                type: "paragraph",
                text: "1. Fill out a Motion and Declaration for Order Vacating Marijuana Conviction (CrRLJ 09.0100):",
                className: "calculator-numbered-item"
            },
            {
                type: "link",
                text: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38"
            },
            {
                type: "paragraph",
                text: "2. See instructions for vacating a conviction in form CrRLJ 09.0300:",
                className: "calculator-numbered-item"
            },
            {
                type: "link",
                text: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38"
            }
        ],
        disclaimer: DISCLAIMER
    },
    "marijuana-ineligible-1": {
        header: "As of now, it seems that you may NOT be eligible to vacate your marijuana misdemeanor conviction because you have not completed the terms of your offense.",
        disclaimer: DISCLAIMER
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
                type: "link",
                text: "RCW 9.94A.030",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.94A.030"
            }
        ],
        buttons: [
            {
                text: "Yes",
                href: CALC_PREFIX + "/main-ineligible-0"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/main-2"
            }
        ],
        tooltip: true,
    },
    "main-ineligible-0": {
        header: "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because your conviction is classified as a violent offense as defined in RCW 9.94A.030.",
        body: [
            {
                type: "link",
                text: "RCW 9.94A.030",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.94A.030"
            }
        ],
        disclaimer: DISCLAIMER
    },
    "main-2": {
        header: "Was the offense was a violation of any of the following?",
        body: [
            {
                type: "link",
                text: "RCW 46.61.502 - driving while under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.502"
            },
            {
                type: "link",
                text: "RCW 46.61.504 - actual physical control while under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.504"
            },
            {
                type: "link",
                text: "RCW 9.91.020 - operating a railroad, etc. while intoxicated",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.91.020"
            }
        ],
        buttons: [
            {
                text: "Yes",
                href: CALC_PREFIX + "/main-ineligible-1"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/main-3"
            }
        ],
        tooltip: true
    },
    "main-ineligible-1": {
        header: "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because your offense was on of the following:",
        body: [
            {
                type: "link",
                text: "RCW 46.61.502 - driving while under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.502"
            },
            {
                type: "link",
                text: "RCW 46.61.504 - actual physical control while under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.504"
            },
            {
                type: "link",
                text: "RCW 9.91.020 - operating a railroad, etc. while intoxicated",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.91.020"
            }
        ],
        disclaimer: DISCLAIMER
    },
    "main-3": {
        header: "Was the offense is considered a \"prior offense\" under RCW 46.61.5055?",
        body: [
            {
                type: "link",
                text: "RCW 46.61.5055 (refer to Section 14 for definitions)",
                href: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.61.5055"
            }
        ],
        buttons: [
            {
                text: "Yes",
                href: CALC_PREFIX + "/main-4"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/main-5"
            }
        ],
        tooltip: true
    },
    "main-4": {

    },
    "main-5": {
        
    },
}