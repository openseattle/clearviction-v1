import React from "react";
import { useLocation } from "react-router-dom";
import { Typography, DialogTitle, DialogContent, DialogContentText, CardMedia } from "@mui/material";
import { QuestionScreenStyles } from "../Pages/Calculator/QuestionScreenStyles";
import { ExternalLink } from "./ExternalLink";
import RAPSheet from "../Assets/RAPSheet.png";

const CalulatorDialog = props => {
    const classes = QuestionScreenStyles();
    const location = useLocation();

    return (
        <>
            <DialogTitle>Not sure of the answer?</DialogTitle>
            <DialogContent>
                <DialogContentText style={{ color: "black" }}>
                    <Typography style={{ marginBottom: "1rem" }}>
                        Let's find the answer in your RAP (Record of Arrests and Prosecutions) sheet.
                    </Typography>
                    <Typography style={{ marginBottom: "1rem" }}>
                        You can request for your Criminal History Record{" "}
                        <ExternalLink
                            target="_blank"
                            href="https://www.wsp.wa.gov/crime/criminal-history"
                            rel="noreferrer"
                        >
                            here.
                        </ExternalLink>
                    </Typography>
                    <Typography>If you have your RAP sheet:</Typography>
                    <ol>
                        <li style={{ marginBottom: ".75rem" }}>
                            Refer to Section <strong>"6: CONVICTION AND/OR ADVERSE FINDING SUMMARY"</strong> (see the
                            image below for an example)
                        </li>

                        {location.pathname.includes("/calculator/landing-2") ? (
                            <>
                                <li style={{ marginBottom: ".75rem" }}>
                                    Look at the subheading your conviction is under.
                                </li>
                                <li style={{ marginBottom: ".75rem" }}>
                                    If the conviction is under the subheading <b>GROSS MISDEMEANORS</b> or{" "}
                                    <b>MISDEMEANOR</b>, select <u>YES</u> for this question.
                                </li>
                                <li style={{ marginBottom: ".75rem" }}>
                                    If the conviction is under the <b>FELONYS</b> or <b>CLASSIFICATIONS UNKOWNN</b>,
                                    select <u>NO</u> for this question.
                                </li>
                                <div className={classes.dialogImg}>
                                    <img src={RAPSheet} />
                                </div>
                            </>
                        ) : location.pathname.includes("/calculator/landing-3") ? (
                            <>
                                <li style={{ marginBottom: ".75rem" }}>
                                    Look for the subheadings{" "}
                                    <b>
                                        MISDEMEANORS<b> and </b>GROSS MISDEMEANORS
                                    </b>
                                    .
                                </li>
                                <li style={{ marginBottom: ".75rem" }}>
                                    Under the respective subheadings, find the misdemeanor you're looking for. If it
                                    specifically mentions <u>possession of marijuana</u> or <u>prositution</u>, select
                                    the answer accordingly. If none of these are mentioned, but it IS a misdemeanor, you
                                    may select "None of the above"
                                </li>
                                <div className={classes.dialogImg}>
                                    <img src={RAPSheet} />
                                </div>
                            </>
                        ) : (
                            <>
                                <li>
                                    Below, find the misdemeanor you're looking to vacate. If it references any of the
                                    following offenses that are defined as "Violent Offenses", then this misdemeanor is{" "}
                                    <u>NOT</u> eligible to vacate.
                                </li>
                            </>
                        )}
                    </ol>
                    {location.pathname.includes("/calculator/main-1") ? (
                        <>
                            <Typography style={{ marginBottom: ".75rem" }}>
                                <b>Violent Offenses are defined as the following (see</b>{" "}
                                <b>
                                    <ExternalLink href="https://apps.leg.wa.gov/rcw/default.aspx?cite=9.94A.030">
                                        RCW 9.94A.030(58)
                                    </ExternalLink>
                                    ):
                                </b>
                            </Typography>
                            <Typography>
                                <b>(a)</b> Any of the following felonies:
                            </Typography>
                            <ul>
                                <li>
                                    Any felony defined under any law as a class A felony or an attempt to commit a class
                                    A felony;
                                </li>
                                <li>Criminal solicitation of or criminal conspiracy to commit a class A felony;</li>
                                <li>Manslaughter in the first degree;</li>
                                <li>Manslaughter in the second degree;</li>
                                <li>Indecent liberties if commited by forcible compulsion;</li>
                                <li>Kidnapping in the second degree;</li>
                                <li>Arson in the second degree;</li>
                                <li>Assault in the second degree;</li>
                                <li>Assault of a child in the second degree;</li>
                                <li>Extortion in the first degree;</li>
                                <li>Robbery in the second degree;</li>
                                <li>
                                    Vehicular assault, when caused by the operation or driving of a vehicle by a person
                                    while under the influence of intoxicating liquor or any drug or by the operation or
                                    driving of a vehicle in a reckless manner; and
                                </li>
                                <li>
                                    Vehicular homicide, when proximately caused by the driving of any vehicle by any
                                    person while under the influence of intoxicating liquor or any drug as defined by{" "}
                                    <ExternalLink href="https://apps.leg.wa.gov/rcw/default.aspx?cite=46.61.502">
                                        RCW 46.61.502
                                    </ExternalLink>
                                    , or by the operation of any vehicle in a reckless manner;
                                </li>
                            </ul>
                            <Typography style={{ marginBottom: ".75rem" }}>
                                <b>(b)</b> Any conviction for a felony offense in effect at any time prior to July 1,
                                1976, that is comparable to a felony classified as a violent offense in (a) of this
                                subsection; and
                            </Typography>
                            <Typography style={{ marginBottom: ".75rem" }}>
                                <b>(c)</b> Any federal or out-of-state conviction for an offense that under the laws of
                                this state would be a felony classified as a violent offense under (a) or (b) of this
                                subsection.
                            </Typography>
                            <Typography>
                                <b>"Serious violent Offense" is a subcategory of "violent offense" (see</b>{" "}
                                <b>
                                    <ExternalLink href="https://apps.leg.wa.gov/rcw/default.aspx?cite=9.94A.030">
                                        RCW 9.94A.030(46)
                                    </ExternalLink>
                                    )
                                </b>
                            </Typography>
                            <Typography>
                                <b>(a)</b>
                            </Typography>
                            <ul>
                                <li>Murder in the frist degree;</li>
                                <li>Homicide by abuse;</li>
                                <li>Murder in the second degree;</li>
                                <li>Manslaughter in the first degree;</li>
                                <li>Assault in the first degree;</li>
                                <li>Kidnapping in the first degree;</li>
                                <li>Rape in the first degree;</li>
                                <li>Assault of a child in the first degree; or</li>
                                <li>
                                    An attempt, criminal solicitation, or criminal conspiracy to commit one of these
                                    felonies; or
                                </li>
                            </ul>
                            <Typography>
                                <b>(b)</b> Any federal or out-of-state conviction for an offense that under the laws of
                                this state would be a felony classified as a serious violent offense under (a) of this
                                subsection.
                            </Typography>
                        </>
                    ) : (
                        ""
                    )}
                </DialogContentText>
            </DialogContent>
        </>
    );
};

export default CalulatorDialog;
