import SyntaxHighlighter from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";
import React from "react";
import './code-highlighter.css';

export const CodeHighlighter = ({children, language, filename}) => {
  return (<div>
    {filename && <div className="ragu-react-server-adapter__code-highlighter__filename">{filename}</div>}
    <SyntaxHighlighter language={language} style={atomDark} showLineNumbers={true}>
      {children}
    </SyntaxHighlighter>
  </div>);
}
