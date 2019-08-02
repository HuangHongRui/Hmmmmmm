const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Hmmmmmm.js',
    library: 'Hmmmmmm',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
};