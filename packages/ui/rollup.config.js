import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import { terser } from 'rollup-plugin-terser';
import sourceMaps from 'rollup-plugin-sourcemaps';

const input = 'src/index.js';
const external = id => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/');
const name = 'NapredUi';

const babelCJS = {
  presets: [['@babel/preset-env'], '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties'],
  exclude: /node_modules/,
};
const babelESM = {
  runtimeHelpers: true,
  presets: [['@babel/preset-env'], '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/transform-runtime', { useESModules: true }],
  ],
  exclude: /node_modules/,
};

const commonPlugins = babelConfig => [
  flow({
    // needed for sourcemaps to be properly generated
    pretty: true,
  }),
  sourceMaps(),
  nodeResolve(),
  babel(babelConfig),
  commonjs({
    ignoreGlobal: true,
  }),
];

const prodPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  terser({
    sourcemap: true,
  }),
];

const globals = { react: 'React' };
const umdBase = {
  input,
  external: Object.keys(globals),
  output: {
    format: 'umd',
    globals,
    name,
    sourcemap: true,
  },
  plugins: commonPlugins(babelESM),
};

const umdDevConfig = {
  ...umdBase,
  output: {
    ...umdBase.output,
    file: 'dist/ui.umd.js',
  },
  plugins: umdBase.plugins.concat(
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ),
};

const umdProdConfig = {
  ...umdBase,
  output: {
    ...umdBase.output,
    file: 'dist/ui.umd.min.js',
  },
  plugins: umdBase.plugins.concat(prodPlugins),
};

const cjsConfig = {
  input,
  external,
  output: {
    file: 'dist/ui.cjs.js',
    format: 'cjs',
  },
  plugins: commonPlugins(babelCJS),
};

const esmConfig = {
  input,
  external,
  output: {
    file: 'dist/ui.esm.js',
    format: 'esm',
  },
  plugins: commonPlugins(babelESM),
};

export default [umdDevConfig, umdProdConfig, cjsConfig, esmConfig];
