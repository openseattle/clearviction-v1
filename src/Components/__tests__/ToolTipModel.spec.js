import React from 'react';
import {mount, render, shallow} from 'enzyme';
import Modal from '@mui/material/Modal';
import Button  from '@mui/material/Button';

import ToolTipModel from '../ToolTipModal';

describe("<ToolTipModal />", () => {
    it("renders a modal", () => {
        const wrapper = shallow(<ToolTipModel />);
        expect(wrapper.find(Modal)).toHaveLength(1);
    });

    it("renders a button", () => {
        const wrapper = shallow(<ToolTipModel />);
        expect(wrapper.find(Button)).toHaveLength(1);
    });

});
