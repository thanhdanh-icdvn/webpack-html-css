const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');

/**
 * Function to generate HTML from template
 * @param {*} templateDir The tempalte directory
 * @returns Html filed in build directory
 */
function generateHtmlPlugins(templateDir = './src/pages') {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
    })
  })
}
const htmlPlugins = generateHtmlPlugins('./src/pages');

module.exports = {
  entry: './src/js/app.js',
  mode: 'development',
  resolve: {
    modules: ['./node_modules'],
    alias: {
      'swiper': path.resolve(__dirname, './node_modules/swiper'),
      'assets': path.resolve(__dirname, './src/assets')
    },
    fallback: {
      fs: false
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Make a global `process` variable that points to the `process` package,
      // because the `util` package expects there to be a global variable named `process`.
           // Thanks to https://stackoverflow.com/a/65018686/14239942
      process: 'process/browser'
   }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css"
    }),
    new CopyPlugin({
      patterns: [{
        from: 'src/assets/images',
        to: 'assets/images'
      }]
    }),
  ].concat(htmlPlugins),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "assets/js/[name].bundle.js",
    clean: true,
    publicPath: '/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
    watchFiles: ["./src/pages/**/*.html"],
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
            options: {
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

    ]
  }
}