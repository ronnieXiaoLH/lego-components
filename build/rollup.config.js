import { nodeResolve } from '@rollup/plugin-node-resolve'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import { name } from '../package.json'

const file = (type) => `dist/${name}.${type}.js`

export { name, file }

const overrides = {
  compilerOptions: { declaration: true },
  exclude: ['test/**/*.ts', 'tests/**/*.tsx'],
}

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    css({ output: 'bundle.css' }),
    vue(),
    typescript({
      tsconfigOverride: overrides,
    }),
  ],
  external: ['vue', 'lodash-es'],
}
