import { storiesOf } from '@storybook/react';
import React from 'react';
import { List, ListItem, ListSubheader } from '../../../ui/src';

const listStories = storiesOf('Components/List', module);

listStories.add('list', () => (
  <List>
    <ListItem>A</ListItem>
    <ListItem>B</ListItem>
    <ListItem>C</ListItem>
  </List>
));

listStories.add('clickable list', () => (
  <List>
    <ListItem button>A</ListItem>
    <ListItem button>B</ListItem>
    <ListItem button>C</ListItem>
  </List>
));

listStories.add('clickable list with subheaders and left borders', () => (
  <List>
    <ListSubheader>1</ListSubheader>
    <ListItem borderWidth="0" borderWidthLeft="2px" borderStyle="solid" borderColor="primary" button>A</ListItem>
    <ListSubheader>2</ListSubheader>
    <ListItem button>B</ListItem>
    <ListItem button>C</ListItem>
  </List>
));
