/**
 * This file contains all page content for the calculator. Routes are handled dynamically using the top-level keys of
 * the object exported from this file. For example, the data within the key "landing-0" is populated by
 * Calculator.jsx at the route: /calculator/landing-0. This route can then be linked to from other pages.
 *
 * See calculatorPagesTypes.ts for schema to identify the available page types and required fields.
 */

import { Pages, BodyType, TooltipType, BUTTON_TEXT, SectionName, PageType } from "./calculatorPagesTypes";

const CALC_PREFIX = "/calculator";
const disclaimer =
    "The information provided by the Conviction Vacation Project is not intended to replace legal advice and does not in any way constitute an attorney-client relationship. If you need legal advice or assistance, we strongly recommend that you reach out to a licensed professional.";
const FEEDBACK_BUTTON_TEXT = "Give us your feedback";
const ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSfzyLZsbS7K_yWS9leCMBU7UXgiww2PQqOdfh_V_4AcnZnKbw/viewform?usp=sf_link";
const CANT_DETERMINE_FEEDBACK_FORM_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSfW38-q4SDs0TzFolDrHr15dY9W8sYUYmkvPiYR30SeXk_Ieg/viewform?usp=sf_link";

const data: Pages = {
    "landing-0": {
        type: PageType.MAIN,
        header: "Eligibility Calculator",
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "Find out if your misdemeanor or gross misdemeanor conviction is eligible to vacate.",
            },
            {
                type: BodyType.LINK,
                text: "If you are not sure whether your conviction is a misdemeanor, request your record here",
                href: "https://www.wsp.wa.gov/crime/criminal-history",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.NEXT,
                href: CALC_PREFIX + "/landing-1",
            },
        ],
    },
    "landing-1": {
        type: PageType.GUIDE,
        header: "Quick Start Guide",
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "Time expectation: 10 minutes",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "If you have multiple convictions, you will need to go through the calculator separately for each one.",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "You will need to know:",
            },
            {
                type: BodyType.LIST,
                items: [
                    "The date and violation of your misdemeanor or gross misdemeanor conviction.",
                    "If and when you completed the terms of your sentence.",
                    "Pending charges and/or new convictions.",
                    "Any court orders against you.",
                ],
            },
            {
                type: BodyType.PARAGRAPH,
                text: "Court orders include:",
            },
            {
                type: BodyType.LIST,
                items: [
                    "Domestic violence protection order",
                    "No-contact order",
                    "Anti-harassment order",
                    "Civil restraining order",
                ],
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.START,
                href: CALC_PREFIX + "/landing-2",
            },
        ],
    },
    "landing-ineligible-0": {
        type: PageType.END,
        header: "Our calculator can't determine your eligibility",
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "It looks like your conviction may not be a misdemeanor. Our calculator is unable to assist you with your conviction at this point. We would like to hear your input and learn about your experience as we continue building our calculator.",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: CANT_DETERMINE_FEEDBACK_FORM_LINK,
                target: "_blank",
            },
        ],
        showRestartButton: true,
    },
    "landing-2": {
        type: PageType.QUESTION,
        header: "Was this offense a misdemeanor or gross misdemeanor?",
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/landing-3",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/landing-ineligible-0",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "landing-3": {
        type: PageType.QUESTION,
        header: "Does your conviction fall into any of these special cases?",
        buttons: [
            {
                text: "Possession of marijuana",
                href: CALC_PREFIX + "/mar-0",
            },
            {
                text: "Prostitution",
                href: CALC_PREFIX + "/pro-0",
            },
            {
                text: "Violation of a fishing regulation",
                href: CALC_PREFIX + "/fsh-0",
            },
            {
                text: "None of the above",
                href: CALC_PREFIX + "/main-0",
                color: "green",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "mar-0": {
        type: PageType.SPECIAL,
        header: "You may be eligible for conviction vacation based on a special clause in conviction vacation eligibility law.",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        body: [
            {
                type: BodyType.LINK,
                text: "RCW 9.96.060(5)",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.96.060",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "This clause applies to certain marijuana misdemeanors for possession of 40 grams or less.",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "We will ask you up to 4 questions to determine if you may be eligible for Conviction Vacation through this exception.",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.CONTINUE,
                href: CALC_PREFIX + "/mar-1",
            },
        ],
    },
    "mar-1": {
        type: PageType.QUESTION,
        header: "Did this offense involve possession of marijuana?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/mar-2",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/mar-to-main",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "mar-2": {
        type: PageType.QUESTION,
        header: "Were you 21 years or older at the time of offense?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/mar-3",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/mar-to-main",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "mar-3": {
        type: PageType.QUESTION,
        header: "Was your conviction for possession of 40 grams or less of marijuana?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/mar-4",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/mar-to-main",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "mar-4": {
        type: PageType.QUESTION,
        header: "Have you completed the terms of your sentence for this offense?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/mar-eligible-0",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/mar-ineligible-1",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "mar-ineligible-0": {
        type: PageType.END,
        header: "As of now, it seems that you may NOT be eligible to vacate your marijuana misdemeanor conviction because you have not completed the terms of your offense.",
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "mar-eligible-0": {
        type: PageType.END,
        header: "From your answers, it seems that you may be eligible to vacate your marijuana misdemeanor conviction!",
        progressBar: {
            currentSectionName: SectionName.ELIGIBLE,
        },
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "It looks like your conviction may be one of the following:",
            },
            {
                type: BodyType.LINK,
                text: "RCW 69.50.4014",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4014",
            },
            {
                type: BodyType.LINK,
                text: "RCW 69.50.401(e)",
                href: "https://leg.wa.gov/CodeReviser/documents/sessionlaw/1979c67.pdf?cite=1979%20c%2067%20§%201",
            },
            {
                type: BodyType.LINK,
                text: "RCW 69.50.401(d) (Possession of 40 grams or less of marijuana)",
                href: "https://leg.wa.gov/CodeReviser/documents/sessionlaw/1971ex1c308.pdf?cite=1971%20ex.s.%20c%20308%20§%2069.50.406",
            },
            {
                type: BodyType.HEADING,
                text: "Next steps:",
            },
            {
                type: BodyType.PARAGRAPH,
                text: '1. Fill out a "Petition and Declaration for Order Vacating Conviction" (CrRLJ 09.0100).',
            },
            {
                type: BodyType.LINK,
                text: "CrRLJ 09.0100",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
            },
            {
                type: BodyType.PARAGRAPH,
                text: '2. Read "Instructions for Vacating Misdemeanor and Gross Misdemeanor Convictions" (CrRLJ 09.0300).',
            },
            {
                type: BodyType.LINK,
                text: "CrRLJ 09.0300",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "3. To better understand misdemeanor conviction vacation, please click the link below:",
            },
            {
                type: BodyType.LINK,
                text: "Click here.",
                href: "https://www.washingtonlawhelp.org/resource/get-misdemeanor-convictions-off-your-criminal-record",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "4. Additionally, as of February 25, 2021, the Washington Supreme Court struck down the state's main drug possession crime in a case called State v. Blake. Read more about how it could affect your case below. We will be providing updates in the future as to how this impacts you.",
            },
            {
                type: BodyType.LINK,
                text: "State v. Blake",
                href: "https://www.aclu-wa.org/pages/q-blake-decision",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "mar-ineligible-1": {
        type: PageType.END,
        header: "As of now, it seems that you may NOT be eligible to vacate your marijuana misdemeanor conviction because you have not completed the terms of your offense.",
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "mar-to-main": {
        type: PageType.MAIN,
        header: "Based on your response, it looks like you don't qualify for the marijuana misdemeanor exception.",
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "However, your misdemeanor may still be eligible for conviction vacation through the general eligibility criteria that apply to most misdemeanors.",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.CONTINUE_JOURNEY,
                href: CALC_PREFIX + "/main-0",
            },
        ],
    },
    "main-0": {
        type: PageType.MAIN,
        header: "We will now ask a few questions about what your conviction was for, to assess your eligibility to vacate the conviction.",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.CONTINUE,
                href: CALC_PREFIX + "/main-1",
            },
        ],
    },
    "main-1": {
        type: PageType.QUESTION,
        header: "Was the offense one of the following?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        body: [
            {
                type: BodyType.LINK,
                text: "A violent offense, as defined in RCW 9.94A.030",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.94A.030",
            },
            {
                type: BodyType.LIST,
                items: ["An attempt to commit a violent offense"],
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/main-ineligible-0",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/main-2",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "main-ineligible-0": {
        type: PageType.END,
        header: "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because your conviction is classified as a violent offense as defined in RCW 9.94A.030.",
        body: [
            {
                type: BodyType.LINK,
                text: "RCW 9.94A.030",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.94A.030",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "main-2": {
        type: PageType.QUESTION,
        header: "Was the offense a violation of any of the following?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        body: [
            {
                type: BodyType.LINK,
                text: "RCW 46.61.502 - driving while under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.502",
            },
            {
                type: BodyType.LINK,
                text: "RCW 46.61.504 - Physical control of vehicle under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.504",
            },
            {
                type: BodyType.LINK,
                text: "RCW 9.91.020 - operating a railroad, etc. while intoxicated",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.91.020",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/main-ineligible-1",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/main-3",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "main-ineligible-1": {
        type: PageType.END,
        header: "As of now, it seems that you may NOT be eligible to vacate your misdemeanor conviction because your offense was one of the following:",
        body: [
            {
                type: BodyType.LINK,
                text: "RCW 46.61.502 - driving while under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.502",
            },
            {
                type: BodyType.LINK,
                text: "RCW 46.61.504 - actual physical control while under the influence",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=46.61.504",
            },
            {
                type: BodyType.LINK,
                text: "RCW 9.91.020 - operating a railroad, etc. while intoxicated",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.91.020",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "main-3": {
        type: PageType.QUESTION,
        header: 'Was the offense considered a "prior offense" under RCW 46.61.5055?',
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        body: [
            {
                type: BodyType.LINK,
                text: "What is a prior offense? | RCW 46.61.5055 (refer to Section 14 for definitions)",
                href: "https://app.leg.wa.gov/RCW/default.aspx?cite=46.61.5055",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/main-4",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/main-5",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "main-4": {
        type: PageType.QUESTION,
        header: "Did you have an additional alcohol or drug violation within 10 years of the date of arrest for the prior offense?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/main-ineligible-3",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/main-7",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "main-5": {
        type: PageType.QUESTION,
        header: "Was the offense a misdemeanor or gross misdemeanor violation, including attempt of any of the following:",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        body: [
            {
                type: BodyType.LINK,
                text: "Chapter 9.68 RCW - obscenity and pornography",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.68",
            },
            {
                type: BodyType.LINK,
                text: "Chapter 9.68A RCW - sexual exploitation of children",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.68A",
            },
            {
                type: BodyType.LINK,
                text: "Chapter 9A.44 RCW - sex offenses, except for failure to register as a sex offender under RCW 9A.44.132",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9a.44",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/main-ineligible-2",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/main-8",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "main-ineligible-2": {
        type: PageType.QUESTION,
        header: "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction.",
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "Based on RCW 9.96.060, a misdemeanor or gross misdemeanor violation, including attempt of any of the following are not eligible for vacation:",
            },
            {
                type: BodyType.LINK,
                text: "Chapter 9.68 RCW - obscenity and pornography",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.68",
            },
            {
                type: BodyType.LINK,
                text: "Chapter 9.68A RCW - sexual exploitation of children",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9.68A",
            },
            {
                type: BodyType.LINK,
                text: "Chapter 9A.44 RCW - sex offenses, except for failure to register as a sex offender under RCW 9A.44.132",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=9a.44",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "main-ineligible-3": {
        type: PageType.END,
        header: "Unfortunately, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because you have had an additional alcohol or drug violation within 10 years of your prior offense.",
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "main-7": {
        type: PageType.QUESTION,
        header: "Has it been 10 years or more since the date of the arrest for the prior offense?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/main-5",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/main-ineligible-4",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "main-ineligible-4": {
        type: PageType.END,
        header: "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because it has been less than 10 years since your arrest for the prior offense.",
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "You might be eligible when 10 years have passed since your prior offense.",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "main-8": {
        type: PageType.QUESTION,
        header: "Was the offense considered domestic violence against family / household member or spouse / partner?",
        body: [
            {
                type: BodyType.LINK,
                text: "Domestic Violence Information",
                href: "https://www.courts.wa.gov/dv/?fa=dv.guide",
            },
        ],
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/main-9",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/qac-0",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "main-9": {
        type: PageType.QUESTION,
        header: "Have you had 2 or more domestic violence convictions each stemming from different incidents?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/main-ineligible-5",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/main-10",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "main-ineligible-5": {
        type: PageType.END,
        header: "Unfortunately, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because you have had 2 or more domestic violence incidents.",
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "main-10": {
        type: PageType.QUESTION,
        header: "Have 5 or more years passed since fulfillment of all sentencing requirements for this conviction?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/qac-0",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/main-ineligible-6",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "main-ineligible-6": {
        type: PageType.END,
        header: "As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because it has been less than 5 years since the conviction for this offense.",
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "You might be eligible when 5 years have passed since your conviction.",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "fsh-0": {
        type: PageType.SPECIAL,
        header: "You may be eligible for conviction vacation based on a special clause in conviction vacation eligibility law.",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        body: [
            {
                type: BodyType.LINK,
                text: "RCW 9.96.060(4)",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.96.060",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "This clause applies to people convicted for violating fishing regulations who claimed to be exercising a treaty Indian fishing right.",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "We will ask you 4 questions to determine if you may be eligible for Conviction Vacation through this exception.",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.CONTINUE,
                href: CALC_PREFIX + "/fsh-1",
            },
        ],
    },
    "fsh-1": {
        type: PageType.QUESTION,
        header: "Are you a member of a tribe? You can also apply on behalf of a deceased family member in the tribe who meets the criteria.",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/fsh-2",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/fsh-to-main",
            },
        ],
    },
    "fsh-2": {
        type: PageType.QUESTION,
        header: "Did you (or your family member) receive a fishing related conviction while exercising a treaty right?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/fsh-3",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/fsh-to-main",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "fsh-3": {
        type: PageType.QUESTION,
        header: "Was it before January 1st, 1975?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/fsh-4",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/fsh-to-main",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "fsh-4": {
        type: PageType.QUESTION,
        header: "Did your tribe (or your family member's tribe) exercise fishing rights at the location where it occurred?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/fsh-eligible",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/fsh-to-main",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "fsh-eligible": {
        type: PageType.END,
        header: "It seems that you may be eligible to vacate your fishing misdemeanor conviction!",
        progressBar: {
            currentSectionName: SectionName.ELIGIBLE,
        },
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "It looks like your conviction may be one of the following:",
            },
            {
                type: BodyType.LINK,
                text: "RCW 9.96.060 (4)",
                href: "https://app.leg.wa.gov/RCW/default.aspx?cite=9.96.060",
            },
            {
                type: BodyType.HEADING,
                text: "Next steps:",
            },
            {
                type: BodyType.PARAGRAPH,
                text: '1. Fill out a "Petition and Declaration for Order Vacating Conviction" (CrRLJ 09.0100).',
            },
            {
                type: BodyType.LINK,
                text: "CrRLJ 09.0100",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
            },
            {
                type: BodyType.PARAGRAPH,
                text: '2. Read "Instructions for Vacating Misdemeanor and Gross Misdemeanor Convictions" (CrRLJ 09.0300).',
            },
            {
                type: BodyType.LINK,
                text: "CrRLJ 09.0300",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "3. To better understand misdemeanor conviction vacation, please click the link below:",
            },
            {
                type: BodyType.LINK,
                text: "Click here.",
                href: "https://www.washingtonlawhelp.org/resource/get-misdemeanor-convictions-off-your-criminal-record",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "fsh-to-main": {
        type: PageType.MAIN,
        header: "Based on your answers, it looks like you don't fall into the fishing regulation exception.",
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "However, your misdemeanor may still be eligible for conviction vacation through the general eligibility criteria that apply to most misdemeanors.",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.CONTINUE,
                href: CALC_PREFIX + "/main-0",
            },
        ],
    },
    "pro-0": {
        type: PageType.SPECIAL,
        header: "You may be eligible for conviction vacation based on a special clause in conviction vacation eligibility law",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        body: [
            {
                type: BodyType.LINK,
                text: "RCW 9.96.060(3)",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.96.060",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "This clause applies to certain prostitution misdemeanors for victims of prostitution, sex trafficking, and similar crimes.",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "We will ask you a few questions to determine if you may be eligible for Conviction Vacation through this exception.",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.CONTINUE,
                href: CALC_PREFIX + "/pro-1",
            },
        ],
    },
    "pro-1": {
        type: PageType.QUESTION,
        header: "Was the conviction a result of being a victim of one of the following?:",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        body: [
            {
                type: BodyType.LIST,
                items: [
                    "Sex trafficking",
                    "Prostitution",
                    "Commercial sexual abuse of a minor",
                    "Sexual Assault",
                    "Domestic Violence",
                ],
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/pro-2",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/pro-to-main",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "pro-2": {
        type: PageType.QUESTION,
        header: "Do you have charges pending in this state or any other state, or in any federal court for any crime other than prostitution?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/pro-ineligible-2",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/pro-4",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "pro-4": {
        type: PageType.QUESTION,
        header: "Have you been convicted of a new crime in this state, another state or federal or tribal court in the last 3 years/prior to when you will be applying for vacation?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/pro-ineligible-0",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/pro-5",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "pro-5": {
        type: PageType.QUESTION,
        // here
        header: "Has the crime victim penalty assessment, RCW 7.68.035, been paid in full?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "You will need to provide proof except where the conviction to be vacated is for the crime of prostitution, prostitution loitering, or staying out of area of prostitution. The 3 mentioned do not require the victim penalty assessment to be paid in full.",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/pro-6",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/pro-to-main",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "pro-6": {
        type: PageType.QUESTION,
        header: "If applicable, has restitution owed to any victim, excluding restitution owed to any insurance provider under Title 48 RCW, been paid in full?",
        progressBar: {
            currentSectionName: SectionName.OFF,
        },
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "You will need to provide proof except where the conviction to be vacated is for the crime of prostitution, prostitution loitering, or stay out of area of prostitution",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/pro-eligible",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/pro-ineligible-1",
            },
            {
                text: BUTTON_TEXT.NA,
                href: CALC_PREFIX + "/pro-eligible",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "pro-eligible": {
        type: PageType.END,
        header: "It seems that you may be eligible to vacate your prostitution misdemeanor conviction!",
        progressBar: {
            currentSectionName: SectionName.ELIGIBLE,
        },
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "It looks like your conviction may be one of the following:",
            },
            {
                type: BodyType.LINK,
                text: "RCW 9.96.060 (3)",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.96.060",
            },
            {
                type: BodyType.LINK,
                text: " RCW 9.96.080",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.96.080",
            },
            {
                type: BodyType.PARAGRAPH,
                text: ":::::",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "1. Provide an affidavit, under penalty of perjury, stating the specific facts and circumstances proving, by a preponderance of evidence that the offense was committed as a result of being a victim of sex trafficking, prostitution, or commercial sexual abuse of a minor; sexual assault; or domestic violence as defined in RCW 9.94A.030. RCW 9.96.060 Sec. 5(2)(a).",
            },
            {
                type: BodyType.PARAGRAPH,
                text: '2. Fill out a "Petition and Declaration for Order Vacating Conviction" (CrRLJ 09.0100).',
            },
            {
                type: BodyType.LINK,
                text: "CrRLJ 09.0100",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
            },
            {
                type: BodyType.PARAGRAPH,
                text: '3. Read "Instructions for Vacating Misdemeanor and Gross Misdemeanor Convictions" (CrRLJ 09.0300).',
            },
            {
                type: BodyType.LINK,
                text: "CrRLJ 09.0300",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "4. To better understand misdemeanor conviction vacation, please click the link below:",
            },
            {
                type: BodyType.LINK,
                text: "Click here.",
                href: "https://www.washingtonlawhelp.org/resource/get-misdemeanor-convictions-off-your-criminal-record",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "pro-ineligible-0": {
        type: PageType.END,
        header: "In order to qualify for vacation, you cannot have any charges for crimes pending in the last 3 years prior to your application.",
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "pro-ineligible-1": {
        type: PageType.END,
        header: "Unfortunately, you are not eligible for vacation",
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "pro-ineligible-2": {
        type: PageType.END,
        header: "In order to qualify for vacation, you cannot have any charges for crimes pending in this state or any other state besides for prostitution.",
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "pro-to-main": {
        type: PageType.MAIN,
        header: "Based on your response, you are not eligible for this exception. However, your conviction may be eligible under other laws.",
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "Please click below to continue to the main misdemeanor branch.",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.CONTINUE_JOURNEY,
                href: CALC_PREFIX + "/main-0",
            },
        ],
    },
    "qac-0": {
        type: PageType.SPECIAL,
        header: "This set of questions covers other conviction-related circumstances that will affect conviction eligibility.",
        progressBar: {
            currentSectionName: SectionName.CIRC,
        },
        buttons: [
            {
                text: BUTTON_TEXT.CONTINUE,
                href: CALC_PREFIX + "/qac-1",
            },
        ],
    },
    "qac-1": {
        type: PageType.QUESTION,
        header: "Do you have any pending criminal charges in any court in Washington or another state, or in any federal court?",
        progressBar: {
            currentSectionName: SectionName.CIRC,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/qac-ineligible-0",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/qac-2",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "qac-2": {
        type: PageType.QUESTION,
        header: "Have you been convicted of a new crime in Washington or any other state in the 3 years prior to the application for vacation?",
        progressBar: {
            currentSectionName: SectionName.CIRC,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/qac-ineligible-1",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/qac-3",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "qac-3": {
        type: PageType.QUESTION,
        header: "Are you currently restrained by any of the following?: ",
        progressBar: {
            currentSectionName: SectionName.CIRC,
        },
        body: [
            {
                type: BodyType.LIST,
                items: [
                    "a domestic violence protection order",
                    "a no-contact order",
                    "an anti-harassment order",
                    "a civil restraining order which restrains one party from contacting the other party",
                ],
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/qac-ineligible-3",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/qac-4",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "qac-4": {
        type: PageType.QUESTION,
        header: "Have you violated a prior restraining order in the 5 years preceding the application for vacation?",
        progressBar: {
            currentSectionName: SectionName.CIRC,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/qac-ineligible-4",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/too-0",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "qac-ineligible-0": {
        type: PageType.END,
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because you answered YES to the below question:",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "“Do you have any pending criminal charges in any court in Washington or another state, or in any federal court?”",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "You might become eligible in the future if all pending criminal charges in any court in Washington, another state, or a federal court are resolved and if your application meets all other eligibility criteria.",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "qac-ineligible-1": {
        type: PageType.END,
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because you answered YES to the below question: ",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "“Have you been convicted of a new crime in Washington or any other state in the 3 years prior to the application for vacation?”",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "You might become eligible in the future if you apply to vacate a conviction 3 years or more after your convictions for any new crimes, and if your application meets all other eligibility criteria.",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "qac-ineligible-2": {
        type: PageType.END,
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because you answered YES to the below question: ",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "“Have you been convicted of a new crime in Washington or any other state in the 3 years prior to the application for vacation?”",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "You might become eligible in the future if you apply to vacate a conviction 3 years or more after your convictions for any new crimes, and if your application meets all other eligibility criteria.",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "qac-ineligible-3": {
        type: PageType.END,
        header: `As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because you answered YES to the below question: 
                 Are you currently restrained by any of the following?:`,
        body: [
            {
                type: BodyType.LIST,
                items: [
                    "a domestic violence protection order",
                    "a no-contact order",
                    "an anti-harassment order",
                    "a civil restraining order which restrains one party from contacting the other party",
                ],
            },
            {
                type: BodyType.PARAGRAPH,
                text: "You might become eligible in the future if the above orders are removed, and if your application meets all other eligibility criteria.",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "qac-ineligible-4": {
        type: PageType.END,
        body: [
            {
                type: BodyType.PARAGRAPH,
                text: "As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because you answered YES to the below question: ",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "Have you violated a prior restraining order in the 5 years preceding the application for vacation?",
            },
            {
                type: BodyType.PARAGRAPH,
                text: `You might become eligible in the future if at least 5 years pass from your prior restraining order violation and when you apply 
            for vacation, and if your application meets all other eligibility criteria.`,
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "too-0": {
        type: PageType.MAIN,
        header: "This final set of questions covers the terms of your offense.",
        progressBar: {
            currentSectionName: SectionName.TER,
        },
        buttons: [
            {
                text: BUTTON_TEXT.CONTINUE,
                href: CALC_PREFIX + "/too-1",
            },
        ],
    },
    "too-1": {
        type: PageType.QUESTION,
        header: "Have you completed the terms of the sentence for your offense?",
        progressBar: {
            currentSectionName: SectionName.TER,
        },
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/too-2",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/too-ineligible-0",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "too-2": {
        type: PageType.QUESTION,
        header: "Have 3 years passed since completing the terms of your sentence including financial obligations?",
        progressBar: {
            currentSectionName: SectionName.TER,
        },
        body: [
            {
                type: BodyType.LINK,
                text: "Legal financial obligations",
                href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.94A.760",
            },
        ],
        buttons: [
            {
                text: BUTTON_TEXT.YES,
                href: CALC_PREFIX + "/too-eligible-0",
            },
            {
                text: BUTTON_TEXT.NO,
                href: CALC_PREFIX + "/too-ineligible-1",
            },
        ],
        tooltip: TooltipType.NOT_SURE,
    },
    "too-eligible-0": {
        type: PageType.END,
        header: "It seems that you may be eligible to vacate your misdemeanor conviction!",
        progressBar: {
            currentSectionName: SectionName.ELIGIBLE,
        },
        body: [
            {
                type: BodyType.HEADING,
                text: "Next steps:",
            },
            {
                type: BodyType.PARAGRAPH,
                text: '1. Fill out a "Petition and Declaration for Order Vacating Conviction" (CrRLJ 09.0100).',
            },
            {
                type: BodyType.LINK,
                text: "CrRLJ 09.0100",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
            },
            {
                type: BodyType.PARAGRAPH,
                text: '2. Read "Instructions for Vacating Misdemeanor and Gross Misdemeanor Convictions" (CrRLJ 09.0300).',
            },
            {
                type: BodyType.LINK,
                text: "CrRLJ 09.0300",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
            },
            {
                type: BodyType.PARAGRAPH,
                text: "3. To better understand misdemeanor conviction vacation, please click below:",
            },
            {
                type: BodyType.LINK,
                text: "Click here.",
                href: "https://www.washingtonlawhelp.org/resource/get-misdemeanor-convictions-off-your-criminal-record",
            },
        ],
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "too-ineligible-0": {
        type: PageType.END,
        header: `As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because you have not completed the terms of the conviction for this offense.  
                You might be eligible when you've completed the terms of your conviction and 3 years have passed since the completion of your sentence, 
                including any financial obligations.`,
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
    "too-ineligible-1": {
        type: PageType.END,
        header: `As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because it has been less than 3 years since your 
                conviction was completed including your financial obligations.
                You might be eligible when 3 years have passed since completing the terms of your conviction including any financial obligations.`,
        buttons: [
            {
                text: FEEDBACK_BUTTON_TEXT,
                href: ELIGIBLE_INELIGIBLE_FEEDBACK_FORM_LINK,
            },
        ],
        showRestartButton: true,
        disclaimer,
    },
};

export default data;
