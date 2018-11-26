// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createCssStyle, createComponent } from '@napred/ds';
import { css } from 'emotion';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Modal from '../../packages/ui/src/Modal';

const modalStories = storiesOf('Components/Modal', module);

const ContentDiv = createComponent('ContentDiv', 'div', [
  createCssStyle(
    [],
    css`
      background: #ccc;
      padding: 10px;
    `,
  ),
]);

modalStories.add('not closable', () => (
  <Modal overlayed={boolean('overlayed', false, 'modal')}>
    <ContentDiv>Content</ContentDiv>
  </Modal>
));

modalStories.add('not closable overlayed', () => (
  <Modal overlayed={boolean('overlayed', true, 'modal')}>
    <ContentDiv>Content</ContentDiv>
  </Modal>
));

modalStories.add('closable', () => (
  <Modal overlayed={boolean('overlayed', false, 'modal')} onClose={action('close')}>
    <ContentDiv>Content</ContentDiv>
  </Modal>
));

modalStories.add('closable overlayed', () => (
  <Modal overlayed={boolean('overlayed', true, 'modal')} onClose={action('close')}>
    <ContentDiv>Content</ContentDiv>
  </Modal>
));
