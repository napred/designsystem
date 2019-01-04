import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const input = 'temp/index.js';
const external = id => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/');

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
        extensions: ['.mjs', '.js', '.jsx'],
      }),
      commonjs({
        ignoreGlobal: true,
      }),
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
        extensions: ['.mjs', '.js', '.jsx'],
      }),
      commonjs(),
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
      babel(babelESM),
      nodeResolve({
        extensions: ['.mjs', '.js', '.jsx'],
      }),
      commonjs({
        ignoreGlobal: true,
      }),
    ],
  },
];
