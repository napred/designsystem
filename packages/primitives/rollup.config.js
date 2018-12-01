import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
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
const name = 'napred.primitives';

/* const commonPlugins = () => [
  sourceMaps(),
  nodeResolve(),
  commonjs({
    ignoreGlobal: true,
    namedExports: {
      react: [
        'useEffect',
        'createContext',
        'useContext',
        'useMemo',
        'useState',
        'useCallback',
        'createElement',
      ],
    },
  }),
];*/

const prodPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  terser({
    sourcemap: true,
  }),
];

const globals = {};
const umdBase = {
  input,
  external: Object.keys(globals),
  output: {
    format: 'umd',
    globals,
    name,
    sourcemap: true,
  },
  onwarn,
  plugins: [
    sourceMaps(),
    nodeResolve(),
    commonjs({
      ignoreGlobal: true,
      namedExports: {
        react: [
          'useEffect',
          'createContext',
          'useContext',
          'useMemo',
          'useState',
          'useCallback',
          'createElement',
        ],
      },
    }),
  ],
};

const umdDevConfig = {
  ...umdBase,
  output: {
    ...umdBase.output,
    file: 'dist/primitives.umd.js',
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
    file: 'dist/primitives.umd.min.js',
  },
  plugins: umdBase.plugins.concat(prodPlugins),
};

const cjsConfig = {
  input,
  external,
  output: {
    file: 'dist/primitives.cjs.js',
    format: 'cjs',
    sourcemaps: true,
  },
  onwarn,
  plugins: [
    sourceMaps(),
    nodeResolve(),
    commonjs({
      ignore: ['emotion', 'react'],
      ignoreGlobal: true,
    }),
  ],
};

export default [umdDevConfig, umdProdConfig, cjsConfig];