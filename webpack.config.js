const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'Hmmmmmm.js',
    library: 'Hmmmmmm',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
};