import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import { DesignSystem } from '../../../native/src';
import { Text } from '../../../primitives/src';
import { Text as NativeText } from '../../../primitives/src/native';

const textStories = storiesOf('Primitives/Text', module);

textStories.add('web', () => (
  <Fragment>
    <Text>
      Basic věčně českém květiny, kopce mj. narozen ne opadavých z tvrdě úsporu dobře původních ně
      jí co čili a mělo vlhkost dlouhý. Sobě poznala pozorovatelného Nobel jediná o zřítí. Tyto, ale
      dalším. Mi ně chuť nákaza lidstvo ní služby. Přepis čase uvnitř považována oblastech plyne
      spojujících doprovázet u ruky u otroctví proces vědu hry pádnými s slovníky.
    </Text>
    <Text textAlign="center">
      Basic věčně českém květiny, kopce mj. narozen ne opadavých z tvrdě úsporu dobře původních ně
      jí co čili a mělo vlhkost dlouhý. Sobě poznala pozorovatelného Nobel jediná o zřítí. Tyto, ale
      dalším. Mi ně chuť nákaza lidstvo ní služby. Přepis čase uvnitř považována oblastech plyne
      spojujících doprovázet u ruky u otroctví proces vědu hry pádnými s slovníky.
    </Text>
  </Fragment>
));

textStories.add('native', () => (
  <DesignSystem>
    <NativeText>
      Basic věčně českém květiny, kopce mj. narozen ne opadavých z tvrdě úsporu dobře původních ně
      jí co čili a mělo vlhkost dlouhý. Sobě poznala pozorovatelného Nobel jediná o zřítí. Tyto, ale
      dalším. Mi ně chuť nákaza lidstvo ní služby. Přepis čase uvnitř považována oblastech plyne
      spojujících doprovázet u ruky u otroctví proces vědu hry pádnými s slovníky.
    </NativeText>
    <NativeText textAlign="center">
      Basic věčně českém květiny, kopce mj. narozen ne opadavých z tvrdě úsporu dobře původních ně
      jí co čili a mělo vlhkost dlouhý. Sobě poznala pozorovatelného Nobel jediná o zřítí. Tyto, ale
      dalším. Mi ně chuť nákaza lidstvo ní služby. Přepis čase uvnitř považována oblastech plyne
      spojujících doprovázet u ruky u otroctví proces vědu hry pádnými s slovníky.
    </NativeText>
  </DesignSystem>
));
