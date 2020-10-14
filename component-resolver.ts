import {RaguServerConfig, TemplateComponentResolver} from "ragu-server";
import * as path from 'path';
import * as fs from 'fs';

export class ReactComponentResolver extends TemplateComponentResolver {
  constructor(config: RaguServerConfig) {
    super(config);
  }

  async hydrateTemplateFor(componentName: string): Promise<string> {
    const componentPath = path.join(this.config.components.sourceRoot, componentName);

    return `const ReactDOM = require("react-dom");

module.exports.default = {
  async hydrate(el, props, state) {
    this.el = el;
    this.app = await require('${componentPath}').default.render(props, state);
    ReactDOM.hydrate(this.app, el);
  },
  disconnect() {
    ReactDOM.unmountComponentAtNode(this.el);
  }
}
`;
  }

  async viewTemplateFor(componentName: string): Promise<string> {
    const componentPath = path.join(this.config.components.sourceRoot, componentName);

    return `const {renderToString} = require("react-dom/server");

module.exports.default = {
  async render(props) {
    const state = ${await this.stateTemplate(componentPath)};
    const app = await require('${componentPath}').default.render(props, state);

    return {
      state: state,
      html: renderToString(app)
    }
  }
}    
`;
  }

  async stateTemplate(componentPath: string) {
    const files: string[] = await fs.promises.readdir(componentPath);
    const statePath = path.join(componentPath, 'state');

    const fileExists = files.find((filename) => {
      const extension = path.extname(filename);

      return filename.replace(extension, '').toLowerCase() === 'state';
    });

    if (!fileExists) {
      return 'null';
    }

    return `await require('${statePath}').default.propsToState(props)`
  }
}
