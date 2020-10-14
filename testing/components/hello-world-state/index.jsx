import React from "react";
import App from "../../react-test-app/src/App";

export default {
  render(_, state) {
    return <App linkText={state.msg} />
  }
}
