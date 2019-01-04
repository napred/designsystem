import { storiesOf } from '@storybook/react';
import React from 'react';
import { Portal } from '../../../ui/src';

const portalStories = storiesOf('Components/Portal', module);

portalStories.add('renders children to portal', () => (
  <Portal removeOnUnmount>
    <div>Test</div>
  </Portal>
));
