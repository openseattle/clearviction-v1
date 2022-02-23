/**
 * This file contains all page content for the calculator. Routes are handled dynamically using the top-level keys of
 * the object exported from this file. For example, the data within the key "landing-0" is populated by
 * Calculator.jsx at the route: /calculator/landing-0. This route can then be linked to from other pages.
 *
 * See calculatorPagesTypes.ts for schema to identify the available page types and required fields.
 */

import {
  Pages,
  BodyType,
  TooltipType,
  BUTTON_TEXT,
  SectionName,
} from "./calculatorPagesTypes";

const CALC_PREFIX = "/calculator";
const disclaimer =
  "The information provided by the Conviction Vacation Project is not intended to replace legal advice and does not in any way constitute an attorney-client relationship. If you need legal advice or assistance, we strongly recommend that you reach out to a licensed professional.";

const data: Pages = {
  "landing-0": {
    header: "Misdemeanor Calculator",
    body: [
      {
        type: BodyType.PARAGRAPH,
        text: "You can use our eligibility calculator to determine whether you are eligible to vacate your misdemeanor conviction.",
      },
    ],
    buttons: [
      {
        text: BUTTON_TEXT.NEXT,
        href: CALC_PREFIX + "/landing-1",
      },
    ],
    tooltip: TooltipType.NOT_A_MISDEMEANOR,
  },
  "landing-1": {
    header: "Quick Start Guide",
    body: [
      {
        type: BodyType.PARAGRAPH,
        text: "Going through this calculator is expected to take 10-30 minutes.",
      },
      {
        type: BodyType.PARAGRAPH,
        text: "You will need to know:",
      },
      {
        type: BodyType.LIST,
        items: [
          "The date and violation of your misdemeanor conviction",
          "If and when you completed the terms of your sentence",
          "Pending charges and/or new convictions",
          "Any court orders against you*",
        ],
      },
      {
        type: BodyType.PARAGRAPH,
        text: "*Court orders include:",
      },
      {
        type: BodyType.LIST,
        items: [
          "A domestic violence protection order",
          "A no-contact order",
          "An anti-harassment order",
          "A civil restraining order",
        ],
      },
    ],
    buttons: [
      {
        text: BUTTON_TEXT.START,
        href: CALC_PREFIX + "/landing-2",
      },
    ],
    tooltip: TooltipType.NOT_A_MISDEMEANOR,
  },
  "landing-ineligible-0": {
    header: "Our calculator can't determine your eligibility",
    body: [
      {
        type: BodyType.PARAGRAPH,
        text: "It looks like your conviction may not be a misdemeanor. Our calculator is unable to assist you with your conviction at this point. We would like to hear your input and learn about your experience as we continue building our calculator.",
      },
    ],
    footerLink: {
      text: "Take Survey",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeuT2oIBnxFAMv6p8tsujNlSugWxFS5la4DUC4rTFekInrcqQ/viewform?usp=sf_link",
    },
  },
  "landing-2": {
    header: "Was this offense a misdemeanor?",
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
    header: "Does your conviction fall into any of these special cases?",
    buttons: [
      {
        text: "Possession of marijuana misdemeanor",
        href: CALC_PREFIX + "/mar-0",
      },
      {
        text: "Prostitution misdemeanor",
        href: CALC_PREFIX + "/pro-0",
      },
      {
        text: "Violation of a fishing regulation",
        href: CALC_PREFIX + "/fsh-0",
      },
      {
        text: "My conviction doesn't fall into any of the special cases (most convictions fall in this category)",
        href: CALC_PREFIX + "/main-0",
        color: "green",
      },
    ],
    tooltip: TooltipType.NOT_SURE,
  },
  "mar-0": {
    header:
      "You may be eligible for conviction vacation based on a special clause in conviction vacation eligibility law.",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
    },
    body: [
      {
        type: BodyType.LINK,
        text: "RCW 9.96.060(5)",
        href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.96.060",
      },
      {
        type: BodyType.PARAGRAPH,
        text: "This clause applies to certain marijuana misdemeanors for possession of 40g or less.",
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
    header: "Did this offense involve possession of marijuana?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header: "Were you 21 years or older at the time of offense?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "Was your conviction for possession of 40 grams or less of marijuana?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header: "Have you completed the terms of your sentence for this offense?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "As of now, it seems that you may NOT be eligible to vacate your marijuana misdemeanor conviction because you have not completed the terms of your offense.",
    disclaimer,
  },
  "mar-eligible-0": {
    header:
      "From your answers, it seems that you may be eligible to vacate your marijuana misdemeanor conviction!",
    progressBar: {
      currentSectionName: SectionName.ELIGIBLE,
      totalSections: 3,
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
        text: "RCW 69.50.401(d)",
        href: "https://leg.wa.gov/CodeReviser/documents/sessionlaw/1971ex1c308.pdf?cite=1971%20ex.s.%20c%20308%20§%2069.50.406",
      },
      {
        type: BodyType.PARAGRAPH,
        text: "(Possession of 40 grams or less of marijuana)",
      },
      {
        type: BodyType.PARAGRAPH,
        text: "Next steps",
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
    disclaimer,
  },
  "mar-ineligible-1": {
    header:
      "As of now, it seems that you may NOT be eligible to vacate your marijuana misdemeanor conviction because you have not completed the terms of your offense.",
    disclaimer,
  },
  "mar-ineligible-2": {},
  "mar-to-main": {
    header:
      "Based on your response, it looks like you don't qualify for the marijuana misdemeanor exception.",
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
    header:
      "We will now ask a few questions about what your conviction was for, to assess your eligibility to vacate the conviction.",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
    },
    buttons: [
      {
        text: BUTTON_TEXT.CONTINUE,
        href: CALC_PREFIX + "/main-1",
      },
    ],
  },
  "main-1": {
    header:
      "Was your conviction a violent offense as defined in RCW 9.94A.030 or an attempt to commit a violence offense?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
    },
    body: [
      {
        type: BodyType.LINK,
        text: "RCW 9.94A.030",
        href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.94A.030",
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
    header:
      "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because your conviction is classified as a violent offense as defined in RCW 9.94A.030.",
    body: [
      {
        type: BodyType.LINK,
        text: "RCW 9.94A.030",
        href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.94A.030",
      },
    ],
    disclaimer,
  },
  "main-2": {
    header: "Was the offense was a violation of any of the following?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
    },
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
    header:
      "As of now, it seems that you may NOT be eligible to vacate your misdemeanor conviction because your offense was one of the following:",
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
    disclaimer,
  },
  "main-3": {
    header:
      'Was the offense considered a "prior offense" under RCW 46.61.5055?',
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "Did you have an additional alcohol or drug violation within 10 years of the date of arrest for the prior offense?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "Was the offense a misdemeanor or gross misdemeanor violation, including attempt of any of the following:",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction.",
    body: [
      {
        type: BodyType.PARAGRAPH,
        text: "Based on RCW 9.94A.640, a misdemeanor or gross misdemeanor violation, including attempt of any of the following are not eligible for vacation:",
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
    disclaimer,
  },
  "main-ineligible-3": {
    header:
      "Unfortunately, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because you have had an additional alcohol or drug violation within 10 years of your prior offense.",
    disclaimer,
  },
  "main-7": {
    header:
      "Has it been 10 years or more since the date of the arrest for the prior offense?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "As of now, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because it has been less than 10 years since your arrest for the prior offense.",
    body: [
      {
        type: BodyType.PARAGRAPH,
        text: "You might be eligible when 10 years have passed since your prior offense.",
      },
    ],
    disclaimer,
  },
  "main-8": {
    header:
      "Was the offense considered domestic violence against family / household member or spouse / partner?",
    body: [
      {
        type: BodyType.LINK,
        text: "Domestic Violence Information",
        href: "https://www.courts.wa.gov/dv/?fa=dv.guide",
      },
    ],
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "Have you had 2 or more domestic violence convictions each stemming from different incidents?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "Unfortunately, it seems that you may NOT be eligible to vacate your  misdemeanor conviction because you have had 2 or more domestic violence incidents.",
    disclaimer,
  },
  "main-10": {
    header:
      "Have 5 or more years passed since fulfillment of all sentencing requirements for this conviction?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because it has been less than 5 years since the conviction for this offense.",
    body: [
      {
        type: BodyType.PARAGRAPH,
        text: "You might be eligible when 5 years have passed since your conviction.",
      },
    ],
    disclaimer,
  },
  "fsh-0": {
    header:
      "You may be eligible for conviction vacation based on a special clause in conviction vacation eligibility law.",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "Are you a member of a tribe? You can also apply on behalf of a deceased family member in the tribe who meets the criteria.",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    tooltip: TooltipType.NOT_SURE,
  },
  "fsh-2": {
    header:
      "Did you (or your family member) receive a fishing related conviction while exercising a treaty right?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header: "Was it before January 1st, 1975?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "Did your tribe (or your family member's tribe) exercise fishing rights at the location where it occurred?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "It seems that you may be eligible to vacate your fishing misdemeanor conviction!",
    progressBar: {
      currentSectionName: SectionName.ELIGIBLE,
      totalSections: 3,
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
        type: BodyType.PARAGRAPH,
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
    disclaimer,
  },
  "fsh-to-main": {
    header:
      "Based on your answers, it looks like you don't fall into the fishing regulation exception.",
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
    header:
      "You may be eligible for conviction vacation based on a special clause in conviction vacation eligibility law",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "Were you convicted of a crime involving prostitution? OR are you a family member of a homicide victim seeking to vacate the deceased victim's prostitution conviction?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
    },
    buttons: [
      {
        text: BUTTON_TEXT.YES,
        href: CALC_PREFIX + "/pro-2",
      },
      {
        text: BUTTON_TEXT.NO,
        href: CALC_PREFIX + "/pro-ineligible-3",
      },
    ],
    tooltip: TooltipType.NOT_SURE,
  },
  "pro-2": {
    header:
      "Was the conviction a result of being a victim of one of the following:",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
    },
    body: [
      {
        type: BodyType.LIST,
        items: [
          "Human trafficking",
          "First-degree promotion of prostitution",
          "Promotion of commercial sexual abuse of a minor",
        ],
      },
    ],
    buttons: [
      {
        text: BUTTON_TEXT.YES,
        href: CALC_PREFIX + "/pro-4",
      },
      {
        text: BUTTON_TEXT.NO,
        href: CALC_PREFIX + "/pro-3",
      },
    ],
    tooltip: TooltipType.NOT_SURE,
  },
  "pro-3": {
    header:
      "Is the prosecutor of your crime applying for conviction vacation on behalf of the state?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
    },
    buttons: [
      {
        text: BUTTON_TEXT.YES,
        href: CALC_PREFIX + "/pro-4",
      },
      {
        text: BUTTON_TEXT.NO,
        href: CALC_PREFIX + "/pro-ineligible-3",
      },
    ],
    tooltip: TooltipType.NOT_SURE,
  },
  "pro-4": {
    header:
      "Do you have charges pending in this state or any other state other than for prostitution?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
    },
    buttons: [
      {
        text: BUTTON_TEXT.YES,
        href: CALC_PREFIX + "/pro-ineligible-2",
      },
      {
        text: BUTTON_TEXT.NO,
        href: CALC_PREFIX + "/pro-5",
      },
    ],
    tooltip: TooltipType.NOT_SURE,
  },
  "pro-5": {
    header:
      "Have you been convicted of another crime in the last 3 years/prior to when you will be applying for vacation?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
    },
    buttons: [
      {
        text: BUTTON_TEXT.YES,
        href: CALC_PREFIX + "/pro-ineligible-0",
      },
      {
        text: BUTTON_TEXT.NO,
        href: CALC_PREFIX + "/pro-6",
      },
    ],
    tooltip: TooltipType.NOT_SURE,
  },
  "pro-6": {
    header:
      "Has the crime victim penalty assessment, RCW 7.68.035, been paid in full?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
    },
    body: [
      {
        type: BodyType.PARAGRAPH,
        text: "You will need to provide proof except where the conviction to be vacated is for the crime of prostitution, prostitution loitering, or violation of an order to stay out of areas of prostitution.",
      },
    ],
    buttons: [
      {
        text: BUTTON_TEXT.YES,
        href: CALC_PREFIX + "/pro-7",
      },
      {
        text: BUTTON_TEXT.NO,
        href: CALC_PREFIX + "/pro-ineligible-1",
      },
    ],
    tooltip: TooltipType.NOT_SURE,
  },
  "pro-7": {
    header:
      "If applicable, has restitution owed to any victim, excluding restitution owed to any insurance provider under Title 48 RCW, been paid in full?",
    progressBar: {
      currentSectionName: SectionName.CONV,
      totalSections: 3,
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
    header:
      "It seems that you may be eligible to vacate your prostitution misdemeanor conviction!",
    progressBar: {
      currentSectionName: SectionName.ELIGIBLE,
      totalSections: 3,
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
        text: "RCW 9.96.070",
        href: "https://apps.leg.wa.gov/rcw/default.aspx?cite=9.96.060",
      },
      {
        type: BodyType.PARAGRAPH,
        text: "Next steps:",
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
    disclaimer,
  },
  "pro-ineligible-0": {
    header:
      "In order to qualify for vacation, you cannot have any charges for crimes pending in the last 3 years prior to your application.",
    disclaimer,
  },
  "pro-ineligible-1": {
    header: "Unfortunately, you are not eligible for vacation",
    disclaimer,
  },
  "pro-ineligible-2": {
    header:
      "In order to qualify for vacation, you cannot have any charges for crimes pending in this state or any other state besides for prostitution.",
    disclaimer,
  },
  "pro-ineligible-3": {
    header:
      "Based on your answers, it looks like you don't qualify for the victim of prostitution exception.",
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
    disclaimer,
  },
  "pro-to-main": {
    header:
      "Based on your response, you are not eligible for this exception. However, your conviction may be eligible under other laws.",
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
    header:
      "This set of questions covers other conviction-related circumstances that will affect conviction eligibility.",
    progressBar: {
      currentSectionName: SectionName.CIRC,
      totalSections: 3,
    },
    buttons: [
      {
        text: BUTTON_TEXT.CONTINUE,
        href: CALC_PREFIX + "/qac-1",
      },
    ],
  },
  "qac-1": {
    header:
      "Do you have any pending criminal charges in any court in Washington or another state, or in any federal court?",
    progressBar: {
      currentSectionName: SectionName.CIRC,
      totalSections: 3,
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
    header:
      "Have you been convicted of a new crime in Washington or any other state in the 3 years prior to the application for vacation?",
    progressBar: {
      currentSectionName: SectionName.CIRC,
      totalSections: 3,
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
    header: "Are you currently restrained by any of the following: ",
    progressBar: {
      currentSectionName: SectionName.CIRC,
      totalSections: 3,
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
    header:
      "Have you violated a prior restraining order in the 5 years preceding the application for vacation?",
    progressBar: {
      currentSectionName: SectionName.CIRC,
      totalSections: 3,
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
    disclaimer,
  },
  "qac-ineligible-1": {
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
    disclaimer,
  },
  "qac-ineligible-2": {
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
    disclaimer,
  },
  "qac-ineligible-3": {
    header: `As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because you answered YES to the below question: 
                 Are you currently restrained by any of the following:`,
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
    disclaimer,
  },
  "qac-ineligible-4": {
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
    disclaimer,
  },
  "too-0": {
    header: "This final set of questions covers the terms of your offense.",
    progressBar: {
      currentSectionName: SectionName.TER,
      totalSections: 3,
    },
    buttons: [
      {
        text: BUTTON_TEXT.CONTINUE,
        href: CALC_PREFIX + "/too-1",
      },
    ],
  },
  "too-1": {
    header: "Have you completed the terms of the sentence for your offense?",
    progressBar: {
      currentSectionName: SectionName.TER,
      totalSections: 3,
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
    header:
      "Have 3 years passed since completing the terms of your sentence including financial obligations?",
    progressBar: {
      currentSectionName: SectionName.TER,
      totalSections: 3,
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
    header:
      "It seems that you may be eligible to vacate your misdemeanor conviction!",
    progressBar: {
      currentSectionName: SectionName.ELIGIBLE,
      totalSections: 3,
    },
    body: [
      {
        type: BodyType.PARAGRAPH,
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
    disclaimer,
  },
  "too-ineligible-0": {
    header: `As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because you have not completed the terms of the conviction for this offense.  
                You might be eligible when you've completed the terms of your conviction and 3 years have passed since the completion of your sentence, 
                including any financial obligations.`,
    disclaimer,
  },
  "too-ineligible-1": {
    header: `As of now, it seems that you may NOT be eligible to vacate this misdemeanor conviction because it has been less than 3 years since your 
                conviction was completed including your financial obligations.
                You might be eligible when 3 years have passed since completing the terms of your conviction including any financial obligations.`,
    disclaimer,
  },
};

export default data;
