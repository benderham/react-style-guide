import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Button', module)
  .add(
    'default with text',
    withInfo(`
      Default button with text label.
    `)(() => <Button label="Hello World" />),
  )
  .add(
    'default with emoji',
    withInfo(`
      Default button with emoji label.
    `)(() => <Button label="Hello 💩" />),
  );
