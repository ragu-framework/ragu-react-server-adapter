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
  <img src={logo} alt="React adapter logo"/>

  <StepList steps={[
    {
      title: 'Installing packages',
      content: <div>
        <p>
          You need to add two dependencies to your react project <strong>ragu-server</strong> package and <strong>ragu-react-server-adapter</strong> at your react app.
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
      content: <div></div>
    }
  ]} />
</div>