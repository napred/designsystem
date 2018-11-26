// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Group from '../../packages/ui/src/form/Group';
import Button from '../../packages/ui/src/form/Button';

const groupStories = storiesOf('Components/Form/Group', module);

groupStories.add('grouped buttons', () => (
  <Group>
    <Button>Hello</Button>
    <Button>World</Button>
  </Group>
));
