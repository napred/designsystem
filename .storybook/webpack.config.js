module.exports = (baseConfig, env, defaultConfig) => {
  // push storysource plugin
  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  return defaultConfig;
};
