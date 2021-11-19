import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../Footer'

describe("Footer", () => {
    let footer;

    beforeEach((q)=>{
            footer = shallow(<Footer />);
        }
    );
    
    it("Should be a footer", () => {
        
        expect(footer.find(".footer-cont")).toHaveLength(1);
    })

    it("Should have links",  () => {
        const link = () => <a className="test-link" href="https://www.test.org/"><ul>test</ul></a>
        expect(footer.containsMatchingElement(link)).toEqual(true);
    })
});