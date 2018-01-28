import { Children } from 'react';
import { withTheme, injectGlobal } from 'styled-components';

const Global = ({ theme, children }) => {
  injectGlobal`
    body {
      font-size: 16px;
    }
  `;
  return Children.only(children);
};

export default withTheme(Global);
