const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ... other configurations
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './path/to/index.html', // your HTML file path
    }),
  ],
};
