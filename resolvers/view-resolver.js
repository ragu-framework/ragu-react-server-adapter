var ReactDOMServer = require("react-dom/server");

module.exports = (component, stateResolver) => ({
  render: function (props) {
    return stateResolver(props).then((state) => ({
      html: ReactDOMServer.renderToString(component.render(props, state)),
      state: state
    }))
  }
})
