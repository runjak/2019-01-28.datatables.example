const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.js',
  ],
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/',
  },
};