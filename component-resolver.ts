import {RaguServerConfig, StateComponentResolver, StateComponentSingleComponentResolver} from "ragu-server";
import * as path from 'path';

export class ReactComponentResolver extends StateComponentResolver {
  clientSideResolverTemplate: string = path.join(__dirname, 'resolvers', 'client-side-resolver');
  stateResolverTemplate: string = path.join(__dirname, 'resolvers', 'state-resolver');
  serverSideResolverTemplate: string = path.join(__dirname, 'resolvers', 'server-side-resolver');

  stateFileFor(componentName: string): string {
    return path.join(this.serverSideFileFor(componentName), 'state');
  }

  serverSideFileFor(componentName: string): string {
    return path.join(this.config.components.sourceRoot, componentName);
  }

  clientSideFileFor(componentName: string): string {
    return this.serverSideFileFor(componentName);
  }
}

export class ReactSingleComponentResolver extends StateComponentSingleComponentResolver {
  clientSideResolverTemplate: string = path.join(__dirname, 'resolvers', 'client-side-resolver');
  stateResolverTemplate: string = path.join(__dirname, 'resolvers', 'state-resolver');
  serverSideResolverTemplate: string = path.join(__dirname, 'resolvers', 'server-side-resolver');

  constructor(config: RaguServerConfig, componentFile: string, stateFile?: string) {
    super(config, componentFile, componentFile, stateFile);
  }
}
