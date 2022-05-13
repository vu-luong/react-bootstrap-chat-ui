import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/bundle/cjs/react-bootstrap-chat-ui.min.js',
        format: 'cjs',
      },
      {
        file: 'dist/bundle/esm/react-bootstrap-chat-ui.min.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        presets: ['@babel/env', '@babel/preset-react'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: 'node_modules/**',
      }),
      resolve({
        extensions: ['.es6', '.es', '.jsx', '.js', '.mjs'],
      }),
      external(),
      terser(),
    ],
    external: ['react', 'react-dom', 'prop-types', 'react-uuid', 'classnames'],
  },
];
