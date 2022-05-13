const { resolve } = require('path');

module.exports = {
  type: 'react-app',
  webpack: {
    rules: {
      babel: {
        test: /\.jsx?/,
      },
    },
    extra: {
      entry: resolve(__dirname, 'example/index.jsx'),
      resolve: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
