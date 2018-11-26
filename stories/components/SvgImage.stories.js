// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import CloseIcon from '../../packages/ui/src/assets';
import SvgImage from '../../packages/ui/src/SvgImage';

const svgImageStories = storiesOf('Components/SvgImage', module);

svgImageStories.add('imported svg image as children', () => (
  <SvgImage fontSize={5}>
    <CloseIcon />
  </SvgImage>
));

svgImageStories.add('imported svg image as icon', () => <SvgImage icon={CloseIcon} fontSize={5} />);
