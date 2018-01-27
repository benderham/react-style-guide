import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Button', module).add(
  'Default',
  withInfo(`
      Default button style with text label.
    `)(() => <Button label="Button" onClick={action('button-click')} />),
);
