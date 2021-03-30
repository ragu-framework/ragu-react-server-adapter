import {createConfig, RaguServerBaseConfigProps, RaguServerConfig} from "ragu-server";
import {ReactComponentResolver} from "./component-resolver";
import {merge} from "webpack-merge";
import {raguReactWebpackHydrateConfig, raguReactWebpackViewConfig} from "./webpack";

export const createReactRaguServerConfig = (requiredConfig: RaguServerBaseConfigProps = {}): RaguServerConfig => {
  const config = createConfig(requiredConfig);

  if (!requiredConfig.components?.resolver) {
    config.components.resolver = new ReactComponentResolver(config);
  }

  if (!requiredConfig.compiler?.webpack?.serverSide) {
    config.compiler.webpack.serverSide = merge(
        config.compiler.webpack.serverSide,
        raguReactWebpackViewConfig(config)
    );
  }

  if (!requiredConfig.compiler?.webpack?.clientSide) {
    config.compiler.webpack.clientSide = merge(
        config.compiler.webpack.clientSide,
        raguReactWebpackHydrateConfig(config)
    );
  }

  return config;
}
