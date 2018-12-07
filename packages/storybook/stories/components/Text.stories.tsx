import { storiesOf } from '@storybook/react';
import React from 'react';
import { Text } from '../../../primitives/src';

const textStories = storiesOf('Components/Typography/Text', module);

textStories.add('basic text', () => (
  <Text>
    Basic věčně českém květiny, kopce mj. narozen ne opadavých z tvrdě úsporu dobře původních ně jí
    co čili a mělo vlhkost dlouhý. Sobě poznala pozorovatelného Nobel jediná o zřítí. Tyto, ale
    dalším. Mi ně chuť nákaza lidstvo ní služby. Přepis čase uvnitř považována oblastech plyne
    spojujících doprovázet u ruky u otroctví proces vědu hry pádnými s slovníky.
  </Text>
));

textStories.add('center-aligned', () => (
  <Text textAlign="center" fontSize={0}>
    Basic věčně českém květiny, kopce mj. narozen ne opadavých z tvrdě úsporu dobře původních ně jí
    co čili a mělo vlhkost dlouhý. Sobě poznala pozorovatelného Nobel jediná o zřítí. Tyto, ale
    dalším. Mi ně chuť nákaza lidstvo ní služby. Přepis čase uvnitř považována oblastech plyne
    spojujících doprovázet u ruky u otroctví proces vědu hry pádnými s slovníky.
  </Text>
));

textStories.add('code', () => (
  <Text as="pre" fontSize={0}>
    Basic věčně českém květiny, kopce mj. narozen ne opadavých z tvrdě úsporu dobře původních ně jí
    co čili a mělo vlhkost dlouhý. Sobě poznala pozorovatelného Nobel jediná o zřítí. Tyto, ale
    dalším. Mi ně chuť nákaza lidstvo ní služby. Přepis čase uvnitř považována oblastech plyne
    spojujících doprovázet u ruky u otroctví proces vědu hry pádnými s slovníky.
  </Text>
));
