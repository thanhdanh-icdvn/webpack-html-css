/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const AppleTouchIconsPlugin = require('apple-touch-icons-webpack-plugin')
const appIconOptions = {
  icon: 'logo192.png'
}
const mode = process.env.NODE_ENV || 'development'
const client = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  devtool: mode === 'development' ? 'inline-source-map' : false,
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    alias: {
      assets: path.resolve(__dirname, './src/assets/'),
      api: path.resolve(__dirname, './src/api/'),
      layouts: path.resolve(__dirname, './src/layouts/'),
      pages: path.resolve(__dirname, './src/pages/'),
      components: path.resolve(__dirname, './src/components/')
    }
  },
  devServer: {
    static: './build',
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new ESLintPlugin(),
    new AppleTouchIconsPlugin(appIconOptions),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.ico',
      filename: 'index.html',
      manifest: './public/manifest.json'
    })
  ],
  optimization: {
    runtimeChunk: 'single'
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}
module.exports = [client]
