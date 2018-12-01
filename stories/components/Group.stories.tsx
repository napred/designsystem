import { Button, Group } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const groupStories = storiesOf('Components/Form/Group', module);

groupStories.add('grouped buttons', () => (
  <Group>
    <Button>Hello</Button>
    <Button>World</Button>
  </Group>
));
