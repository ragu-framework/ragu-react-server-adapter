import ReactLogo from '../../public/react-logo.png';
import {MainContent, Wrapper} from "../../components/dark-wrapper";
import {Title, TitleWrapper, InfoText, Subtitle} from "../../components/typography";
import {CommandList} from "../../components/command-list";
import {Code} from "../../components/code";

const exportComponentTask = `export default ({params}) => 
  <div>Hello, {params.name}!</div>`

const staticDeployTask = `npx ragu-cli static --file my-mfe.jsx
  --host https://cdn.com/path/`;

const raguServerBuildTask = `npx ragu-cli build --file my-mfe.jsx
  --host https://cdn.com/path/`;

const raguServerRunTask = `npx ragu-cli serve --file my-mfe.jsx
  --host https://cdn.com/path/`;

const usingComponentStaticTask = `import {RaguComponent} from "ragu-client-react";

<RaguComponent
 src="https://cdn.com/path/my-mfe.json?name=World" />`

const usingComponentServeTask = `import {RaguComponent} from "ragu-client-react";

<RaguComponent
 src="https://cdn.com/path/my-mfe?name=World" />`

const usingComponentTask = `import {RaguComponent} from "ragu-client-react";

<RaguComponent
 src="http://localhost:3100/?name=World" />`

export default ({params}) => {
  return <Wrapper env={params.env}>
    <MainContent>
      <TitleWrapper>
        <Title>Exposing Micro-frontends</Title>
        <img width="92px" height="92px" src={ReactLogo} alt="React Logo"/>
      </TitleWrapper>

      <CommandList items={[
        {
          description: <p>Install <a href="https://github.com/ragu-framework/ragu-cli"
                                     target="_blank">ragu-cli</a> and <a
            href="https://github.com/ragu-framework/ragu-react-server-adapter"
            target="_blank">ragu-react-server-adapter</a></p>,
          task: <Code>npm install ragu-cli ragu-react-server-adapter</Code>
        },
        {
          description: <p>Create a file that exports a default function that returns your React Component.</p>,
          task: <Code>{exportComponentTask}</Code>
        },
        {
          description: <p>Start the development server providing the file previously created.</p>,
          task: <Code>npx ragu-cli dev --file my-mfe.jsx</Code>
        },
        {
          description: <p>Preview your Micro-frontend</p>,
          task: <a href="http://localhost:3100/preview">http://localhost:3100/preview</a>
        }
      ]}/>

      <TitleWrapper>
        <Title>Consuming a Micro-frontend</Title>
      </TitleWrapper>
      <CommandList items={[
        {
          description: <p>Install <a href="https://github.com/ragu-framework/ragu-client-react"
                                     target="_blank">ragu-client-react</a></p>,
          task: <Code>npm install ragu-client-react</Code>
        },
        {
          description: <p>Uses the React client to render your micro-frontend. The props parameter received by a Ragu
            Micro-frontend are provided through query parameters.</p>,
          task: <Code>{usingComponentTask}</Code>
        },
      ]}/>

      <TitleWrapper>
        <Title>Deploying 🚀</Title>
      </TitleWrapper>

      <InfoText>
        There are two ways of publishing your micro-frontend:
      </InfoText>
      <InfoText>
        You can deploy it as a simple <strong>static project</strong> to your favorite CDN or use <strong>ragu
        server</strong> to publish your micro-frontends.
      </InfoText>

      <Subtitle>Static Deploy</Subtitle>
      <CommandList items={[
        {
          description: <div>
            <h4>Building:</h4>
            <p>To deploy a Micro-frontend you must define the <mark>--baseurl</mark>. That's because ragu needs to know
              where to fetch all the project assets.
            </p>
          </div>,
          task: <Code>{staticDeployTask}</Code>
        },
        {
          description: <div>
            <h4>Deploying:</h4>
            <p>
              A directory called <mark>.ragu-components/</mark> will be created. you must deploy the application in a
              way where the defined <mark>baseurl</mark> resolves the <mark>.ragu-components/</mark> content.
            </p>

          </div>,
          task: <div></div>
        },
        {
          description: <div>
            <h4>Consuming:</h4>
            <p>
              A json with the same name of your <mark>--file</mark> will be created at <mark>.ragu-components/</mark>.
            </p>
            <p>You must use this json to fetch your micro-frontend using the ragu-client.</p>
            <p>⚠️ Don't forget the <mark>.json</mark> extension. That's how Ragu knows it is a static micro-frontend.</p>
          </div>,
          task: <Code>{usingComponentStaticTask}</Code>
        },
      ]}/>

      <Subtitle>Ragu Server Deploy</Subtitle>
      <CommandList items={[
        {
          description: <div>
            <h4>Building:</h4>
            <p>To deploy a Micro-frontend you must define the <mark>--baseurl</mark>. That's because ragu needs to know
              where to fetch all the project assets.</p>
            <p>You can also provide an <mark>--port</mark> option to define the port ragu-server must run.</p>
          </div>,
          task: <Code>{raguServerBuildTask}</Code>
        },
        {
          description: <div>
            <h4>Serving:</h4>
            <p>
              It is strictly necessary to give the same arguments provided to <mark>build</mark> command.
            </p>
            <p>
              This ragu-server instance must be listen to requests from the defined <mark>--baseurl</mark>
            </p>
          </div>,
          task: <Code>{raguServerRunTask}</Code>
        },
        {
          description: <div>
            <h4>Consuming:</h4>
            <p>The <mark>serve</mark> command output will provide the URL that you must use to fetch your micro-frontend.</p>
          </div>,
          task: <Code>{usingComponentServeTask}</Code>
        },
      ]}/>

    </MainContent>
  </Wrapper>;
}
