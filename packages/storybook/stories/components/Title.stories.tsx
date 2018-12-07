import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Title } from '../../../primitives/src';

const titleStories = storiesOf('Components/Typography/Title', module);

titleStories.add('default title', () => (
  <React.Fragment>
    <Title>Main heading 1</Title>
    <Title as="h2">Main heading 2</Title>
    <Title as="h3">Main heading 3</Title>
    <Title as="h4">Main heading 4</Title>
    <Title as="h5">Main heading 5</Title>
  </React.Fragment>
));
