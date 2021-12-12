import react from 'react';
import { mount, shallow } from 'enzyme';

import AboutDetails from '../AboutDetails';


describe("<AboutDetails />", () => {
    describe('ui', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<AboutDetails />)
        });

        it('should render container', () => {
            expect(wrapper.exists('.container-sm')).toEqual(true);
        });
        it('should render an image', () => {
            expect(wrapper.exists('.about-img')).toEqual(true);
        });
        it('should render a title', () => {
            expect(wrapper.exists('#about-title')).toEqual(true);
        });
        it('should render a h5 for a name', () => {
            expect(wrapper.exists('h5')).toEqual(true);
        });
        it('should render a description', () => {
            expect(wrapper.exists('p')).toEqual(true);
        });

        describe('content', () => {
            let wrapperMounted;
            beforeEach( () => {
                wrapperMounted= mount(
                    <AboutDetails 
                        name = {'test'}
                        image = {[]}
                        title = {'test title'}
                        description = {'test desc'}/>
                );
            });
           
            it('text should match prop name value', () => {
                expect(wrapperMounted.find('h5').text()).toEqual('test');
            });
            it('text should match prop title value', () => {
                expect(wrapperMounted.find('#about-title').text()).toEqual('test title');
            });
            it('text should match prop description value', () => {
                expect(wrapperMounted.find('p').text()).toEqual('test desc');
            });
        });
    });
});