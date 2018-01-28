import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/utils/theme';
import Global from '../src/utils/global';

// addon-info
setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: false, // Displays info inline vs click button to view
});

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Global>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '3em',
        }}
      >
        {story()}
      </div>
    </Global>
  </ThemeProvider>
));
//addDecorator(checkA11y);

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
