import ReactLogo from '../../public/react-logo.png';
import {MainContent, Wrapper} from "../../components/dark-wrapper";
import {Title, TitleWrapper} from "../../components/typography";
import {CommandList} from "../../components/command-list";
import {Code} from "../../components/code";

const exportComponentTask = `export default (props) => 
  <div>Hello, {props.name}!</div>`

const usingComponentTask = `import {RaguComponent} from "ragu-client-react";

<RaguComponent
 src="http://localhost:3100/?name=World" />`

export default (props) => <Wrapper env={props.env}>
  <MainContent>
    <TitleWrapper>
      <Title>Exposing  Micro-frontends</Title>
      <img width="92px" height="92px" src={ReactLogo} alt="React Logo"/>
    </TitleWrapper>

    <CommandList items={[
      {
        description: <p>Create a file that exports a default function that returns your React Component.</p>,
        task: <Code>{exportComponentTask}</Code>
      },
      {
        description: <p>Install <a href="https://github.com/ragu-framework/ragu-react-server-adapter" target="_blank">ragu-react-server-adapter</a></p>,
        task: <Code>npm install ragu-react-server-adapter</Code>
      },
      {
        description: <p>Start the development server providing the file previously created.</p>,
        task: <Code>npx ragu-cli static --file my-mfe.jsx</Code>
      },
      {
        description: <p>Preview your Micro-frontend</p>,
        task: <a href="http://localhost:3100/preview">http://localhost:3100/preview</a>
      }
    ]} />

    <TitleWrapper>
      <Title>Consuming a Micro-frontend</Title>
    </TitleWrapper>
    <CommandList items={[
      {
        description: <p>Install <a href="https://github.com/ragu-framework/ragu-client-react" target="_blank">ragu-client-react</a></p>,
        task: <Code>npm install ragu-client-react</Code>
      },
      {
        description: <p>Uses the React client to render your micro-frontend. The props parameter received by a Ragu Micro-frontend are provided through query parameters.</p>,
        task: <Code>{usingComponentTask}</Code>
      },
    ]} />
  </MainContent>
</Wrapper>
