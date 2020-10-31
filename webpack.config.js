const path = require('path');


module.exports = {
  entry: ('./client/public/index.html'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },

  devServer: {
    publicPath: "/build/"
  }
}