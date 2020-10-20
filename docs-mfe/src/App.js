import React from 'react';
import './App.css';
import {CodeHighlighter} from "./components/code-highlighter/code-highlighter";

function App() {
  const codeString = `false`
  return (
    <CodeHighlighter>{codeString}</CodeHighlighter>
  );
}

export default App;
