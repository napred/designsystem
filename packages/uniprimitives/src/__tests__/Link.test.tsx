import React from 'react';
import { Link, Text } from '../';
import { render } from '../testUtils';

describe('Link', () => {
  it('works correctly', async () => {
    await render(
      <Link>
        <Text>Text</Text>
      </Link>,
    );

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
