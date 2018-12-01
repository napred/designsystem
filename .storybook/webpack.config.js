// const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  // push storysource plugin
  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });
  defaultConfig.module.rules.push({
    test: /\.stories\.tsx?$/,
    loader: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('ts-loader'),
    options: {
      // disable type checker - we will use it in fork plugin
      transpileOnly: true,
    },
  });
  defaultConfig.plugins.push(/* new TSDocgenPlugin(), */ new ForkTsCheckerWebpackPlugin());
  defaultConfig.resolve.extensions.push('.ts', '.tsx');

  return defaultConfig;
};
