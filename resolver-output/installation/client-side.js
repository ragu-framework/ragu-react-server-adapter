
      var component = require('/home/runner/work/ragu-react-server-adapter/ragu-react-server-adapter/docs-mfe/ragu-components/installation');
      var resolver = require('/home/runner/work/ragu-react-server-adapter/ragu-react-server-adapter/docs-mfe/node_modules/ragu-react-server-adapter/resolvers/client-side-resolver');

      module.exports.default = (resolver.default || resolver)(component.default || component);
    