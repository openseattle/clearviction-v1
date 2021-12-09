import React from 'react';
import {mount} from 'enzyme';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Button  from '@mui/material/Button';

import ToolTipModal from '../ToolTipModal';

describe("<ToolTipModal />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ToolTipModal text={"test"} />)
    })

    it("renders a modal", () => {
        expect(wrapper.find(Modal)).toHaveLength(1);
    });

    it("renders a button", () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    it("displays passed in props tooltip data on the button", () => {
        expect(wrapper.find(Button).text()).toEqual("test");
    })

    it("simulates button opening and closing modal", () => {
        expect(wrapper.find(Modal).props().open).toBe(false);
        wrapper.find(Button).simulate('click');
        expect(wrapper.find(Modal).props().open).toBe(true);
        wrapper.find(Backdrop).simulate('click');
        expect(wrapper.find(Modal).props().open).toBe(false);
    })
});
