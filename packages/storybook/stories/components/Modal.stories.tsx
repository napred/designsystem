import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import React from 'react';
import { createComponent } from '../../../ds/src';
import { Modal } from '../../../ui/src';

const modalStories = storiesOf('Components/Modal', module);

const ContentDiv = createComponent('ContentDiv', 'div', {
  style: css`
    background: #ccc;
    padding: 10px;
  `,
});

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
