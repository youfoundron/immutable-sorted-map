import { resolve } from 'path'
import { optimize } from 'webpack'
import makeRule from 'webpack-make-rule'

export default {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, './lib'),
    filename: 'index.js',
    library: 'ImmutableTrees',
    libraryTarget: 'umd'
  },
  module: {
    rules: [ makeRule(/\.js$/, 'babel-loader') ]
  },
  externals: {
    'immutable': {
      commonjs: 'immutable',
      commonjs2: 'immutable',
      amd: 'immutable',
      root: 'Immutable'
    }
  },
  plugins: [
    new optimize.UglifyJsPlugin({
      comments: false
    })
  ]
}
