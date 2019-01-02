import { storiesOf } from '@storybook/react';
import React from 'react';
import { DesignSystem } from '../../../native/src';
import { Input } from '../../../uniui/src';

const boxStories = storiesOf('UniUi/Input', module);

boxStories.add('native input', () => (
  <DesignSystem>
      <Input px={2} />
  </DesignSystem>
));
