import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Button from './Button';

it('should render correctly without error', () => {
  const props = {
    label: 'Button',
    onClick: jest.fn(),
  };
  const output = shallow(<Button {...props} />);
  expect(shallowToJson(output)).toMatchSnapshot();
});

it('should console log error if not passed a label via props', () => {
  const props = {
    onClick: jest.fn(),
  };
  expect(() => <Button {...props} />).toThrow();
});

it('should console log error if not passed an onClick function via props', () => {
  const props = {
    label: 'Button',
  };
  expect(() => <Button {...props} />).toThrow();
});

it(`should have a default type of "button"`, () => {
  const props = {
    label: 'Button',
    onClick: jest.fn(),
  };
  const wrapper = shallow(<Button {...props} />);
  expect(wrapper.props().type).toBe('button');
});

it(`should console log error if passed a type other than "submit", "reset" or "button", via props`, () => {
  const props = {
    label: 'Button',
    onClick: jest.fn(),
    type: 'notsubmit',
  };
  expect(() => <Button {...props} />).toThrow();
});

it(`should have a type of "submit" if passed via props`, () => {
  const props = {
    label: 'Button',
    onClick: jest.fn(),
    type: 'submit',
  };
  const wrapper = shallow(<Button {...props} />);
  expect(wrapper.props().type).toBe('submit');
});

it(`should have a type of "reset" if passed via props`, () => {
  const props = {
    label: 'Button',
    onClick: jest.fn(),
    type: 'reset',
  };
  const wrapper = shallow(<Button {...props} />);
  expect(wrapper.props().type).toBe('reset');
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
