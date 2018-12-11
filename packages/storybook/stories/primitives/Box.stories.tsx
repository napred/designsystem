import { storiesOf } from '@storybook/react';
import React from 'react';
import { DesignSystem } from '../../../native/src';
import { Box, Text } from '../../../primitives/src';
import { Box as NativeBox, Text as NativeText } from '../../../primitives/src/native';

const boxStories = storiesOf('Primitives/Box', module);

boxStories.add('web box', () => (
  <Box bgColor="lightgray">
    <Text>Hello world.</Text>
  </Box>
));

boxStories.add('native box', () => (
  <DesignSystem>
    <NativeBox bgColor="lightgray">
      <NativeText>Hello world.</NativeText>
    </NativeBox>
  </DesignSystem>
));
