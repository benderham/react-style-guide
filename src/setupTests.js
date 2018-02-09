import 'jest-styled-components';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { configure, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

configure({ adapter: new Adapter() });

beforeAll(() => {
  jest.spyOn(global.console, 'error').mockImplementation(err => {
    throw new Error(err);
  });

  jest.spyOn(global.console, 'warn').mockImplementation(warn => {
    throw new Error(warn);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

expect.extend({ toMatchImageSnapshot });

exports.shallowWithTheme = (tree, theme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();
  return shallow(tree, { context });
};
