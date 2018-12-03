/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from 'react-testing-library';
import { DesignSystem } from '../packages/ds/src';
import { Link } from '../packages/primitives/src';
import { Button } from '../packages/ui/src';

describe('test', () => {
  it('works correctly', () => {
    const { asFragment } = render(
      <DesignSystem>
        <Button as={Link} disabled variant="primary">
          Trololo
        </Button>
      </DesignSystem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
