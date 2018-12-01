import { Absolute, Close } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const closeStories = storiesOf('Components/Close', module);

closeStories.add('default close', () => <Close />);
closeStories.add('inverted close', () => <Close inverted />);
closeStories.add('absolute close', () => (
  <Absolute top={0} right={0}>
    <Close />
  </Absolute>
));
