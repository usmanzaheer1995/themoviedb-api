// Have test case implemented (simple snapshot testing is sufficient)

import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';

import Keyword from '../components/Keyword';

test('should render Keyword correctly', () => {
    const wrapper = shallow(<Keyword keyword={"Test keyword"} />);
    expect(wrapper).toMatchSnapshot();
});