import { Button, Nav, NavEnd, NavItem, NavStart } from '@napred/ui';
import { storiesOf } from '@storybook/react';
import React from 'react';

const navStories = storiesOf('Components/Nav', module);

navStories.add('Relative position', () => (
  <Nav position="relative">
    <NavStart>
      <NavItem>Item1</NavItem>
      <NavItem>Item2</NavItem>
    </NavStart>
    <NavEnd>
      <NavItem>Item3</NavItem>
      <NavItem>
        <a href="/">Item4</a>
      </NavItem>
      <Button>Item5</Button>
    </NavEnd>
  </Nav>
));

navStories.add('Fixed position with padding', () => (
  <Nav px={2}>
    <NavStart>
      <NavItem>Item1</NavItem>
      <NavItem>Item2</NavItem>
    </NavStart>
    <NavEnd>
      <NavItem>Item3</NavItem>
      <NavItem>
        <a href="/">Item4</a>
      </NavItem>
      <Button>Item5</Button>
    </NavEnd>
  </Nav>
));
