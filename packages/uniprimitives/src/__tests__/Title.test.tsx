import React from 'react';
import { Title } from '../';
import { render } from '../testUtils';

describe('Title', () => {
  it('works correctly', async () => {
    await render(<Title>Text</Title>);

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
