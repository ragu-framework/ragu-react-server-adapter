import {createConfig, RaguServerBaseConfigProps} from "ragu-server";
import {ReactComponentResolver} from "./component-resolver";
import {merge} from "webpack-merge";
import {raguReactWebpackHydrateConfig, raguReactWebpackViewConfig} from "./webpack";

export const createReactRaguServerConfig = (requiredConfig: RaguServerBaseConfigProps) => {
  const config = createConfig(requiredConfig);

  if (!requiredConfig.components.resolver) {
    config.components.resolver = new ReactComponentResolver(config);
  }

  if (!requiredConfig.compiler.webpack?.view) {
    config.compiler.webpack.view = merge(
        config.compiler.webpack.view,
        raguReactWebpackViewConfig(config)
    );
  }

  if (!requiredConfig.compiler.webpack?.hydrate) {
    config.compiler.webpack.hydrate = merge(
        config.compiler.webpack.hydrate,
        raguReactWebpackHydrateConfig(config)
    );
  }

  return config;
}
