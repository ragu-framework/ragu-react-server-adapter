import {raguVueWebpackBaseConfig} from "./webpack.base.config";
const {merge} = require("webpack-merge");


export const raguReactWebpackHydrateConfig = (assetsPrefix: string, developmentEnvironment: boolean = false) =>
    merge(raguVueWebpackBaseConfig(assetsPrefix, developmentEnvironment), developmentEnvironment ? {
      devtool: 'source-map'
    } : {}, {
      target: 'web',
    });
