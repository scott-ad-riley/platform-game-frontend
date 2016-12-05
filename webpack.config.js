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
    extensions: ['', '.js'],
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  module:{
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = config;
