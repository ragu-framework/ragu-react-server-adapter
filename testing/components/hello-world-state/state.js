export default ({params}) => Promise.resolve({
  msg: `Hello, ${params.name}!`
});
