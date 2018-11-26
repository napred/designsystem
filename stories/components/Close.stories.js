// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Close from '../../packages/ui/src/Close';
import Absolute from '../../packages/ui/src/Absolute';

const closeStories = storiesOf('Components/Close', module);

closeStories.add('default close', () => <Close />);
closeStories.add('inverted close', () => <Close inverted />);
closeStories.add('absolute close', () => (
  <Absolute top={0} right={0}>
    <Close />
  </Absolute>
));
