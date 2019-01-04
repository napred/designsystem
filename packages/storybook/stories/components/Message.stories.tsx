import { storiesOf } from '@storybook/react';
import React from 'react';
import { Message } from '../../../ui/src';

const messageStories = storiesOf('Components/Message', module);

messageStories.add('default message', () => <Message p={1}>Hello world!</Message>);
