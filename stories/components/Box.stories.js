// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Box from '../../packages/primitives/src/Box';

const boxStories = storiesOf('Components/Box', module);

boxStories.add('default box', () => <Box bgColor="lightgray">Hello world.</Box>);
