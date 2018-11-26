// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Card, { CardHeader, CardFooter } from '../../packages/primitives/src/Card';
import Button from '../../packages/ui/src/form/Button';
import Group from '../../packages/ui/src/form/Group';

const cardStories = storiesOf('Components/Card', module);

cardStories.add('Basic card', () => (
  <Card>
    <CardHeader>Header</CardHeader>
    <p>Vestibulum dolor it samet.</p>
    <CardFooter>
      <Group>
        <Button>Accept</Button>
        <Button>Reject</Button>
      </Group>
    </CardFooter>
  </Card>
));
