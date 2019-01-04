import { storiesOf } from '@storybook/react';
import React from 'react';
import { DesignSystem } from '../../../native/src';
import { Card, CardFooter, CardHeader, Text } from '../../../primitives/src';
import {
  Card as NativeCard,
  CardFooter as NativeCardFooter,
  CardHeader as NativeCardHeader,
  Text as NativeText,
} from '../../../primitives/src/native';
import { Button, Group } from '../../../ui/src';

const cardStories = storiesOf('Primitives/Card', module);

cardStories.add('web', () => (
  <Card>
    <CardHeader>
      <Text>Header</Text>
    </CardHeader>
    <Text as="p">Vestibulum dolor it samet.</Text>
    <CardFooter>
      <Group>
        <Button>Accept</Button>
        <Button>Reject</Button>
      </Group>
    </CardFooter>
  </Card>
));

cardStories.add('native', () => (
  <DesignSystem>
    <NativeCard>
      <NativeCardHeader>
        <NativeText>Header</NativeText>
      </NativeCardHeader>
      <NativeText>Vestibulum dolor it samet.</NativeText>
      <NativeCardFooter>
        <Group>
          <Button>Accept</Button>
          <Button>Reject</Button>
        </Group>
      </NativeCardFooter>
    </NativeCard>
  </DesignSystem>
));
