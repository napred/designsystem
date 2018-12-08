import { css } from 'emotion';

export function createCssTag<TTagFn extends () => any>(tag: TTagFn): TTagFn {
  return tag;
}

const emotionCss = createCssTag(css);

export default emotionCss;
