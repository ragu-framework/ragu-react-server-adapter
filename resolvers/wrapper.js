var ReactDOM = require("react-dom");

module.exports = function (component, props) {
  if (props.isServer) {
    var ReactDOMServer = eval('require')("react-dom/server");
    return {
      html: ReactDOMServer.renderToString(component)
    };
  }

  return {
    connectedCallback: function (isHydrate) {
      if (isHydrate) {
        ReactDOM.hydrate(component, props.element);
      } else {
        ReactDOM.render(component, props.element);
      }
    },
    disconnectedCallback: function() {
      ReactDOM.unmountComponentAtNode(props.element);
    }
  };
}
