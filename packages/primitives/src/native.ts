import { createComponent } from '@napred/native';
import { Image as NativeImage, Text as NativeText, View } from 'react-native';
import * as BoxDef from './Box';
import * as CardDef from './Card';
import * as FlexDef from './Flex';
import * as ImageDef from './Image';
import * as LinkDef from './Link';
import * as TextDef from './Text';
import * as TitleDef from './Title';

export const Box = createComponent(BoxDef.name, View);

Box.defaultProps = BoxDef.defaultProps;

export const Card = createComponent(CardDef.Card.name, View);
export const CardFooter = createComponent(CardDef.CardFooter.name, View);
export const CardHeader = createComponent(CardDef.CardHeader.name, View);

Card.defaultProps = CardDef.Card.defaultProps;
CardFooter.defaultProps = CardDef.CardFooter.defaultProps;
CardHeader.defaultProps = CardDef.CardHeader.defaultProps;

export const Flex = createComponent(FlexDef.name, View);

Flex.defaultProps = FlexDef.defaultProps;

export const Image = createComponent(ImageDef.name, NativeImage);

// @ts-ignore - for now, because we don't have a check for string components, so it should error in browser too
Image.defaultProps = ImageDef.defaultProps;

export const Link = createComponent(LinkDef.name, NativeText, {
  style: LinkDef.style,
});

Link.defaultProps = LinkDef.defaultProps;

export const Text = createComponent(TextDef.name, NativeText);

Text.defaultProps = TextDef.defaultProps;

export const Title = createComponent(TitleDef.name, NativeText);

Title.defaultProps = TitleDef.defaultProps;
