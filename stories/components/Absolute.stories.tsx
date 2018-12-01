import { storiesOf } from '@storybook/react';
import React from 'react';

import { Absolute } from '@napred/ui';

const absoluteStories = storiesOf('Components/Absolute', module);

absoluteStories.add('default with bgColor', () => (
  <Absolute bgColor="#ccc">This is absolutely positioned</Absolute>
));
