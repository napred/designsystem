import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from '../../../ui/src';

const inputStories = storiesOf('Components/Form/Input', module);

inputStories.add('default width and type', () => <Input onChange={action('onChange')} p={1} />);

inputStories.add('Full screen with placeholder', () => (
  <Input
    p={1}
    onChange={action('onChange')}
    width="100%"
    defaultValue="Pssst... type something here"
  />
));

inputStories.add('disabled input', () => <Input disabled p={1} />);
