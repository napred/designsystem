// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Circle from '../../packages/ui/src/Circle';

const circleStories = storiesOf('Components/Circle', module);

circleStories.add('default circle badge', () => <Circle>R</Circle>);
