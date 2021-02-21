var ReactDOM = require("react-dom");

module.exports = (component) => ({
  hydrate: function (el, props, state) {
    ReactDOM.hydrate(component(props, state), el);
  },
  render: function (el, props, state) {
    ReactDOM.render(component(props, state), el);
  },
  disconnect: function (el) {
    ReactDOM.unmountComponentAtNode(el);
  }
});
