var ReactDOM = require("react-dom");

module.exports = (component) => ({
  hydrate: function (element, params, state) {
    ReactDOM.hydrate(component({...params, params, state, element, isServer: false}, state), element);
  },
  render: function (element, params, state) {
    ReactDOM.render(component({...params, params, state, element, isServer: false}, state), element);
  },
  disconnect: function (el) {
    ReactDOM.unmountComponentAtNode(el);
  }
});
