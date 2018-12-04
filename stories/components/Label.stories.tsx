import { storiesOf } from '@storybook/react';
import React from 'react';
import { Label } from '../../packages/ui/src';

const labelStories = storiesOf('Components/Form/Label', module);

labelStories.add('default width and type', () => <Label p={1}>Hello world!</Label>);
