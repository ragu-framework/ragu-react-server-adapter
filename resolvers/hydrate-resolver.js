const ReactDOM = require("react-dom");

module.exports = (component) => ({
  hydrate: function (el, props, state) {
    ReactDOM.hydrate(component.render(props, state), el);
  },
  disconnect: function (el) {
    ReactDOM.unmountComponentAtNode(el);
  }
});
