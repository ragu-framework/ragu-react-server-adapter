import webpack from "webpack";
import path from 'path';

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

export const raguReactWebpackBaseConfig = (assetsPrefix: string, developmentEnvironment: boolean = false): webpack.Configuration => {
  return {
    mode: 'production',
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, '..', 'node_modules')],
      extensions: [ '.js', '.jsx', '.ts', 'tsx' ],
      alias: {
        react: path.resolve("./node_modules/react")
      }
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
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-transform-modules-commonjs']
            }
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            esModule: false,
            publicPath: assetsPrefix
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            MiniCSSExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: developmentEnvironment } },
          ],
        }
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin(),
    ]
  }
}
