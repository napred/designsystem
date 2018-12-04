import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box } from '../../packages/primitives/src';

const boxStories = storiesOf('Components/Box', module);

boxStories.add('default box', () => <Box bgColor="lightgray">Hello world.</Box>);
