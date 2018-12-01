import { Link } from '@napred/primitives';
import { storiesOf } from '@storybook/react';
import React from 'react';

const linkStories = storiesOf('Components/Link', module);

linkStories.add('default', () => <Link href="/">Link</Link>);
