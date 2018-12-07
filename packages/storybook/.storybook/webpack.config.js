const { resolve: resolvePath } = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.forEach((rule, i) => {
    if (rule.loader && rule.loader.includes('file-loader')) {
      defaultConfig.module.rules[i].exclude = [/\.svg$/];
    }
  });
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
  defaultConfig.module.rules.unshift({
    test: /\.svg$/,
    loader: require.resolve('@svgr/webpack'),
  });
  defaultConfig.plugins.push(new ForkTsCheckerWebpackPlugin());
  defaultConfig.resolve.extensions.push('.ts', '.tsx');
  defaultConfig.resolve.alias = {
    ...defaultConfig.resolve.alias,
    // hack because yarn workspaces are copying react everywhere so we need to set up only one destination
    react: resolvePath(__dirname, '../node_modules/react'),
    'react-dom': resolvePath(__dirname, '../node_modules/react-dom'),
    '@napred/ds': resolvePath(__dirname, '../../ds/src'),
    '@napred/primitives': resolvePath(__dirname, '../../primitives/src'),
    '@napred/ui': resolvePath(__dirname, '../../ui/src'),
  };

  return defaultConfig;
};
