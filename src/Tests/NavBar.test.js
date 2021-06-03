import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../Components/NavBar';

describe("NavBar component", () => {
    //smoke test: Why - Build Verification
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter> <NavBar/> </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    /*snapshot test: Why - You can see if our component is rendering correctly
    Any changes to to the Dom of NavBar will result in a failed snapshot test.
    We just need to press "w" to activate watch mode then press "u" to update the snapshot.
    our snap shot file will be automatically updated with the new snapshot and will pass our tests*/
    it('renders NavBar by default', () => {
        const wrapper = shallow(<NavBar />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})