import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Button from './Button';

beforeAll(() => {
  jest.spyOn(global.console, 'error').mockImplementation(warning => {
    throw new Error(warning);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

it('renders correctly without error', () => {
  const props = {
    label: 'Button',
    onClick: jest.fn(),
  };
  const output = shallow(<Button {...props} />);
  expect(shallowToJson(output)).toMatchSnapshot();
});

it('should handle click event passed via props', () => {
  const mockFn = jest.fn();
  const props = {
    label: 'Button',
    onClick: mockFn,
  };
  const output = shallow(<Button {...props} />);
  output.simulate('click');
  expect(mockFn).toHaveBeenCalled();
});

it('should not be disabled by default', () => {
  const props = {
    label: 'Button',
    onClick: jest.fn(),
  };
  const wrapper = shallow(<Button {...props} />);
  expect(wrapper.props().disabled).toBe(false);
});

it('should be disabled if passed via props', () => {
  const props = {
    label: 'Button',
    onClick: jest.fn(),
    disabled: true,
  };
  const wrapper = shallow(<Button {...props} />);
  expect(wrapper.props().disabled).toBe(true);
});
