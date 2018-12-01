import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import sourceMaps from 'rollup-plugin-sourcemaps';

function onwarn(message) {
  const suppressed = ['UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED'];

  if (!suppressed.find(code => message.code === code)) {
    console.warn(message.message);
  }
}

const input = 'dist/index.js';
const external = id => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/');
const name = 'napred.ui';

const babelCJS = {
  presets: [['@babel/preset-env'], '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties', 'babel-plugin-inline-react-svg'],
  exclude: /node_modules/,
};

const commonPlugins = babelConfig => [
  sourceMaps(),
  nodeResolve(),
  babel(babelConfig),
  commonjs({
    ignoreGlobal: true,
    namedExports: {
      'react-dom': ['createPortal'],
    },
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
  onwarn,
  output: {
    format: 'umd',
    globals,
    name,
    sourcemap: true,
  },
  plugins: commonPlugins(babelCJS),
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
  onwarn,
  output: {
    file: 'dist/ui.cjs.js',
    format: 'cjs',
  },
  plugins: commonPlugins(babelCJS),
};

export default [umdDevConfig, umdProdConfig, cjsConfig];
