/**
 * @jest-environment jsdom
 */
import { DesignSystem } from '@napred/native';
import React from 'react';
import { render } from 'react-testing-library';
import { Title } from '../';

describe('Title', () => {
  it('renders as anchor in DOM', () => {
    const { asFragment } = render(
      <DesignSystem>
        <Title>Title</Title>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
