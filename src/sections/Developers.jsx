import { useState } from "react";
import { Terminal } from "lucide-react";
import { CodePanel, CopyButton, Reveal, Tabs } from "../components/ForgeUI";

const commands = [
  ["forge login", "Authenticated as developer@forge.example"],
  [
    "forge init",
    "Project initialized\nforge.config.json created\nRepository connected",
  ],
  [
    "forge dev",
    "Local server running at http://localhost:3000\nWatching for changes…",
  ],
  ["forge test", "248 passed · 0 failed\nDuration: 1.24s"],
  [
    "forge deploy",
    "Building application\nRunning tests\nPreparing preview\nPromoting to production\n\nDeployment ready: api.forge.example",
  ],
  [
    "forge logs",
    "09:41:02  INFO  Listening on :8080\n09:41:03  INFO  Database connected\n09:41:07  GET   /health  200  2ms",
  ],
];
const integrations = [
  [
    "JavaScript",
    "deploy.js",
    "import { createClient } from '@forge/sdk'\n\nconst forge = createClient({\n  token: process.env.FORGE_TOKEN,\n})\n\nconst deployment = await forge.deployments.create({\n  project: 'api-server',\n  branch: 'main',\n  environment: 'production',\n})\n\nconsole.log(deployment.status)",
  ],
  [
    "TypeScript",
    "deploy.ts",
    "import { createClient } from '@forge/sdk'\n\nconst forge = createClient({\n  token: process.env.FORGE_TOKEN,\n})\n\nconst deployment = await forge.deployments.create({\n  project: 'api-server',\n  branch: 'main',\n  environment: 'production',\n})\n\nconst status: string = deployment.status\nconsole.log(status)",
  ],
  [
    "Python",
    "deploy.py",
    "import os\nimport requests\n\nresponse = requests.post(\n    'https://api.forge.example/v1/deployments',\n    headers={'Authorization':\n             f'Bearer {os.environ[\"FORGE_TOKEN\"]}'},\n    json={\n        'project': 'api-server',\n        'branch': 'main',\n        'environment': 'production',\n    },\n    timeout=30,\n)\nresponse.raise_for_status()\nprint(response.json()['status'])",
  ],
];
const api = [
  [
    "Request",
    "HTTP request",
    'POST /v1/deployments HTTP/1.1\nHost: api.forge.example\nAuthorization: Bearer YOUR_TOKEN\nContent-Type: application/json\n\n{\n  "project": "api-server",\n  "branch": "main",\n  "environment": "production"\n}',
  ],
  [
    "Response",
    "JSON response",
    'HTTP/1.1 201 Created\n\n{\n  "id": "prod-1842",\n  "status": "ready",\n  "project": "api-server",\n  "commit": "4ff2a91",\n  "environment": "production",\n  "url": "https://api.forge.example"\n}',
  ],
  [
    "JavaScript",
    "Fetch request",
    "const response = await fetch(\n  'https://api.forge.example/v1/deployments',\n  {\n    method: 'POST',\n    headers: {\n      Authorization: 'Bearer YOUR_TOKEN',\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      project: 'api-server', branch: 'main',\n    }),\n  },\n)\nconst deployment = await response.json()",
  ],
  [
    "cURL",
    "cURL request",
    'curl https://api.forge.example/v1/deployments \\\n  --request POST \\\n  --header "Authorization: Bearer YOUR_TOKEN" \\\n  --header "Content-Type: application/json" \\\n  --data \'{\n    "project": "api-server",\n    "branch": "main",\n    "environment": "production"\n  }\'',
  ],
];
export default function Developers() {
  const [command, setCommand] = useState(4);
  const [language, setLanguage] = useState(0);
  const [apiTab, setApiTab] = useState(0);
  return (
    <section
      id="developers"
      className="developers-section board-section"
      aria-labelledby="developers-title"
    >
      <Reveal className="section-intro">
        <h2 id="developers-title">Keep your terminal.</h2>
        <p>
          Your editor. Your stack. Your scripts.
          <br />
          Forge fits around the tools you already use.
        </p>
      </Reveal>
      <div className="developer-board">
        <Reveal className="cli-description">
          <Terminal size={32} />
          <h3>
            A familiar prompt.
            <br />A shorter path.
          </h3>
          <p>
            Initialize a project, run your tests, and ship a release without
            changing context.
          </p>
          <p className="small-note">
            Choose a command to explore its sample output. This demonstration
            does not execute shell commands.
          </p>
        </Reveal>
        <Reveal className="cli-demo" axis="x">
          <div data-ui>
            <div className="code-toolbar">
              <span>Forge CLI playground</span>
              <CopyButton
                text={`${commands[command][0]}\n${commands[command][1]}`}
              />
            </div>
            <div
              className="command-picker"
              role="group"
              aria-label="CLI commands"
            >
              {commands.map(([cmd], index) => (
                <button
                  key={cmd}
                  onClick={() => setCommand(index)}
                  aria-pressed={command === index}
                >
                  {cmd.split(" ")[1]}
                </button>
              ))}
            </div>
            <div className="terminal-output" key={command}>
              <pre>
                <code>
                  <span className="code-command">$ {commands[command][0]}</span>
                  {"\n\n"}
                  {commands[command][1]}
                </code>
              </pre>
              <span className="terminal-cursor" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
        <Reveal className="integration-block" id="integrations">
          <h3>Make it your workflow.</h3>
          <p>
            Use a typed client or make an HTTP request. Keep automation close to
            the rest of your code.
          </p>
          <div data-ui>
            <Tabs
              tabs={integrations.map((item) => item[0])}
              active={language}
              onChange={setLanguage}
              label="Integration language"
              id="integration"
            />
            <div
              role="tabpanel"
              id={`integration-panel-${language}`}
              aria-labelledby={`integration-tab-${language}`}
              tabIndex={0}
            >
              <CodePanel
                name={integrations[language][1]}
                code={integrations[language][2]}
              />
            </div>
          </div>
          <p className="small-note">
            Illustrative SDK and endpoint examples. No published Forge package
            is required.
          </p>
        </Reveal>
        <Reveal className="api-block" id="api" delay={0.08}>
          <h3>One API. Your rules.</h3>
          <p>
            Projects, environments, deployments. The same building blocks, ready
            for your own integrations.
          </p>
          <div data-ui>
            <Tabs
              tabs={api.map((item) => item[0])}
              active={apiTab}
              onChange={setApiTab}
              label="API example"
              id="api"
            />
            <div
              role="tabpanel"
              id={`api-panel-${apiTab}`}
              aria-labelledby={`api-tab-${apiTab}`}
              tabIndex={0}
            >
              <CodePanel name={api[apiTab][1]} code={api[apiTab][2]} />
            </div>
          </div>
        </Reveal>
      </div>
      <div className="changelog-block" id="changelog">
        <Reveal>
          <h3>Built to keep moving.</h3>
          <p>Explore the platform’s sample release notes.</p>
        </Reveal>
        <div className="changelog-list">
          {[
            [
              "2.0",
              "Deployment engine",
              "Incremental builds, smarter cache layers, and release rollback.",
            ],
            [
              "1.8",
              "More from your CLI",
              "Log inspection, interactive initialization, and rollback commands.",
            ],
            [
              "1.6",
              "A clearer dashboard",
              "Build history, environment context, and deployment diagnostics.",
            ],
          ].map(([version, title, body], i) => (
            <Reveal key={version} delay={i * 0.06}>
              <span className="release-version">{version}</span>
              <div>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
