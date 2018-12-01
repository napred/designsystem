import { Label } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const labelStories = storiesOf('Components/Form/Label', module);

labelStories.add('default width and type', () => <Label p={1}>Hello world!</Label>);
