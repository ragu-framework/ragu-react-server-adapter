import path from "path";
import getPort from "get-port";
import {RaguServerConfig} from "ragu-server";
import {TestLogger} from "./test-logger";
import {raguReactWebpackHydrateConfig, raguReactWebpackViewConfig} from "../webpack";

type TestConfig = RaguServerConfig & {
  server: {
    logging: {
      logger: TestLogger
    }
  }
};

export const createTestConfig = async (): Promise<TestConfig> => {
  const port = await getPort();
  const viewOutput = path.join(__dirname, 'compiled_components', 'view');
  const hydrateOutput = path.join(__dirname, 'compiled_components', 'hydrate');

  return ({
    server: {
      routes: {
        assets: '/component-assets/',
      },
      previewEnabled: true,
      hideWelcomeMessage: true,
      port,
      logging: {
        logger: new TestLogger(),
      }
    },
    components: {
      namePrefix: 'test_components_',
      sourceRoot: path.join(__dirname, 'components'),
    },
    compiler: {
      assetsPrefix: `file://${hydrateOutput}/`,
      webpack: {
        hydrate: raguReactWebpackHydrateConfig(`file://${hydrateOutput}/`),
        view: raguReactWebpackViewConfig(`file://${hydrateOutput}/`)
      },
      output: {
        view: viewOutput,
        hydrate: hydrateOutput
      },
    }
  });
}
