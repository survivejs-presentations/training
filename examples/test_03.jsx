import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import CatsSeen from '../app/CatsSeen.jsx';

describe('CatsSeen', () => {
  it('renders children', () => {
    const test = 5;
    const wrapper = shallow(<CatsSeen>{test}<CatsSeen>);

    assert.equal(wrapper.props().children, test);
  });
});
