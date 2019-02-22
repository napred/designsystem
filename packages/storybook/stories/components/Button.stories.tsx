import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { SyntheticEvent } from 'react';
import { Flex, Link } from '../../../primitives/src';
import { Button } from '../../../ui/src';

const buttonStories = storiesOf('Components/Form/Button', module);

const Wrapper = ({ color, children, onClick = null }: any) => (
  <Flex
    bgColor={color || 'greyLight'}
    height="100vh"
    width="100vw"
    justifyContent="center"
    alignItems="center"
    onClick={onClick}
  >
    {children}
  </Flex>
);

const onClickAction = action('onClick');

buttonStories.add('default button', () => (
  <Wrapper>
    <Button m={3} onClick={onClickAction}>
      Click me!
    </Button>

    <Button m={3} loading onClick={onClickAction}>
      Click me!
    </Button>

    <Button disabled m={3} onClick={onClickAction}>
      Disabled :(
    </Button>
  </Wrapper>
));
buttonStories.add('primary', () => (
  <Wrapper>
    <Button m={3} onClick={onClickAction} variant="primary">
      Click me!
    </Button>

    <Button m={3} onClick={onClickAction} loading variant="primary">
      Click me!
    </Button>

    <Button disabled m={3} onClick={onClickAction} variant="primary">
      Disabled :(
    </Button>
  </Wrapper>
));
buttonStories.add('transparent', () => (
  <Wrapper>
    <Button m={3} onClick={onClickAction} variant="transparent">
      Click me!
    </Button>

    <Button m={3} loading onClick={onClickAction} variant="transparent">
      Click me!
    </Button>

    <Button disabled m={3} onClick={onClickAction} variant="transparent">
      Disabled :(
    </Button>
  </Wrapper>
));
buttonStories.add('light transparent', () => (
  <Wrapper color="yellow">
    <Button m={3} onClick={onClickAction} variant="lightTransparent">
      Click me!
    </Button>

    <Button m={3} loading onClick={onClickAction} variant="lightTransparent">
      Click me!
    </Button>

    <Button disabled m={3} onClick={onClickAction} variant="lightTransparent">
      Disabled :(
    </Button>
  </Wrapper>
));
buttonStories.add('as Link', () => (
  <Wrapper color="yellow">
    <Button as={Link} m={3} onClick={onClickAction}>
      Click me!
    </Button>

    <Button as={Link} m={3} loading onClick={onClickAction}>
      Click me!
    </Button>

    <Button as={Link} disabled m={3} onClick={onClickAction}>
      Disabled :(
    </Button>
  </Wrapper>
));
buttonStories.add('prevent default', () => (
  <Wrapper onClick={onClickAction}>
    <Button m={3} onClick={(e: SyntheticEvent<any>) => {
      e.preventDefault();
      e.stopPropagation();

      action('preventDefault')();
    }}>
      Click me!
    </Button>
  </Wrapper>
));
