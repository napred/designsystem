// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from '../../packages/ui/src/Message';

const messageStories = storiesOf('Components/Message', module);

messageStories.add('default message', () => <Message p={1}>Hello world!</Message>);
