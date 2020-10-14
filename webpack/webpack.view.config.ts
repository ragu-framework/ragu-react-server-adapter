import {raguReactWebpackBaseConfig} from "./webpack.base.config";

const {merge} = require("webpack-merge");
const nodeExternals = require('webpack-node-externals');

export const raguReactWebpackViewConfig = (assetsPrefix: string, developmentEnvironment: boolean = false) => merge(raguReactWebpackBaseConfig(assetsPrefix, developmentEnvironment), {
  target: 'node',

  devtool: 'source-map',

  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
  },

  externals: nodeExternals({
    allowlist: /\.css$/
  }),
});
