import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Chrome } from 'navalia';
import Button from './Button';

describe('Button', () => {
  describe('Tests', () => {
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

    it(`should console log error if passed a kind other than "primary" or "secondary"`, () => {
      const props = {
        label: 'Button',
        onClick: jest.fn(),
        kind: 'notkind',
      };
      expect(() => <Button {...props} />).toThrow();
    });

    it(`should console log error if passed a type other than "submit", "reset" or "button", via props`, () => {
      const props = {
        label: 'Button',
        onClick: jest.fn(),
        type: 'notsubmit',
      };
      expect(() => <Button {...props} />).toThrow();
    });

    it('should not be disabled by default', () => {
      const props = {
        label: 'Button',
        onClick: jest.fn(),
      };
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper.props().disabled).toBe(false);
    });

    it(`should have a default kind of "primary"`, () => {
      const props = {
        label: 'Button',
        onClick: jest.fn(),
      };
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper.props().kind).toBe('primary');
    });

    it(`should have a default type of "button"`, () => {
      const props = {
        label: 'Button',
        onClick: jest.fn(),
      };
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper.props().type).toBe('button');
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

    it('should be disabled if passed via props', () => {
      const props = {
        label: 'Button',
        onClick: jest.fn(),
        disabled: true,
      };
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper.props().disabled).toBe(true);
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
  });

  describe('Snapshots', () => {
    let chrome = null;

    beforeAll(() => {
      chrome = new Chrome();
    });

    afterAll(() => {
      chrome.done();
    });

    describe('Primary Button', () => {
      it('should render as expected, without error', () => {
        const props = {
          label: 'Button',
          onClick: jest.fn(),
        };
        const output = shallow(<Button {...props} />);
        expect(shallowToJson(output)).toMatchSnapshot();
      });

      it('should not have visual regressions', () => {
        return chrome
          .goto(
            'http://localhost:9009/?selectedKind=Button&selectedStory=Primary&full=1&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
          )
          .then(() => chrome.screenshot())
          .then(image => expect(image).toMatchImageSnapshot());
      });
    });

    describe('Secondary Button', () => {
      it('should render as expected, without error', () => {
        const props = {
          label: 'Button',
          onClick: jest.fn(),
          context: 'secondary',
        };
        const output = shallow(<Button {...props} />);
        expect(shallowToJson(output)).toMatchSnapshot();
      });

      it('should not have visual regressions', () => {
        return chrome
          .goto(
            'http://localhost:9009/?selectedKind=Button&selectedStory=Secondary&full=1&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
          )
          .then(() => chrome.screenshot())
          .then(image => expect(image).toMatchImageSnapshot());
      });
    });

    describe('Disabled Button', () => {
      it('should render as expected, without error', () => {
        const props = {
          label: 'Button',
          onClick: jest.fn(),
          disabled: true,
        };
        const output = shallow(<Button {...props} />);
        expect(shallowToJson(output)).toMatchSnapshot();
      });

      it('should not have visual regressions', () => {
        return chrome
          .goto(
            'http://localhost:9009/?selectedKind=Button&selectedStory=Disabled&full=1&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
          )
          .then(() => chrome.screenshot())
          .then(image => expect(image).toMatchImageSnapshot());
      });
    });
  });
});
