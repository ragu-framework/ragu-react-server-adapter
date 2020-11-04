const {createReactRaguServerConfig} = require('ragu-react-server-adapter/config');
const {Logger} = require('ragu-server');
const port = parseInt(process.env.PORT || '3100');

const config = createReactRaguServerConfig({
  compiler: {
    assetsPrefix: process.env.ASSETS_PREFIX || `http://localhost:${port}/component-assets/`
  },
  components: {
    namePrefix: 'react-docs-mfe_',
    defaultDependencies: [
      {
        nodeRequire: 'react',
        globalVariable: 'React',
        dependency: 'https://cdnjs.cloudflare.com/ajax/libs/react/17.0.0-rc.2/umd/react.production.min.js'
      },
      {
        nodeRequire: 'react-is',
        globalVariable: 'reactIs',
        dependency: 'https://cdnjs.cloudflare.com/ajax/libs/react-is/17.0.0-rc.2/umd/react-is.production.min.js'
      },
      {
        nodeRequire: 'react-dom',
        globalVariable: 'ReactDOM',
        dependency: 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.0-rc.2/umd/react-dom.production.min.js',
        order: 1
      }
    ]
  },
  server: {
    port,
    logging: {
      level: Logger.debug
    }
  }
});

module.exports = config;

