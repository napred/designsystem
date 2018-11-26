// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Badge from '../../packages/ui/src/Badge';

const badgeStories = storiesOf('Components/Badge', module);

badgeStories.add('default badge', () => <Badge>react</Badge>);
