import { createComponent, createStyle, css, DSProps } from '@napred/browser';
import debounce from 'lodash.debounce';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { Transition } from 'react-transition-group';
import Menu, { MenuItem } from '../Menu';
import Input from './Input';

const AutocompleteBase = createComponent('AutocompleteBase', 'div', {
  styles: [
    createStyle(
      [],
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

// temporary fix because if we use defaultProps in config object
// it will require them :(
AutocompleteBase.defaultProps = {
  px: 0,
  py: 0,
};

interface IProps<T> extends DSProps {
  disabled?: boolean;
  className?: string;
  debounceTime?: number;
  defaultValue?: string | void;
  onAutocomplete: (e: ChangeEvent<HTMLInputElement>) => Promise<T[]> | T[];
  onBlur: (e: any) => any;
  onFocus: (e: any) => any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  onKeyUp?: (e: KeyboardEvent) => any;
  onSuggestionClick: (suggestion: T) => any;
  placeholder?: string | void;
  value?: string | void;
}

function AutocompleteInput<T>(props: IProps<T>) {
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
  const [results, setResults] = useState([] as T[]);

  const handleAutocomplete = useCallback(
    debounce(async (e: ChangeEvent<HTMLInputElement>) => {
      try {
        setLoading(true);

        const res = await onAutocomplete(e);

        setResults(res);
      } finally {
        setLoading(false);
      }
    }, debounceTime),
    [debounceTime, onAutocomplete, setLoading, setResults],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!loading) {
        // persist for onAutocomplete
        e.persist();

        onChange(e);

        handleAutocomplete(e);
      }
    },
    [onChange],
  );

  const handleBlur = useCallback(
    (e: Event) => {
      setFocused(false);

      onBlur(e);
    },
    [onBlur],
  );

  const handleFocus = useCallback(
    (e: Event) => {
      setFocused(true);

      onFocus(e);
    },
    [onFocus],
  );

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

AutocompleteInput.defaultProps = {
  debounceTime: 300,
  onAutocomplete: () => [],
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onSuggestionClick: () => {},
};

export default AutocompleteInput;
