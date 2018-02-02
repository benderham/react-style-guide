import { Children } from 'react';
import { withTheme, injectGlobal } from 'styled-components';

const Global = ({ theme, children }) => {
  injectGlobal`

  `;
  return Children.only(children);
};

export default withTheme(Global);
