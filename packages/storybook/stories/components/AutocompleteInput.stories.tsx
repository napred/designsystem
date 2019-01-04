import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { StringValue } from 'react-values';

import AutocompleteInput from '../../../ui/src/form/AutocompleteInput';

const inputStories = storiesOf('Components/Form/AutocompleteInput', module);

inputStories.add('default width and type', () => (
  <StringValue>
    {({ set, value }: { set: (val: string) => any; value: string }) => (
      <AutocompleteInput<string>
        p={1}
        placeholder="Write something to show suggestions"
        onAutocomplete={e => {
          action('onAutocomplete')(e);

          if (!e.target.value) {
            return [];
          }

          return ['test 1', 'test 2', 'test 3'];
        }}
        onChange={e => {
          action('onChange')(e);

          set(e.target.value);
        }}
        onSuggestionClick={suggestion => {
          action('onSuggestionClick')(suggestion);

          set(suggestion);
        }}
        value={value}
      />
    )}
  </StringValue>
));

inputStories.add('Full screen rounded with placeholder', () => (
  <StringValue>
    {({ set, value }: { set: (val: string) => any; value: string }) => (
      <AutocompleteInput<string>
        px={1}
        py={1}
        width="100%"
        borderRadius={24}
        placeholder="Pssst... type something here"
        onAutocomplete={e => {
          action('onAutocomplete')(e);

          if (!e.target.value) {
            return [];
          }

          return ['test 1', 'test 2', 'test 3'];
        }}
        onChange={e => {
          action('onChange')(e);

          set(e.target.value);
        }}
        onSuggestionClick={suggestion => {
          action('onSuggestionClick')(suggestion);

          set(suggestion);
        }}
        value={value}
      />
    )}
  </StringValue>
));
