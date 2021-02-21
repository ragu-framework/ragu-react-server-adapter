import {StateComponentResolver} from "ragu-server";
import * as path from 'path';

export class ReactComponentResolver extends StateComponentResolver {
  clientSideResolverTemplate: string = path.join(__dirname, 'resolvers', 'hydrate-resolver');
  stateResolverTemplate: string = path.join(__dirname, 'resolvers', 'state-resolver');
  serverSideResolverTemplate: string = path.join(__dirname, 'resolvers', 'view-resolver');

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
