import { Fixed } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const fixedStories = storiesOf('Components/Fixed', module);

fixedStories.add('default with bgColor', () => <Fixed bgColor="#ccc">This is fixed</Fixed>);
fixedStories.add('default with bgColor, padding', () => (
  <Fixed bgColor="#ccc" p={2}>
    This is fixed
  </Fixed>
));
fixedStories.add('2 overlapping', () => (
  <React.Fragment>
    <Fixed bgColor="#ccc" p={2} top={0} left={0}>
      This is fixed
    </Fixed>
    <Fixed bgColor="#444" p={4} top={10} left={10} zIndex={2}>
      This is fixed
    </Fixed>
  </React.Fragment>
));
