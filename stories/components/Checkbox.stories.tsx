import { Checkbox } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const checkboxStories = storiesOf('Components/Form/Checkbox', module);

checkboxStories.add('default checkbox', () => <Checkbox />);
checkboxStories.add('disabled checkbox', () => <Checkbox disabled />);
