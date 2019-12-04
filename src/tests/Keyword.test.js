// Have test case implemented (simple snapshot testing is sufficient)

import { shallow } from 'enzyme';
import React from 'react';

import Keyword from '../components/Keyword';

test('should render Keyword correctly', () => {
    console.log('testing');
    const wrapper = shallow(<Keyword keyword={"Test keyword"}/>);
    expect(wrapper.find('li').length).toBe(1);
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Keyword keyword={"Test keyword"}/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});