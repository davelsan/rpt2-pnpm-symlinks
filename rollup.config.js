import path    from 'path';
import rpt2    from 'rollup-plugin-typescript2';
import pkgJson from './package.json';

export default {

  input: './src/index.ts',

  external: ['vue'],

  plugins: [
    rpt2({
      check: true,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    })
  ],

  output: [
    {
      file: pkgJson.browser,
      format: 'es',
      sourcemap: true,
    },
  ],
}