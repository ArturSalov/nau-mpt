const HtmlWebpackPlugin =  require('html-webpack-plugin');
module.exports = {
  entry: './javascript/main.js',
  plugins: [new HtmlWebpackPlugin ( {template: './index.html'})]
};
