import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Textarea } from '../../../ui/src';

const textareaStories = storiesOf('Components/Form/Textarea', module);

textareaStories.add('default width and type', () => (
  <Textarea onChange={action('onChange')} p={1} />
));

textareaStories.add('Full screen with placeholder', () => (
  <Textarea
    p={1}
    onChange={action('onChange')}
    width={'100%'}
    defaultValue="Pssst... type something here"
  />
));

textareaStories.add('disabled textarea', () => (
  <Textarea defaultValue="Psst... type something here" disabled p={1} />
));
