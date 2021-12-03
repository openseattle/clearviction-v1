import React from 'react';
import {mount, shallow} from 'enzyme';
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

    it("displays passed in props tooltip data on the button", () => {
        const wrapper = mount(<ToolTipModel text={"test"}/>);
        expect(wrapper.props().text).toEqual("test");

        const button = wrapper.find(Button);
        expect(button.text()).toEqual("test");
    })

});
