// @flow
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { css } from 'emotion';

import { storiesOf } from '@storybook/react';

import { createCssStyle, IfViewport, createComponent } from '@napred/ds';
import { Column, Container, Row } from '../../packages/ui/src/layout';

const containerStories = storiesOf('Components/Layout/Container', module);

const PreviewBox = createComponent('PreviewBox', 'div', [
  createCssStyle(
    [],
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: gray;
      width: 100%;
    `,
  ),
]);

containerStories.add('default responsive widths', () => (
  <React.Fragment>
    <Container>
      <h1>Without gutters</h1>
      <Row>
        <Column>
          <PreviewBox>1/1</PreviewBox>
        </Column>
        <Column width={1 / 3}>
          <PreviewBox>1 / 3</PreviewBox>
        </Column>
        <Column width={2 / 3}>
          <PreviewBox>2 / 3</PreviewBox>
        </Column>
      </Row>
      <h1>With gutters</h1>
      <Row gutters>
        <Column>
          <PreviewBox>1/1</PreviewBox>
        </Column>
        <Column width={1 / 3}>
          <PreviewBox>1 / 3</PreviewBox>
        </Column>
        <Column width={2 / 3}>
          <PreviewBox>2 / 3</PreviewBox>
        </Column>
      </Row>
      <h1>Column direction</h1>
      <Row direction="column">
        <Column>
          <PreviewBox>1/1</PreviewBox>
        </Column>
        <Column width={1 / 3}>
          <PreviewBox>1 / 3</PreviewBox>
        </Column>
        <Column width={2 / 3}>
          <PreviewBox>2 / 3</PreviewBox>
        </Column>
      </Row>
    </Container>
  </React.Fragment>
));

containerStories.add('fixed width', () => (
  <React.Fragment>
    <Container maxWidth={300}>
      <h1>Without gutters</h1>
      <Row>
        <Column width={['100%', '50%', '25%']}>
          <PreviewBox>
            <IfViewport is={0}>{() => <span>100%</span>}</IfViewport>
            <IfViewport is={1}>{() => <span>50%</span>}</IfViewport>
            <IfViewport is={2}>{() => <span>25%</span>}</IfViewport>
            <IfViewport is={3}>{() => <span>25%</span>}</IfViewport>
          </PreviewBox>
        </Column>
        <Column width={['100%', '50%', '75%']}>
          <PreviewBox>
            <IfViewport is={0}>{() => <span>100%</span>}</IfViewport>
            <IfViewport is={1}>{() => <span>50%</span>}</IfViewport>
            <IfViewport is={2}>{() => <span>75%</span>}</IfViewport>
            <IfViewport is={3}>{() => <span>75%</span>}</IfViewport>
          </PreviewBox>
        </Column>
      </Row>
      <h1>With gutters</h1>
      <Row gutters>
        <Column width={['100%', '50%', '25%']}>
          <PreviewBox>
            <IfViewport is={0}>{() => <span>100%</span>}</IfViewport>
            <IfViewport is={1}>{() => <span>50%</span>}</IfViewport>
            <IfViewport is={2}>{() => <span>25%</span>}</IfViewport>
            <IfViewport is={3}>{() => <span>25%</span>}</IfViewport>
          </PreviewBox>
        </Column>
        <Column width={['100%', '50%', '75%']}>
          <PreviewBox>
            <IfViewport is={0}>{() => <span>100%</span>}</IfViewport>
            <IfViewport is={1}>{() => <span>50%</span>}</IfViewport>
            <IfViewport is={2}>{() => <span>75%</span>}</IfViewport>
            <IfViewport is={3}>{() => <span>75%</span>}</IfViewport>
          </PreviewBox>
        </Column>
      </Row>
      <h1>Column direction</h1>
      <Row gutters direction="column">
        <Column width={['100%', '50%', '25%']}>
          <PreviewBox>
            <IfViewport is={0}>{() => <span>100%</span>}</IfViewport>
            <IfViewport is={1}>{() => <span>50%</span>}</IfViewport>
            <IfViewport is={2}>{() => <span>25%</span>}</IfViewport>
            <IfViewport is={3}>{() => <span>25%</span>}</IfViewport>
          </PreviewBox>
        </Column>
        <Column width={['100%', '50%', '75%']}>
          <PreviewBox>
            <IfViewport is={0}>{() => <span>100%</span>}</IfViewport>
            <IfViewport is={1}>{() => <span>50%</span>}</IfViewport>
            <IfViewport is={2}>{() => <span>75%</span>}</IfViewport>
            <IfViewport is={3}>{() => <span>75%</span>}</IfViewport>
          </PreviewBox>
        </Column>
      </Row>
    </Container>
  </React.Fragment>
));