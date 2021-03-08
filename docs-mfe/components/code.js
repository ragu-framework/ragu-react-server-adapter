import styled from "styled-components";

let CodeWrapper = styled.div`
  background: rgba(65, 184, 131, 0.29);
  border-radius: 23px;
  padding: 20px;
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  
  pre {
    font-family: "Source Code Pro", monospace;
    overflow: auto;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
  }
`;
export const Code = ({children}) =>
  <CodeWrapper>
    <pre>
      {children}
    </pre>
  </CodeWrapper>
