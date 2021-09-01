/**
 * SCHEMA (all fields are optional):
 * [page ID]: {
 *   header,
 *   body,
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
    landing0: {
        header: "Misdemeanor Calculator",
        body: "You can use our eligibility calculator to determine whether you are eligible to vacate your misdemeanor conviction.",
        buttons: [
            {
                text: "Start",
                href: CALC_PREFIX + "/landing1"
            }
        ],
        tooltip: "My conviction is not a misdemeanor or I’m not sure.",
    },
    ineligible0: {
        header: "Our calculator can’t determine your eligibility",
        body: "It looks like your conviction may not be a misdemeanor. Our calculator is unable to assist you with your conviction at this point. We would like to hear your input and learn about your experience as we continue building our calculator.",
        footerLink: {
            text: "Take Survey",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSeuT2oIBnxFAMv6p8tsujNlSugWxFS5la4DUC4rTFekInrcqQ/viewform?usp=sf_link"
        },
    },
    landing1: {
        header: "Was this offense a misdemeanor?",
        buttons: [
            {
                text: "Yes",
                href: CALC_PREFIX + "/landing2"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/ineligible0"
            }
        ],
        tooltip: "I'm not sure"
    },
    landing2: {
        header: "Does your conviction fall into any of these special cases?",
        buttons: [
            {
                text: "Possession of Marijuana Misdemeanor",
                href: CALC_PREFIX + "/marijuana0"
            },
            {
                text: "Prostitution Misdemeanor",
                href: CALC_PREFIX + "/prostitution0"
            },
            {
                text: "Violation of a Fishing Regulation",
                href: CALC_PREFIX + "/fishing0"
            },
            {
                text: "My conviction doesn’t fall into any of the special cases (most convictions fall in this category)",
                href: CALC_PREFIX + "/main0",
                color: "green"
            }
        ],
        tooltip: "I'm not sure"
    }
}