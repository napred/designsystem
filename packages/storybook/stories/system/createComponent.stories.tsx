import { storiesOf } from '@storybook/react';
import React from 'react';
import { createComponent } from '../../../ds/src';

const RedSpan = createComponent('RedSpan', 'span');
const Text = createComponent('Text', 'div');

RedSpan.defaultProps = {
  color: 'red',
};

const BlueSystemComponent = createComponent('BlueSpan', 'span');

BlueSystemComponent.defaultProps = { color: 'blue' };

const systemStories = storiesOf('createComponent', module);

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
