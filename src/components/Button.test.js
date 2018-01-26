/* eslint-env jest */
import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

it('renders given label', () => {
  const wrapper = shallow(<Button label="My Label" />);
  expect(wrapper.find('button').text()).toEqual('My Label');
});
