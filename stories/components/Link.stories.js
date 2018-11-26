// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Link from '../../packages/primitives/src/Link';

const linkStories = storiesOf('Components/Link', module);

linkStories.add('default', () => <Link href="/">Link</Link>);
