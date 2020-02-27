module.exports = {
    entry: './application/kviss.js',
    output: {
        filename: 'kviss.js',
      },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };