// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Popover from '../../packages/ui/src/Popover';

const popoverStories = storiesOf('Components/Popover', module);

popoverStories.add('default', () => (
  <Popover right={0}>this is absolutely positioned block</Popover>
));
