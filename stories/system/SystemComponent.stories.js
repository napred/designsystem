// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import { systemComponent } from '../../packages/ds/src/system';

const RedSpan = systemComponent('span');
const Text = systemComponent('div');

// $FlowExpectError
RedSpan.defaultProps = {
  color: 'red',
};

const BlueSystemComponent = systemComponent('span');

// $FlowExpectError
BlueSystemComponent.defaultProps = { color: 'blue' };

const systemStories = storiesOf('System/SystemComponent', module);

systemStories.add('basic system component', () => <Text>This is Text component</Text>);

systemStories.add('override component (primitive - string)', () => (
  <Text as="p">This is Text component rendered as paragraph</Text>
));

systemStories.add('override component (styled component)', () => (
  <Text as={RedSpan}>This is Text component rendered as styled component</Text>
));

systemStories.add('override component (system component)', () => (
  <Text as={BlueSystemComponent} color="green">
    This is Text component rendered as system component
  </Text>
));
