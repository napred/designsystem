import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popover } from '../../packages/ui/src';

const popoverStories = storiesOf('Components/Popover', module);

popoverStories.add('default', () => (
  <Popover right={0}>this is absolutely positioned block</Popover>
));
