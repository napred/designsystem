import { Portal } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const portalStories = storiesOf('Components/Portal', module);

portalStories.add('renders children to portal', () => (
  <Portal removeOnUnmount>
    <div>Test</div>
  </Portal>
));
