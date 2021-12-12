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
            expect(wrapper.find(Accordion)).not.toHaveLength(0);
        });
        it("renders the summarys", () => {
            expect(wrapper.find(AccordionSummary)).not.toHaveLength(0);
        });
        it("renders the details", () => {
            expect(wrapper.find(AccordionDetails)).not.toHaveLength(0);
        });
        it("renders the text", () => {
            expect(wrapper.find(Text)).not.toHaveLength(0);
        });
    });

    describe("clicking the accordion", () => {
        it.todo("opens the accordian");
        it.todo("closes the accordian");
    });
})