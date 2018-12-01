import { Message } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const messageStories = storiesOf('Components/Message', module);

messageStories.add('default message', () => <Message p={1}>Hello world!</Message>);
