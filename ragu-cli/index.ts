import {RaguServerBaseConfigProps} from "ragu-server";
import {AdapterConfigFactory} from "ragu-cli/src/config/adapter-config-factory";
import {createReactRaguServerConfig} from "../config";
import {ReactSingleComponentResolver} from "../component-resolver";

export class ConfigFactory implements AdapterConfigFactory {
  createDirectoryConfig(overrides: RaguServerBaseConfigProps) {
    return createReactRaguServerConfig(overrides) as any;
  }

  createSingleComponentConfig(overrides: RaguServerBaseConfigProps, componentPath: string, statePath?: string) {
    const config = this.createDirectoryConfig(overrides);

    config.components.resolver = new ReactSingleComponentResolver(
        config,
        componentPath,
        statePath
    );

    return config as any;
  }
}
