const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  mode: 'development',
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      'swiper': path.resolve(__dirname, './node_modules/swiper'),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: "src/index.html"
    }),
    new MiniCssExtractPlugin()
  ],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
    watchFiles: ["./src/*"],
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|tiff|bmp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[ext]'
        }
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name].[ext]'
        }
      },
      {
        test: /\.(eot|woff(2)|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options:{
              postcssOptions: {
                sourceMap: true,
                plugins: [
                  "postcss-flexbugs-fixes",
                  [
                    "postcss-preset-env",
                    {
                      "autoprefixer": {
                        "flexbox": "no-2009"
                      },
                      "stage": 3,
                      "features": {
                        "custom-properties": false
                      }
                    }
                  ]
                ]
              }
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.font\.js/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'webfonts-loader'
        ]
      },
      {
        test:/\.html$/,
        use:{
          loader:'html-loader'
        }
      }
    ],
  },
}