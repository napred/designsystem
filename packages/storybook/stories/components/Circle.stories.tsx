import { storiesOf } from '@storybook/react';
import React from 'react';
import { Circle } from '../../../ui/src';

const circleStories = storiesOf('Components/Circle', module);

circleStories.add('default circle badge', () => <Circle>R</Circle>);
