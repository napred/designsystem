import { Card, CardFooter, CardHeader } from '@napred/primitives';
import { Button, Group } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

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
