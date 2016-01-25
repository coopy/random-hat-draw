const webpack = require('webpack');

const baseConfig = require('./webpack.config');

const plugins = baseConfig.plugins || [];
const output = baseConfig.output || {};

const buildConfig = Object.assign({}, baseConfig, {
  output: Object.assign({}, output, {
    filename: 'hat-bundle.js'
  }),

  plugins: plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      // Signal production, so that webpack removes non-production code that
      // is in condtionals like: `if (process.env.NODE_ENV === 'production')`
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]),

  devtool: null
});

module.exports = buildConfig;
