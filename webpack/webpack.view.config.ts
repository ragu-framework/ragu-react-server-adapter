import {raguReactWebpackBaseConfig} from "./webpack.base.config";
import {RaguServerConfig} from "ragu-server";

const {merge} = require("webpack-merge");
const nodeExternals = require('webpack-node-externals');

export const raguReactWebpackViewConfig = (config: RaguServerConfig) => merge(raguReactWebpackBaseConfig(config), {
  externals: [
      nodeExternals({
        allowlist: /\.css$/
      }),
  ]
});
