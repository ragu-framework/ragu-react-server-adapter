module.exports = (state) => (props) => {
  if (state) {
    return Promise.resolve(state.propsToState(props));
  }

  return Promise.resolve(null);
}
