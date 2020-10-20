const {createReactRaguServerConfig} = require('ragu-react-server-adapter/config');

const port = parseInt(process.env.PORT || '3100');

module.exports = createReactRaguServerConfig({
  projectRoot: __dirname,
  compiler: {
    assetsPrefix: process.env.ASSETS_PREFIX || `http://localhost:${port}/component-assets/`
  },
  components: {
    namePrefix: 'my_project_name_',
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
    port
  }
});
