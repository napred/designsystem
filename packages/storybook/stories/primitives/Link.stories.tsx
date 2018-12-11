import { storiesOf } from '@storybook/react';
import React from 'react';
import { DesignSystem } from '../../../native/src';
import { Link } from '../../../primitives/src';
import { Link as NativeLink } from '../../../primitives/src/native';

const linkStories = storiesOf('Primitives/Link', module);

linkStories.add('web link', () => <Link href="/">Link</Link>);
linkStories.add('native link', () => (
  <DesignSystem>
    <NativeLink href="/">Link</NativeLink>
  </DesignSystem>
));
