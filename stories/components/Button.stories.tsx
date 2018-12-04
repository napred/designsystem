import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Flex, Link } from '../../packages/primitives/src';
import { Button } from '../../packages/ui/src';

const buttonStories = storiesOf('Components/Form/Button', module);

const Wrapper = ({ color, children }: any) => (
  <Flex
    bgColor={color || 'greyLight'}
    height="100vh"
    width="100vw"
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </Flex>
);

const onClick = action('onClick');

buttonStories.add('default button', () => (
  <Wrapper>
    <Button m={3} onClick={onClick}>
      Click me!
    </Button>

    <Button m={3} loading onClick={onClick}>
      Click me!
    </Button>

    <Button disabled m={3} onClick={onClick}>
      Disabled :(
    </Button>
  </Wrapper>
));
buttonStories.add('primary', () => (
  <Wrapper>
    <Button m={3} onClick={onClick} variant="primary">
      Click me!
    </Button>

    <Button m={3} onClick={onClick} loading variant="primary">
      Click me!
    </Button>

    <Button disabled m={3} onClick={onClick} variant="primary">
      Disabled :(
    </Button>
  </Wrapper>
));
buttonStories.add('transparent', () => (
  <Wrapper>
    <Button m={3} onClick={onClick} variant="transparent">
      Click me!
    </Button>

    <Button m={3} loading onClick={onClick} variant="transparent">
      Click me!
    </Button>

    <Button disabled m={3} onClick={onClick} variant="transparent">
      Disabled :(
    </Button>
  </Wrapper>
));
buttonStories.add('light transparent', () => (
  <Wrapper color="yellow">
    <Button m={3} onClick={onClick} variant="lightTransparent">
      Click me!
    </Button>

    <Button m={3} loading onClick={onClick} variant="lightTransparent">
      Click me!
    </Button>

    <Button disabled m={3} onClick={onClick} variant="lightTransparent">
      Disabled :(
    </Button>
  </Wrapper>
));
buttonStories.add('as Link', () => (
  <Wrapper color="yellow">
    <Button as={Link} m={3} onClick={onClick}>
      Click me!
    </Button>

    <Button as={Link} m={3} loading onClick={onClick}>
      Click me!
    </Button>

    <Button as={Link} disabled m={3} onClick={onClick}>
      Disabled :(
    </Button>
  </Wrapper>
));
