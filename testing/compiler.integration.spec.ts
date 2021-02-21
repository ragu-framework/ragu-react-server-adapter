import {ClientSideCompiler, RaguServerConfig, ServerSideCompiler} from "ragu-server";
import {createTestConfig} from "./test-config-factory";
import {ReactComponentResolver, ReactSingleComponentResolver} from "../component-resolver";
import jsdom, {ConstructorOptions} from "jsdom";
import fs from "fs";
import path from "path";

describe('Compiler Integration Test', () => {
  describe('Server Side Compilation', () => {
    describe('using file structure', () => {
      let compiler: ServerSideCompiler;
      let config: RaguServerConfig;

      beforeAll(async () => {
        config = await createTestConfig();
        config.components.resolver = new ReactComponentResolver(config);

        compiler = new ServerSideCompiler(config);
        await compiler.compileAll();
      });

      it('renders the react component', async () => {
        const {default: compiledComponent} = require(compiler.compiledComponentPath('hello-world'));
        const renderResult = await compiledComponent.render({name: 'Hello, World!'});

        expect(renderResult.html).toContain('Hello, World!');
      });

      it('renders the react component with a state', async () => {
        const {default: compiledComponent} = require(compiler.compiledComponentPath('hello-world-state'));
        const renderResult = await compiledComponent.render({name: 'World'});

        expect(renderResult.state).toEqual({msg: 'Hello, World!'});
        expect(renderResult.html).toContain('Hello, World!');
      });
    });

    describe('using a single component', () => {
      let compiler: ServerSideCompiler;
      let config: RaguServerConfig;

      beforeAll(async () => {
        config = await createTestConfig();
        config.components.resolver = new ReactSingleComponentResolver(
            config,
            path.join(config.components.sourceRoot, 'hello-world-state'),
            path.join(config.components.sourceRoot, 'hello-world-state', 'state'),
        );

        compiler = new ServerSideCompiler(config);
        await compiler.compileAll();
      });

      it('renders the react component with a state', async () => {
        const {default: compiledComponent} = require(compiler.compiledComponentPath('hello-world-state'));
        const renderResult = await compiledComponent.render({name: 'World'});

        expect(renderResult.state).toEqual({msg: 'Hello, World!'});
        expect(renderResult.html).toContain('Hello, World!');
      });
    });
  });

  describe('Client Side Compilation', () => {
    let viewCompiler: ServerSideCompiler;
    let compiler: ClientSideCompiler;
    let config: RaguServerConfig;
    let dom: jsdom.JSDOM;


    beforeAll(async () => {
      config = await createTestConfig();
      config.components.resolver = new ReactComponentResolver(config);
      viewCompiler = new ServerSideCompiler(config);
      compiler = new ClientSideCompiler(config);
      await compiler.compileAll();
      await viewCompiler.compileAll();
    });

    beforeEach(() => {
      const options: ConstructorOptions = {
        url: config.compiler.assetsPrefix,
        resources: 'usable',
        runScripts: 'dangerously',
      }
      dom = new jsdom.JSDOM(undefined, options);

      (global as any).navigator = dom.window.navigator;
      (global as any).window = dom.window;
      (global as any).document = dom.window.document;
    });

    const evalCompiledClient = async (componentName: string) => {
      const url = new URL(await compiler.getClientFileName(componentName));
      const client = fs.readFileSync(url as any).toString();
      eval(client);
    }

    it('exports compiled component into window', async () => {
      const {default: compiledComponent} = require(viewCompiler.compiledComponentPath('hello-world'));
      const renderResult = await compiledComponent.render({name: 'Hello, World!'});

      await evalCompiledClient('hello-world');

      const resolvedComponent = (window as any)['test_components_hello-world'].default;
      const div = dom.window.document.createElement('div');

      div.innerHTML = renderResult.html;

      await resolvedComponent.hydrate(div, {name: 'Hello, World!'});

      expect(div.textContent).toContain('Hello, World');
    });

    it('rehydrates state', async () => {
      const {default: compiledComponent} = require(viewCompiler.compiledComponentPath('hello-world-state'));
      const renderResult = await compiledComponent.render({name: 'World'});
      await evalCompiledClient('hello-world-state');

      const resolvedComponent = (window as any)['test_components_hello-world-state'].default;
      const div = dom.window.document.createElement('div');

      div.innerHTML = renderResult.html;

      await resolvedComponent.hydrate(div, {name: 'World'}, {msg: 'Hello, World!'});

      expect(div.textContent).toContain('Hello, World');
    });

    it('renders a component', async () => {
      await evalCompiledClient('hello-world-state');

      const resolvedComponent = (window as any)['test_components_hello-world-state'].default;
      const div = dom.window.document.createElement('div');

      await resolvedComponent.render(div, {name: 'World'}, {msg: 'Hello, World!'});

      expect(div.textContent).toContain('Hello, World');
    });

    it('destroys component', async () => {
      const {default: compiledComponent} = require(viewCompiler.compiledComponentPath('hello-world'));
      const renderResult = await compiledComponent.render({name: 'Hello, World!'});
      await evalCompiledClient('hello-world');

      const resolvedComponent = (window as any)['test_components_hello-world'].default;
      const div = dom.window.document.createElement('div');

      div.innerHTML = renderResult.html; // Simulate the SSR content;

      await resolvedComponent.hydrate(div, {name: 'Hello, World!'});

      // @ts-ignore
      window.stubReactDestroyed = jest.fn();
      resolvedComponent.disconnect(div);

      // @ts-ignore
      expect(window.stubReactDestroyed).toBeCalled();
    });
  });
});
