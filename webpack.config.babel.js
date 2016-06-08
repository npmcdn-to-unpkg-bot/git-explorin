import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
}

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.src + '/index.html',
  filename: 'index.html',
  inject: 'body'
})

const HTMLWebpackPluginSecondary = new HtmlWebpackPlugin({
  template: PATHS.src + '/index.html',
  filename: '200.html',
  inject: 'body'
})
const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings:false
  }
})

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const base = {
  entry: [
    PATHS.src
  ],
  output: {
    path: PATHS.dist,
    filename: 'index_bundle.js'
  },
  module: {
    noParse: [/autoit\.js$/],
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders : ['babel-loader']},
      {test: /\.json$/, loader: 'json'},
      {test: /\.scss|.css$/, loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass']},
      { test: /\.png$/, loader: "url-loader?limit=200000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|woff|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ]
  },
  resolve: {
    root: path.resolve('./src')
  }
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.src,
    hot: true,
    inline: true,
    progress: true,
    historyApiFallback: true
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig, HTMLWebpackPluginSecondary, UglifyJsPlugin, productionPlugin]
}

var env = isProduction === true ? productionConfig : developmentConfig

export default Object.assign({}, base, env)