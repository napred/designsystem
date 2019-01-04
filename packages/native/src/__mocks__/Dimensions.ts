let dimensions = {
  screen: {
    fontScale: 1,
    height: 667,
    scale: 3,
    width: 375,
  },
  window: {
    fontScale: 1,
    height: 667,
    scale: 3,
    width: 375,
  },
};

let listeners: any[] = [];

// @ts-ignore
module.exports = {
  _update: () => {
    listeners.map(listener => listener(dimensions));
  },
  addEventListener: (_: any, listener: any) => {
    listeners.push(listener);
  },
  get: (dim: 'window' | 'screen') => dimensions[dim],
  removeEventListener: (_: any, listener: any) => {
    listeners = listeners.filter(l => l !== listener);
  },
  set: (dim: any) => {
    dimensions = dim;
  },
};
