import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const input = 'temp/index.js';
const external = id => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/');

const babelCJS = {
  babelrc: false,
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  exclude: /node_modules/,
};

const babelESM = {
  babelrc: false,
  exclude: /node_modules/,
  runtimeHelpers: true,
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
};

export default [
  // cjs
  {
    external,
    input,
    output: {
      exports: 'named',
      file: 'dist/native.cjs.js',
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
    ],
  },

  // esm
  {
    input,
    external,
    output: {
      file: 'dist/native.m.js',
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
