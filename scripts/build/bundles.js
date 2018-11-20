const bundleTypes = {
  UNIVERSAL: 'UNIVERSAL',
};

const bundles = [
  {
    type: bundleTypes.UNIVERSAL,
    entry: '@napred/ds',
    externals: ['styled-components'],
  },
  // {
  //   type: bundleTypes.UNIVERSAL,
  //   entry: '@napred/primitives',
  //   externals: ['@napred/ds'],
  // },
];

module.exports = {
  bundleTypes,
  bundles,
};
