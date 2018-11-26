// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Label from '../../packages/ui/src/form/Label';

const labelStories = storiesOf('Components/Form/Label', module);

labelStories.add('default width and type', () => <Label p={1}>Hello world!</Label>);
