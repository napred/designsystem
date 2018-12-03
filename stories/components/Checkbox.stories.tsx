import { storiesOf } from '@storybook/react';
import React from 'react';
import { Checkbox } from '../../packages/ui/src';

const checkboxStories = storiesOf('Components/Form/Checkbox', module);

checkboxStories.add('default checkbox', () => <Checkbox />);
checkboxStories.add('disabled checkbox', () => <Checkbox disabled />);
