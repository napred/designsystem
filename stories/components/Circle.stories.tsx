import { Circle } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const circleStories = storiesOf('Components/Circle', module);

circleStories.add('default circle badge', () => <Circle>R</Circle>);
