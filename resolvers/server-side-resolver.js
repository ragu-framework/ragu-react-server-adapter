var ReactDOMServer = require("react-dom/server");

module.exports = (component, stateResolver) => ({
  render: function (props) {
    props = {...props.params, ...props};
    return stateResolver(props).then((state) => ({
      html: ReactDOMServer.renderToString(component({...props, state}, state)),
      state: state
    }))
  }
})
