import pkgJson from './package.json';

export default {

  input: './src/index.js',

  external: ['vue'],

  output: [
    {
      file: pkgJson.browser,
      format: 'es',
      sourcemap: true,
    },
  ],
}