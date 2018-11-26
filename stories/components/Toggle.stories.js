// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BooleanValue } from 'react-values';
import { storiesOf } from '@storybook/react';

import Toggle from '../../packages/ui/src/form/Toggle';

const toggleStories = storiesOf('Components/Form/Toggle', module);

toggleStories.add('default toggle', () => (
  <BooleanValue defaultValue={false}>
    {({ set, value }) => <Toggle checked={value} onClick={() => set(!value)} />}
  </BooleanValue>
));

toggleStories.add('disabled', () => (
  <BooleanValue defaultValue={false}>
    {({ value }) => <Toggle checked={value} disabled />}
  </BooleanValue>
));
