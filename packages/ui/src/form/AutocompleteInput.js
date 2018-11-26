// @flow
/* eslint-disable react/sort-comp, no-return-assign, prefer-reflect */

import { createCssStyle, createComponent } from '@napred/ds';
import debounce from 'lodash.debounce';
import { css } from 'emotion';
import React, { useState } from 'react';
import Transition from 'react-transition-group/Transition';
import Input from './Input';
import Menu, { MenuItem } from '../Menu';

const AutocompleteBase = createComponent('AutocompleteBase', 'div', {
  styles: [
    createCssStyle(
      ['suggestions'],
      css`
        display: inline-block;
        position: relative;

        & > .results-wrapper {
          border-top: none;
        }
      `,
    ),
  ],
});

// $FlowExpectError
AutocompleteBase.defaultProps = {
  px: 0,
  py: 0,
};

type Props = {
  disabled?: boolean,
  className?: string,
  debounceTime?: number,
  defaultValue?: string | void,
  onAutocomplete: (
    e: SyntheticInputEvent<HTMLInputElement>,
  ) => Promise<Array<string>> | Array<string>,
  onBlur: (e: any) => any,
  onFocus: (e: any) => any,
  onChange: (e: SyntheticInputEvent<HTMLInputElement>) => any,
  onKeyUp?: (e: SyntheticKeyboardEvent<HTMLInputElement>) => any,
  onSuggestionClick: (suggestion: string) => any,
  placeholder?: string | void,
  value?: string | void,
};

export default function AutocompleteInput(props: Props) {
  // handleAutocomplete: (e: SyntheticEvent<HTMLInputElement>) => Array<string>;
  const {
    debounceTime,
    defaultValue,
    onKeyUp,
    onAutocomplete,
    onBlur,
    onChange,
    onFocus,
    onSuggestionClick,
    placeholder,
    value,
    disabled,
    ...rest
  } = props;

  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleAutocomplete = debounce(async (e: SyntheticInputEvent<HTMLInputElement>) => {
    try {
      setLoading(true);

      const res = await onAutocomplete(e);

      setResults(res);
    } finally {
      setLoading(false);
    }
  }, debounceTime);

  function handleChange(e: SyntheticInputEvent<HTMLInputElement>) {
    if (!loading) {
      // persist for onAutocomplete
      e.persist();

      onChange(e);

      handleAutocomplete(e);
    }
  }

  function handleBlur(e: Event) {
    setFocused(false);

    onBlur(e);
  }

  function handleFocus(e: Event) {
    setFocused(true);

    onFocus(e);
  }

  function renderResults() {
    if (!focused || results.length === 0) {
      // return null;
    }

    // onMouseDown because we want to beat onBlur
    return (
      <Transition appear in timeout={100}>
        {status => (
          <Menu opacity={status === 'entered' ? 1 : 0}>
            {results.map((result, index) => (
              <MenuItem
                button
                key={`${result}-${index}`}
                onMouseDown={() => onSuggestionClick(result)}
              >
                {result}
              </MenuItem>
            ))}
          </Menu>
        )}
      </Transition>
    );
  }

  const showSuggestions = focused && results.length > 0;

  return (
    <AutocompleteBase suggestions={showSuggestions} {...rest}>
      <Input
        disabled={disabled}
        borderRadiusBottomLeft={showSuggestions ? 0 : undefined}
        borderRadiusBottomRight={showSuggestions ? 0 : undefined}
        defaultValue={defaultValue}
        my={0}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        value={value}
        width="100%"
      />
      {renderResults()}
    </AutocompleteBase>
  );
}

// $FlowExpectError
AutocompleteInput.defaultProps = {
  debounceTime: 300,
  onAutocomplete: () => [],
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {},
  onSuggestionClick: () => {},
};
