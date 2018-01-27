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

it('should handle the click event', () => {
  const mockFn = jest.fn();
  const props = {
    label: 'Button',
    onClick: mockFn,
  };
  const output = shallow(<Button {...props} />);
  output.simulate('click');
  expect(mockFn).toHaveBeenCalled();
});
