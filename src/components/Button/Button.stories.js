import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Button from './Button';

storiesOf('Buttons', module)
  .add(
    'Button Primary',
    withInfo(`
      Primary button style with text label.
    `)(() => (
      <div>
        <Button onClick={action('button-click')}>Button</Button>
        <Button href="https://google.com.au">Button</Button>
      </div>
    )),
  )
  .add(
    'Button Secondary',
    withInfo(`
      Secondary button style with text label.
    `)(() => (
      <div>
        <Button onClick={action('button-click')} kind="secondary">
          Button
        </Button>
        <Button href="https://google.com.au" kind="secondary">
          Button
        </Button>
      </div>
    )),
  )
  .add(
    'Button Disabled',
    withInfo(`
      Disabled button.
    `)(() => (
      <Button onClick={action('button-click')} disabled>
        Button
      </Button>
    )),
  );
