// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Radio from '../../packages/ui/src/form/Radio';

const radioStories = storiesOf('Components/Form/Radio', module);

radioStories.add('default radio box', () => <Radio />);
radioStories.add('disabled radio box', () => <Radio disabled />);
