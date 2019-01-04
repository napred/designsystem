import React from 'react';
import { Text } from '../';
import { render } from '../testUtils';

describe('Text', () => {
  it('works correctly', async () => {
    await render(<Text>Text</Text>);

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
