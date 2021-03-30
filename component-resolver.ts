import {CustomComponentResolver, CustomSingleComponentResolver} from "ragu-server";
import * as path from 'path';

export class ReactComponentResolver extends CustomComponentResolver {
  wrapperResolverTemplate = path.join(__dirname, 'resolvers', 'wrapper');
}

export class ReactSingleComponentResolver extends CustomSingleComponentResolver {
  wrapperResolverTemplate = path.join(__dirname, 'resolvers', 'wrapper');
}
