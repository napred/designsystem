import { storiesOf } from '@storybook/react';
import React from 'react';
import { Link } from '../../../primitives/src';

const linkStories = storiesOf('Components/Link', module);

linkStories.add('default', () => <Link href="/">Link</Link>);