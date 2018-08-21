import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'
import css from 'rollup-plugin-css-porter'
import lessModules from 'rollup-plugin-less-modules'
import commonjs from 'rollup-plugin-commonjs';

const env = process.env.NODE_ENV
const config = {
  input: 'src/index.js',
  plugins: [
    lessModules(),
    css(),
    commonjs({
      include: [
        'node_modules/**'
      ],
      namedExports: {
        'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement', 'isValidElement', 'cloneElement'],
        'node_modules/react-dom/index.js': ['createPortal', 'findDOMNode']
      }
    })
  ]
}

if (env === 'es' || env === 'cjs') {
  config.output = { format: env, indent: false }
  config.external = ['symbol-observable']
  config.plugins.push(
    babel({
      plugins: ['external-helpers']
    })
  )
}

if (env === 'development' || env === 'production') {
  config.output = { format: 'umd', name: 'UI', indent: false }
  config.plugins.push(
    nodeResolve({
      jsnext: true
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  )
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config;
