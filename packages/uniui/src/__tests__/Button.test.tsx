import React from 'react';
import { Button } from '../';
import { render } from '../testUtils';

describe('Button', () => {
  it('works correctly', async () => {
    await render(
      <Button>Hello world</Button>,
    );

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
