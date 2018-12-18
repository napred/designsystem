declare module 'css-mediaquery' {
  export function match(
    mediaQuery: string,
    view: { type: 'screen'; width: number; height: number },
  ): boolean;
}
