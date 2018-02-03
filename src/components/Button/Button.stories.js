import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Button', module)
  .add(
    'Primary',
    withInfo(`
      Primary button style with text label.
    `)(() => <Button label="Button" onClick={action('button-click')} />),
  )
  .add(
    'Secondary',
    withInfo(`
      Secondary button style with text label.
    `)(() => (
      <Button
        label="Button"
        onClick={action('button-click')}
        kind="secondary"
      />
    )),
  )
  .add(
    'Disabled',
    withInfo(`
      Disabled button.
    `)(() => (
      <Button label="Button" onClick={action('button-click')} disabled />
    )),
  );
