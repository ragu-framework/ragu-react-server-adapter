import React from "react";
import logo from '../../../../repository-assets/logo.png';
import {StepList} from "../../components/steps/step-list";
import './installation.css';
import {CodeHighlighter} from "../../components/code-highlighter/code-highlighter";

let basicConfigFile = `const {createReactRaguServerConfig} = require('ragu-react-server-adapter/config');

module.exports = createReactRaguServerConfig({
  compiler: {
    assetsPrefix: 'http://localhost:3100/component-assets/'
  },
  components: {
    namePrefix: 'my_project_name_'
  }
});`;

export const Installation = () => <div className="ragu-react-server-adapter__installation">

  <div className="ragu-react-server-adapter__installation__logo-wrapper">
    <img src={logo} alt="React adapter logo" className="ragu-react-server-adapter__installation__logo"/>
  </div>

  <StepList steps={[
    {
      title: 'Welcome to ragu-react-server-adapter documentation!',
      content: <div>
        <p>
          <strong>ragu-react-server-adapter</strong> delivers an abstraction on top of <strong>ragu-server</strong> to
          enable a straightforward way to deliver your React components as micro-frontends.
        </p>

        <h2>About this documentation</h2>

        <p>This documentation is actually a micro-frontend wrote in react using this adapter. Isn't is insane?</p>

        <ul>
          <li><strong>Micro-frontend</strong> <a href="http://ragu-react-server-adapter.herokuapp.com/components/installation" target="_blank">http://ragu-react-server-adapter.herokuapp.com/components/installation</a>.</li>
          <li><strong>Preview</strong> <a href="http://ragu-react-server-adapter.herokuapp.com/preview/installation" target="_blank">http://ragu-react-server-adapter.herokuapp.com/preview/installation</a></li>
          <li><strong>Repository</strong> <a href="https://github.com/ragu-framework/ragu-react-server-adapter/tree/main/docs-mfe" target="_blank">https://github.com/ragu-framework/ragu-react-server-adapter/tree/main/docs-mfe</a></li>
        </ul>

        Go through the next steps and check it out how easy it is to expose your components as micro-frontends.
      </div>
    },
    {
      title: 'Installing packages',
      content: <div>
        <p>
          You need to add <strong>ragu-server</strong> and <strong>ragu-react-server-adapter</strong> as dependency of you react app.
        </p>

        <p>
          <strong>ragu-server</strong> will expose your front-end as reusable widgets and the <strong>ragu-react-server-adapter</strong> has a set of helpers to make the integration between ragu-server
          and react more straightforward.
        </p>

        <CodeHighlighter language="bash">
          npm install ragu-server ragu-react-server-adapter
        </CodeHighlighter>

        <p>You also need to add ragu-server scripts at your <strong>package.json</strong> scripts section.</p>

        <CodeHighlighter language="json" filename="package.json">
          {`{
  "scripts": {
    "ragu:build": "ragu-server build ragu-config.js",
    "ragu:start": "ragu-server run ragu-config.js",
    "ragu:dev": "ragu-server dev ragu-config.js"
  }
}`}
        </CodeHighlighter>
      </div>
    },
    {
      title: 'Creating the configuration file',
      content: <div>
        <p>Create a <strong>ragu-config.js</strong> file with as bellow:</p>

        <CodeHighlighter language='javascript' filename="ragu-config.js">
          {basicConfigFile}
        </CodeHighlighter>
        
        <ul>
          <li>
            <strong>compiler.assetsPrefix</strong>: Micro-frontends could be loaded at any domain.
            To make sure assets coulbe be reached by browser you must define which domain it will fetch assets.
          </li>

          <li><strong>compiler.namePrefix</strong>: Used to prevent micro-frontends name collision.</li>
        </ul>

        <p>
          There are a set of optional properties which you can override.
          All configurations described <a target="_blank" href="https://ragu-framework.github.io/ragu/interfaces/_src_config_.raguserverbaseconfig.html">here</a>
        </p>
      </div>
    },
    {
      title: "Exposing a component",
      content: <div>
        <p>
          Ragu uses a filesystem structure to expose micro-frontends.
          It means that any file into the <strong>ragu-components</strong> directory will be exposed as micro-frontend.
        </p>

        <h2>Rendering a simple component</h2>

        <CodeHighlighter language='javascript' filename="ragu-components/hello-world/index.jsx">
          {`export default () => <MyComponent />`}
        </CodeHighlighter>

        <p>Following the filesystem based-route the component will be available at</p>

        <ul>
          <li>
            <strong>Component route</strong>: http://you-ragu-server-host/components/ragu-components/hello-world/
          </li>
          <li>
            <strong>Preview route</strong>: http://you-ragu-server-host/components/ragu-components/hello-world/
          </li>
        </ul>

        <h2>Passing props to your micro-frontends</h2>

        <p>
          Props are passed to micro-frontends as request query parameters. The first argument of the exported function
          are the props received by server.
        </p>

        <CodeHighlighter language='javascript' filename="ragu-components/hello-world/index.jsx">
          {`export default (props) => <MyComponent name={props.name} />`}
        </CodeHighlighter>

        <ul>
          <li>
            <strong>Component route</strong>: http://you-ragu-server-host/components/ragu-components/hello-world/?name=World
          </li>
          <li>
            <strong>Preview route</strong>: http://you-ragu-server-host/components/ragu-components/hello-world/?name=World
          </li>
        </ul>

        <h2>Fetching async data</h2>

        <p>There is a problem that is hard to solve when the subject is Server Side Rendering: To know when a component finished it renders process.</p>

        <p>To make sure your component is fully render at the server we recommend to does not have async operations on component mount. Instead you can define a state function which will load any information your component requires it also prevent your component to load twice the same information as Ragu server exposes the state to the client.</p>

        <p>Create a file called <strong>state.js</strong> at your component directory with the follow structure:</p>

        <CodeHighlighter language='javascript' filename="ragu-components/hello-world/state.js">
          {`export default (props) => Promise.resolve({greeting: \`Hello, \${props.name}\`)`}
        </CodeHighlighter>

        <p>And the state will be available to your component as the first parameter.</p>

        <CodeHighlighter language='javascript' filename="ragu-components/hello-world/index.jsx">
          {`export default (props) => <MyComponent greeting={props.greeting} />`}
        </CodeHighlighter>

        <p>And that's all!</p>
      </div>
    }
  ]} />
</div>
