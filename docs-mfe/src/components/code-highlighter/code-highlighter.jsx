import React, {useEffect, useState} from "react";
import './code-highlighter.css';

export const CodeHighlighter = ({children, language, filename}) => {
  const [content, setContent] = useState(<pre style={{
    background: "rgb(40, 44, 52)",
    color: "white"
  }}>{children}</pre>);

  useEffect(() => {
    (async () => {
      const [{default: SyntaxHighlighter}, {default: atomDark}] = await Promise.all([
        import('react-syntax-highlighter'),
        import('react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark')
      ]);

      setContent(<SyntaxHighlighter language={language} style={atomDark} showLineNumbers={true}>
          {children}
        </SyntaxHighlighter>
      );
    })();
  }, []);

  return (<div className="ragu-react-server-adapter__code-highlighter">
    {filename && <div className="ragu-react-server-adapter__code-highlighter__filename">{filename}</div>}
    <div>
      {content}
    </div>
  </div>);
}
