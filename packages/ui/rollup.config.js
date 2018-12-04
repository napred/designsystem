import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import svgr from '@svgr/rollup';

const input = 'temp/index.js';
const external = id => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/');
const name = 'napred.ui';

const babelCJS = {
  babelrc: false,
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  exclude: /node_modules/,
};

const babelESM = {
  exclude: /node_modules/,
  runtimeHelpers: true,
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
};

const commonjsOptions = {
  include: /node_modules/,
};

const globals = {
  '@napred/ds': 'napred.ds',
  '@napred/primitives': 'napred.primitives',
  emotion: 'emotion',
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default [
  // cjs dev
  {
    external,
    input,
    output: {
      exports: 'named',
      file: 'dist/ui.cjs.js',
      format: 'cjs',
    },
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs({
        ignoreGlobal: true,
        namedExports: {
          '@napred/primitives': ['Box', 'Card', 'Flex', 'Image', 'Link', 'Text', 'Title'],
          'react-transition-group': ['Transition'],
        },
      }),
      svgr(),
      babel(babelCJS),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },

  // cjs prod, min
  {
    external,
    input,
    output: {
      exports: 'named',
      file: 'dist/ui.cjs.min.js',
      format: 'cjs',
    },
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs(),
      svgr(),
      babel(babelCJS),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser({
        sourcemap: true,
      }),
    ],
  },

  // esm
  {
    input,
    external,
    output: {
      file: 'dist/ui.m.js',
      format: 'esm',
    },
    plugins: [
      svgr(),
      babel(babelESM),
      nodeResolve({
        extensions: ['.mjs', '.js', '.jsx', '.json'],
      }),
      commonjs({
        ignoreGlobal: true,
        namedExports: {
          'react-transition-group': ['Transition'],
        },
      }),
    ],
  },

  // umd
  {
    input,
    output: { exports: 'named', file: 'dist/ui.umd.js', format: 'umd', name, globals },
    external: Object.keys(globals),
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      svgr(),
      babel(babelESM),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },

  // umd prod
  {
    input,
    output: { exports: 'named', file: 'dist/ui.umd.min.js', format: 'umd', name, globals },
    external: Object.keys(globals),
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      svgr(),
      babel(babelESM),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser({
        sourcemap: true,
      }),
    ],
  },
];
