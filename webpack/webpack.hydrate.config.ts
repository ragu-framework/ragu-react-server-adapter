import {raguReactWebpackBaseConfig} from "./webpack.base.config";
import {RaguServerConfig} from "ragu-server";
const {merge} = require("webpack-merge");


export const raguReactWebpackHydrateConfig = (config: RaguServerConfig) =>
    merge(raguReactWebpackBaseConfig(config), config.environment === 'development' ? {
      devtool: 'source-map'
    } : {});
