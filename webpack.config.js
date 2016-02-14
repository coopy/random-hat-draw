const path = require('path');

const autoprefixer = require('autoprefixer');
const precss = require('precss');
const postcssImport = require('postcss-import');

module.exports = {
  context: __dirname,
  entry: './src/js/root.jsx',
  output: {
    path: './build',
    publicPath: '/static',
    filename: 'hat-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        include: /src\/.*/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'spin': 'spin.js'
    },
    extensions: ['', '.js', '.jsx', '.css'],
    root: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src')
    ]
  },
  postcss(webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      autoprefixer,
      precss
    ];
  },
  devtool: 'sourcemap'
};
