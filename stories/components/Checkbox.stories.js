// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Checkbox from '../../packages/ui/src/form/Checkbox';

const checkboxStories = storiesOf('Components/Form/Checkbox', module);

checkboxStories.add('default checkbox', () => <Checkbox />);
checkboxStories.add('disabled checkbox', () => <Checkbox disabled />);
