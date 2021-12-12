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

    describe("ui", () => {
        it("should render a modal", () => {
            expect(wrapper.exists(Modal)).toEqual(true);
        });
        
        it("should render a button", () => {
            expect(wrapper.exists(Button)).toEqual(true);
        });

        it("should render correct text on the button", () => {
            expect(wrapper.find(Button).text()).toEqual("test");
        });
    });

    describe("clicking on the button", () => {
        it("should open the modal", () => {
            expect(wrapper.find(Modal).props().open).toEqual(false);
            wrapper.find(Button).simulate('click');
            expect(wrapper.find(Modal).props().open).toEqual(true);
        });
    });
    
    describe("clicking outside the modal", ()=> {
        it("should close the modal", () => {
            wrapper.find(Button).simulate("click");
            expect(wrapper.find(Modal).prop("open")).toEqual(true);
            wrapper.find(Backdrop).simulate('click');
            expect(wrapper.find(Modal).prop("open")).toEqual(false);

        })
    })
});
