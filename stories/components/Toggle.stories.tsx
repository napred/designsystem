import { Toggle } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { BooleanValue } from 'react-values';

const toggleStories = storiesOf('Components/Form/Toggle', module);

toggleStories.add('default toggle', () => (
  <BooleanValue defaultValue={false}>
    {({ set, value }: { set: (val: boolean) => any; value: boolean }) => (
      <Toggle checked={value} onClick={() => set(!value)} />
    )}
  </BooleanValue>
));

toggleStories.add('disabled', () => (
  <BooleanValue defaultValue={false}>
    {({ value }: { set: (val: boolean) => any; value: boolean }) => (
      <Toggle checked={value} disabled />
    )}
  </BooleanValue>
));
