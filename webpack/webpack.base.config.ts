import webpack from "webpack";
import path from 'path';
import {RaguServerConfig} from "ragu-server";

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

export const raguReactWebpackBaseConfig = (config: RaguServerConfig): webpack.Configuration => {
  return {
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, '..', 'node_modules')],
      extensions: [ '.js', '.jsx', '.ts', 'tsx' ],
    },
    resolveLoader: {
      modules: ['node_modules', path.resolve(__dirname, '..', 'node_modules')],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                  '@babel/preset-env',
                  ["@babel/preset-react", { "runtime": "automatic" }]
              ],
              plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-transform-modules-commonjs']
            }
          }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            esModule: false,
            publicPath: config.compiler.assetsPrefix
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            MiniCSSExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: config.environment === 'development' } },
          ],
        }
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin(),
      new webpack.ProvidePlugin({
        React: 'react',
      })
    ]
  }
}
