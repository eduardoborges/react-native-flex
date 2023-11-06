import { readPackageSync } from 'read-pkg';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const pkg = readPackageSync();

const input = 'src/index.tsx';
const external = Object.keys({ ...pkg.peerDependencies });
const sourcemap = true;
const exports = 'named';
const out = 'dist/index';

/** @type import('rollup').RollupOptions[] */
export default [
  {
    input,
    external,
    plugins: [
      esbuild({
        sourceMap: sourcemap,
      }),
    ],
    output: {
      file: `${out}.js`,
      format: 'esm',
      sourcemap,
      exports,
    },
  },
  {
    input,
    output: [{ file: `${out}.d.ts`, format: 'es' }],
    plugins: [dts()],
  },
];
