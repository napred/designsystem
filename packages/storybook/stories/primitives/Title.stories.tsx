import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import { DesignSystem } from '../../../native/src';
import { Title } from '../../../primitives/src';
import { Title as NativeTitle } from '../../../primitives/src/native';

const titleStories = storiesOf('Primitives/Title', module);

titleStories.add('web', () => (
  <Fragment>
    <Title>Main heading 1</Title>
    <Title as="h2">Main heading 2</Title>
    <Title as="h3">Main heading 3</Title>
    <Title as="h4">Main heading 4</Title>
    <Title as="h5">Main heading 5</Title>
  </Fragment>
));

titleStories.add('native', () => (
  <DesignSystem>
    <NativeTitle>Main heading 1</NativeTitle>
    <NativeTitle>Main heading 2</NativeTitle>
    <NativeTitle>Main heading 3</NativeTitle>
    <NativeTitle>Main heading 4</NativeTitle>
    <NativeTitle>Main heading 5</NativeTitle>
  </DesignSystem>
));
