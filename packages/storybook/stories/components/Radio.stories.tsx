import { storiesOf } from '@storybook/react';
import React from 'react';
import { Radio } from '../../../ui/src';

const radioStories = storiesOf('Components/Form/Radio', module);

radioStories.add('default radio box', () => <Radio />);
radioStories.add('disabled radio box', () => <Radio disabled />);
