import React from 'react';
import { Box, Text } from '../';
import { render } from '../testUtils';

describe('Box', () => {
  it('works correctly', async () => {
    await render(
      <Box>
        <Text>Button</Text>
      </Box>,
    );

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
