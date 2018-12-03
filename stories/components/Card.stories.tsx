import { storiesOf } from '@storybook/react';
import React from 'react';
import { Card, CardFooter, CardHeader } from '../../packages/primitives/src';
import { Button, Group } from '../../packages/ui/src';

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
