import React from "react";
import {cleanup, render} from '@testing-library/react';

import Footer from "../Footer";

describe('<Footer />', () => {

    afterEach(cleanup);

    it('should have footer styling', () => {
        const {getByRole} = render(<Footer />);

        const footerElementHTML = getByRole('contentinfo');
        
        expect(footerElementHTML.className).toEqual('footer-cont');

        
    })

    it('should have 3 links', () => {
        const {getAllByRole} = render(<Footer />);
        const links = getAllByRole('link');

        expect(links).toHaveLength(3);
    })
  
})