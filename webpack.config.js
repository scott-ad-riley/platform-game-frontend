config = {
  entry: {
    game: "./src/entry.js",
    leaderboard: "./src/leaderboard.js"
  },
  output: {
    path: "./build",
    filename: "[name].js"
  },
  resolve: {
    extensions: ['', '.js']
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = config;
