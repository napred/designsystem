import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import { IfViewport } from '../../../ds/src';

const systemStories = storiesOf('IfViewport', module);

systemStories.add('is', () => (
  <Fragment>
    <IfViewport is={0}>{() => 'Viewport is 0'}</IfViewport>
    <IfViewport is={1}>{() => 'Viewport is 1'}</IfViewport>
    <IfViewport is={2}>{() => 'Viewport is 2'}</IfViewport>
    <IfViewport is={3}>{() => 'Viewport is 3'}</IfViewport>
    <IfViewport is={4}>{() => 'Viewport is 4'}</IfViewport>
    <IfViewport is={5}>{() => 'Viewport is 5'}</IfViewport>
  </Fragment>
));

systemStories.add('gt/lt/gte/lte', () => (
  <Fragment>
    <IfViewport gt={0}>{() => <div>Viewport is greater than 0</div>}</IfViewport>
    <IfViewport gte={1}>{() => <div>Viewport is greater than or equal to 1</div>}</IfViewport>
    <IfViewport lt={2}>{() => <div>Viewport is less than 2</div>}</IfViewport>
    <IfViewport lte={2}>{() => <div>Viewport is less than or equal to 2</div>}</IfViewport>
  </Fragment>
));
