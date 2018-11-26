// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import Tooltip from '../../packages/ui/src/Tooltip';
import Input from '../../packages/ui/src/form/Input';

const tooltipStories = storiesOf('Components/Tooltip', module);

tooltipStories.add('Input with tooltip', () => (
  <React.Fragment>
    <Input />
    <Tooltip>This field must be filled</Tooltip>
  </React.Fragment>
));
