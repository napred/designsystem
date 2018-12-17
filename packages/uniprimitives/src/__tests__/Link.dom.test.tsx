/**
 * @jest-environment jsdom
 */
/// <reference lib="dom" types="react-testing-library" />

import { DesignSystem } from '@napred/native';
import React from 'react';
import { render } from 'react-testing-library';
import { Link, Text } from '../';

describe('Link', () => {
  it('renders as anchor in DOM', () => {
    const { asFragment } = render(
      <DesignSystem>
        <Link>
          <Text>Link</Text>
        </Link>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
