import { storiesOf } from '@storybook/react';
import React from 'react';
import { DesignSystem } from '../../../native/src';
import { Link } from '../../../primitives/src';
import { Link as NativeLink } from '../../../primitives/src/native';

const linkStories = storiesOf('Components/Link', module);

linkStories.add('default', () => <Link href="/">Link</Link>);
linkStories.add('native', () => (
  <DesignSystem>
    <NativeLink href="/">Link</NativeLink>
  </DesignSystem>
));
