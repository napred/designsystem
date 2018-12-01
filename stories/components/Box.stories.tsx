import { Box } from '@napred/primitives';
import { storiesOf } from '@storybook/react';
import React from 'react';

const boxStories = storiesOf('Components/Box', module);

boxStories.add('default box', () => <Box bgColor="lightgray">Hello world.</Box>);
