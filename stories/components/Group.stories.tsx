import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, Group } from '../../packages/ui/src';

const groupStories = storiesOf('Components/Form/Group', module);

groupStories.add('grouped buttons', () => (
  <Group>
    <Button>Hello</Button>
    <Button>World</Button>
  </Group>
));
