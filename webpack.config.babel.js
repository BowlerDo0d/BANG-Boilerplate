import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: {
    bundle: './src/app/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?sourceMap',
            'postcss-loader',
            'sass-loader?sourceMap'
          ],
          fallback: 'style-loader'
        }),
        test: /\.scss$/
      },
      {
        use: 'html-loader',
        test: /\.html$/
      },
      {
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/
      },
      {
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/
      },
      {
        use: 'url-loader?limit=10000&mimetype=application/octet-stream',
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/
      },
      {
        use: 'file-loader',
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/
      },
      {
        use: 'url-loader?limit=10000&mimetype=image/svg+xml',
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: '/',
        sassLoader: {
          includePaths: [
            path.resolve(__dirname, './src/app')
          ]
        },
        postcss: [
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ],
        resolve: {
          extensions: ['', '.js', '.scss'],
          root: [path.join(__dirname, './src')]
        }
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: process.env.NODE_ENV === 'development'
    })
  ]
};
