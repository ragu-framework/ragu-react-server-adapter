const {createReactRaguServerConfig} = require('ragu-react-server-adapter/config');

const port = parseInt(process.env.PORT || '3100');

module.exports = createReactRaguServerConfig({
  projectRoot: __dirname,
  compiler: {
    assetsPrefix: process.env.ASSETS_PREFIX || `http://localhost:${port}/component-assets/`
  },
  components: {
    namePrefix: 'my_project_name_'
  },
  server: {
    port
  }
});
