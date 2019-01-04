import { renderStylesToString } from 'emotion-server';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createComponent, createSimpleCache, DesignSystem } from '../';

const Box = createComponent('Box', 'div');

const RedBox = createComponent('RedBox', Box);

RedBox.defaultProps = { color: 'red' };

describe('design system usage on server', () => {
  it('generates styles on renders', () => {
    const cache = createSimpleCache();
    const app = (
      <DesignSystem cache={cache}>
        <Box as={RedBox} className="p1" color="green" p={1} m={0} bgColor="black">
          Green RedBox
        </Box>
      </DesignSystem>
    );
    const html1 = renderStylesToString(renderToString(app));
    expect(html1).toMatchSnapshot();
    const html2 = renderStylesToString(renderToString(app));
    expect(html2).toMatchSnapshot();

    expect(html1).toBe(html2);
  });
});
