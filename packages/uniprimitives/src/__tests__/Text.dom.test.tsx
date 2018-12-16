/**
 * @jest-environment jsdom
 */
import { DesignSystem } from '@napred/native';
import React from 'react';
import { render } from 'react-testing-library';
import { Text } from '../';

describe('Text', () => {
  it('renders as anchor in DOM', () => {
    const { asFragment } = render(
      <DesignSystem>
        <Text>Link</Text>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
