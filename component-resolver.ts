import {StateComponentResolver} from "ragu-server";
import * as path from 'path';

export class ReactComponentResolver extends StateComponentResolver {
  hydrateResolver: string = path.join(__dirname, 'resolvers', 'hydrate-resolver');
  stateResolver: string = path.join(__dirname, 'resolvers', 'state-resolver');
  viewResolver: string = path.join(__dirname, 'resolvers', 'view-resolver');

  stateFileFor(componentName: string): string {
    return path.join(this.viewFileFor(componentName), 'state');
  }

  viewFileFor(componentName: string): string {
    return path.join(this.config.components.sourceRoot, componentName);
  }

  hydrateFileFor(componentName: string): string {
    return this.viewFileFor(componentName);
  }
}
