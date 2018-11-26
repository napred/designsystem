// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Portal from '../../packages/ui/src/Portal';

const portalStories = storiesOf('Components/Portal', module);

portalStories.add('renders children to portal', () => (
  <Portal removeOnUnmount>
    <div>Test</div>
  </Portal>
));
