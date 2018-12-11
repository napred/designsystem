import { createComponent } from '@napred/browser';
import * as BoxDef from './Box';
import * as CardDef from './Card';
import * as FlexDef from './Flex';
import * as ImageDef from './Image';
import * as LinkDef from './Link';
import * as TextDef from './Text';
import * as TitleDef from './Title';

export const Box = createComponent(BoxDef.name, 'div');

Box.defaultProps = BoxDef.defaultProps;

export const Card = createComponent(CardDef.Card.name, 'div');
export const CardFooter = createComponent(CardDef.CardFooter.name, 'div');
export const CardHeader = createComponent(CardDef.CardHeader.name, 'div');

Card.defaultProps = CardDef.Card.defaultProps;
CardFooter.defaultProps = CardDef.CardFooter.defaultProps;
CardHeader.defaultProps = CardDef.CardHeader.defaultProps;

export const Flex = createComponent(FlexDef.name, 'div');

Flex.defaultProps = FlexDef.defaultProps;

export const Image = createComponent(ImageDef.name, 'img');

Image.defaultProps = ImageDef.defaultProps;

export const Link = createComponent(LinkDef.name, 'a', {
  style: LinkDef.style,
});

Link.defaultProps = LinkDef.defaultProps;

export const Text = createComponent(TextDef.name, 'div');

Text.defaultProps = TextDef.defaultProps;

export const Title = createComponent(TitleDef.name, 'h1');

Title.defaultProps = TitleDef.defaultProps;
