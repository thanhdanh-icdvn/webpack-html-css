/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const AppleTouchIconsPlugin = require('apple-touch-icons-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const dotenv = require('dotenv')
const { DefinePlugin } = require('webpack')
const appIconOptions = {
  icon: 'logo192.png'
}
const mode = process.env.NODE_ENV || 'development'
const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})
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
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    static: [{ directory: path.resolve('./dist') }, { directory: path.resolve('./public') }],
    host: process.env.CLIENT_HOST,
    port: parseInt(process.env.PORT, 10) || 80,
    hot: true,
    historyApiFallback: true,
    open: true,
    proxy: {
      '/api/**': {
        target: `${process.env.API_HOST}:${process.env.API_PORT}`,
        secure: false,
        changeOrigin: true
      }
    }
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
        use: ['babel-loader', 'ts-loader']
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
    new DefinePlugin(envKeys),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.ico',
      filename: 'index.html',
      manifest: './public/manifest.json'
    }),
    new AppleTouchIconsPlugin(appIconOptions),
    new WebpackManifestPlugin()
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
