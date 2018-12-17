import { storiesOf } from '@storybook/react';
import React from 'react';
import { DesignSystem } from '../../../native/src';
import { Button } from '../../../uniui/src';

const boxStories = storiesOf('UniUi/Button', module);

boxStories.add('native button', () => (
  <DesignSystem>
      <Button>Hello world.</Button>
  </DesignSystem>
));
