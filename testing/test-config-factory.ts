import path from "path";
import getPort from "get-port";
import {RaguServerConfig} from "ragu-server";
import {TestLogger} from "./test-logger";
import {createReactRaguServerConfig} from "../config";

type TestConfig = RaguServerConfig & {
  server: {
    logging: {
      logger: TestLogger
    }
  }
};

export const createTestConfig = async (): Promise<TestConfig> => {
  const port = await getPort();

  const config = createReactRaguServerConfig({
    environment: 'development',
    components: {
      namePrefix: 'test_components_',
      sourceRoot: path.join(__dirname, 'components'),
    },
    server: {
      port,
      logging: {
        logger: new TestLogger(),
      }
    },
  });

  config.compiler.assetsPrefix = `file://${config.compiler.output.clientSide}/`;

  return config as TestConfig;
}
