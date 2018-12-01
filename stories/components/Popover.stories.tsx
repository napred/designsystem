import { Popover } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const popoverStories = storiesOf('Components/Popover', module);

popoverStories.add('default', () => (
  <Popover right={0}>this is absolutely positioned block</Popover>
));
