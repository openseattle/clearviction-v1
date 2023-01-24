import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AccordionDetailsProps,
    AccordionSummaryProps,
    AccordionProps,
} from "@mui/material";

// type AccordionBaseProps = Pick<MuiAccordionProps>;

// export interface AccordionProps extends AccordionProps {}

export const MuiAccordion = ({ children, ...rest }: AccordionProps) => <Accordion {...rest}>{children}</Accordion>;
