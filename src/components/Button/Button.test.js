import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Chrome } from 'navalia';
import { shallowWithTheme } from './../../setupTests';
import { theme } from './../../utils/theme';
import Button from './Button';

describe('Button', () => {
  describe('Tests', () => {
    it('should render children as expected', () => {
      const props = {
        onClick: jest.fn(),
      };
      const output = shallow(
        <Button {...props}>
          <div className="child" />
        </Button>,
      );
      expect(output.find('.child').length).toBe(1);
    });

    it('should render a "button" if not passed a href via props', () => {
      const props = {
        onClick: jest.fn(),
      };
      const output = shallowWithTheme(
        <Button {...props}>Button</Button>,
        theme,
      ).dive();
      expect(output.is('button')).toBe(true);
    });

    it('should render an "a" if passed a href via props', () => {
      const props = {
        onClick: jest.fn(),
        href: 'https://google.com.au',
      };
      const output = shallowWithTheme(
        <Button {...props}>Button</Button>,
        theme,
      ).dive();
      expect(output.is('a')).toBe(true);
    });

    it('should console log error if not passed an onClick function via props', () => {
      const props = {};
      expect(() => <Button {...props}>Button</Button>).toThrow();
    });

    it(`should console log error if passed a kind other than "primary" or "secondary"`, () => {
      const props = {
        onClick: jest.fn(),
        kind: 'notkind',
      };
      expect(() => <Button {...props}>Button</Button>).toThrow();
    });

    it(`should console log error if passed a type other than "submit", "reset" or "button", via props`, () => {
      const props = {
        onClick: jest.fn(),
        type: 'notsubmit',
      };
      expect(() => <Button {...props}>Button</Button>).toThrow();
    });

    it('should not be disabled by default', () => {
      const props = {
        onClick: jest.fn(),
      };
      const wrapper = shallow(<Button {...props}>Button</Button>);
      expect(wrapper.props().disabled).toBe(false);
    });

    it(`should have a default kind of "primary"`, () => {
      const props = {
        onClick: jest.fn(),
      };
      const wrapper = shallow(<Button {...props}>Button</Button>);
      expect(wrapper.props().kind).toBe('primary');
    });

    it(`should have a default type of "button"`, () => {
      const props = {
        onClick: jest.fn(),
      };
      const wrapper = shallow(<Button {...props}>Button</Button>);
      expect(wrapper.props().type).toBe('button');
    });

    it(`should have a type of "submit" or "reset" if passed via props`, () => {
      const props = {
        onClick: jest.fn(),
      };
      const wrapper = shallow(<Button {...props}>Button</Button>);
      wrapper.setProps({ type: 'submit' });
      expect(wrapper.props().type).toBe('submit');
      wrapper.setProps({ type: 'reset' });
      expect(wrapper.props().type).toBe('reset');
    });

    it('should be disabled if passed via props', () => {
      const props = {
        onClick: jest.fn(),
        disabled: true,
      };
      const wrapper = shallow(<Button {...props}>Button</Button>);
      expect(wrapper.props().disabled).toBe(true);
    });

    it('should handle click event passed via props', () => {
      const mockFn = jest.fn();
      const props = {
        onClick: mockFn,
      };
      const output = shallow(<Button {...props}>Button</Button>);
      output.simulate('click');
      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe('Snapshots', () => {
    // let chrome = null;

    // beforeAll(() => {
    //   chrome = new Chrome();
    // });

    // afterAll(() => {
    //   chrome.done();
    // });

    describe('Primary Button', () => {
      it('should render button as expected, without error', () => {
        const props = {
          onClick: jest.fn(),
        };
        const output = shallowWithTheme(
          <Button {...props}>Button</Button>,
          theme,
        ).dive();
        expect(shallowToJson(output)).toMatchSnapshot();
      });

      it('should render anchor as expected, without error', () => {
        const props = {
          onClick: jest.fn(),
          href: 'https://google.com.au',
        };
        const output = shallowWithTheme(
          <Button {...props}>Button</Button>,
          theme,
        ).dive();
        expect(shallowToJson(output)).toMatchSnapshot();
      });

      // it('should not have visual regressions', () => {
      //   return chrome
      //     .goto(
      //       'http://localhost:9009/?selectedKind=Button&selectedStory=Primary&full=1&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
      //     )
      //     .then(() => chrome.screenshot())
      //     .then(image => expect(image).toMatchImageSnapshot());
      // });
    });

    describe('Secondary Button', () => {
      it('should render as expected, without error', () => {
        const props = {
          onClick: jest.fn(),
          kind: 'secondary',
        };
        const output = shallowWithTheme(
          <Button {...props}>Button</Button>,
          theme,
        ).dive();
        expect(shallowToJson(output)).toMatchSnapshot();
      });

      // it('should not have visual regressions', () => {
      //   return chrome
      //     .goto(
      //       'http://localhost:9009/?selectedKind=Button&selectedStory=Secondary&full=1&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
      //     )
      //     .then(() => chrome.screenshot())
      //     .then(image => expect(image).toMatchImageSnapshot());
      // });
    });

    describe('Disabled Button', () => {
      it('should render as expected, without error', () => {
        const props = {
          onClick: jest.fn(),
          disabled: true,
        };
        const output = shallowWithTheme(
          <Button {...props}>Button</Button>,
          theme,
        ).dive();
        expect(shallowToJson(output)).toMatchSnapshot();
      });

      // it('should not have visual regressions', () => {
      //   return chrome
      //     .goto(
      //       'http://localhost:9009/?selectedKind=Button&selectedStory=Disabled&full=1&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
      //     )
      //     .then(() => chrome.screenshot())
      //     .then(image => expect(image).toMatchImageSnapshot());
      // });
    });
  });
});
