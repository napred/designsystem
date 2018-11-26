// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Absolute from '../../packages/ui/src//Absolute';

const absoluteStories = storiesOf('Components/Absolute', module);

absoluteStories.add('default with bgColor', () => (
  <Absolute bgColor="#ccc">This is absolutely positioned</Absolute>
));
