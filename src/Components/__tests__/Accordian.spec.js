import react from 'react';
import {shallow} from 'enzyme';

import FAQAccordian from '../Accordion';

describe("<FAQAccordian", () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<FAQAccordian />)
    });

    describe("ui", () => {
        it.todo("renders the summary");
        it.todo("renders the details");
        it.todo("renders the text");
    });

    describe("clicking the accordion", () => {
        it.todo("opens the accordian");
        it.todo("closes the accordian");
    });
})