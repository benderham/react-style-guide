import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Button', module)
  .add(
    'Primary Button',
    withInfo(`
      Default button style with text label.
    `)(() => <Button label="Button" onClick={action('button-click')} />),
  )
  .add(
    'Primary Button - Disabled',
    withInfo(`
      Default button style, disabled.
    `)(() => (
      <Button label="Button" onClick={action('button-click')} disabled />
    )),
  );
