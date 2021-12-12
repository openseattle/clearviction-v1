import react from 'react';
import {shallow} from 'enzyme';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import Text from '../../ui-kit/Text';
import FAQAccordian from '../Accordion';

describe("<FAQAccordian />", () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<FAQAccordian />)
    });

    describe("ui", () => {
        it("renders accordian elements", () => {
            expect(wrapper.exists(Accordion)).toEqual(true);
        });
        it("renders the summarys", () => {
            expect(wrapper.exists(AccordionSummary)).toEqual(true);
        });
        it("renders the details", () => {
            expect(wrapper.exists(AccordionDetails)).toEqual(true);
        });
        it("renders the text", () => {
            expect(wrapper.exists(Text)).toEqual(true);
        });
    });

    describe("clicking the accordion", () => {
        it.todo("opens the accordian");
        it.todo("closes the accordian");
    });
})