import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
