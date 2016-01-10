var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssImport = require('postcss-import');

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: './build',
    publicPath: '/',
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
        loader: "style-loader!css-loader!postcss-loader"
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  postcss: function (webpack) {
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
