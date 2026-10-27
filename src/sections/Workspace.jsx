import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Check,
  ChevronDown,
  GitBranch,
  GitCommitHorizontal,
  RotateCcw,
} from "lucide-react";
import { Mark, Reveal, Tabs } from "../components/ForgeUI";

const views = ["Deployments", "Logs", "Usage"];
const history = [
  {
    id: "prod-1841",
    commit: "fix: session refresh",
    hash: "bf2c184",
    branch: "fix/auth",
    status: "Ready",
    ago: "31 minutes ago",
  },
  {
    id: "prod-1840",
    commit: "feat: deployment hooks",
    hash: "9ad83b0",
    branch: "feature/api",
    status: "Failed",
    ago: "1 hour ago",
  },
];
const environmentInfo = {
  Production: {
    domain: "api.forge.example",
    branch: "main",
    target: "Public release",
    replica: "2 instances",
  },
  Staging: {
    domain: "staging.forge.example",
    branch: "develop",
    target: "Internal testing",
    replica: "1 instance",
  },
  Preview: {
    domain: "pr-42.forge.example",
    branch: "feature/api",
    target: "Pull request #42",
    replica: "1 instance",
  },
};
const workflow = [
  [
    "Build",
    "Your code, compiled.",
    "Resolve dependencies and reuse the build cache. Start from the same commit every time.",
    "build-fragment",
  ],
  [
    "Test",
    "A check before the jump.",
    "Run your test suite before anything reaches a preview or production environment.",
    "test-fragment",
  ],
  [
    "Preview",
    "Give every branch a home.",
    "Review a working version of your changes before you merge. Feedback stays with the release.",
    "preview-fragment",
  ],
];

export default function Workspace({ deployment }) {
  const { environment, busy, stage, runs, deploy } = deployment;
  const [tab, setTab] = useState(0);
  const [selectedId, setSelectedId] = useState("prod-1842");
  const [activeId, setActiveId] = useState("prod-1842");
  const [restoreMessage, setRestoreMessage] = useState("");
  const info = environmentInfo[environment];
  const latestId = `prod-${1842 + runs}`;
  const releases = useMemo(
    () => [
      {
        id: latestId,
        commit: "feat: ready for the world",
        hash: "4ff2a91",
        branch: info.branch,
        status: busy ? "Deploying" : "Ready",
        ago: runs ? "Just now" : "2 minutes ago",
      },
      ...history,
    ],
    [latestId, info.branch, busy, runs],
  );
  const selected =
    releases.find((release) => release.id === selectedId) || releases[0];
  const active =
    releases.find((release) => release.id === activeId) || releases[0];

  useEffect(() => {
    setActiveId(latestId);
    setSelectedId(latestId);
    setRestoreMessage("");
  }, [latestId, environment]);

  function inspect(release) {
    setSelectedId(release.id);
    setRestoreMessage("");
  }
  function restore() {
    if (busy || selected.status !== "Ready" || selected.id === active.id)
      return;
    setActiveId(selected.id);
    setRestoreMessage(`Restored ${selected.id} in this demo.`);
  }
  const logs =
    selected.status === "Failed"
      ? `${selected.id}  commit ${selected.hash}\n\n09:30:01  INFO   Build started for ${selected.branch}\n09:30:02  ERROR  Dependency lockfile is out of date\n09:30:02  ERROR  Build stopped before tests\n\nUpdate the lockfile and run a new deployment.\nNo preview or production release was created.`
      : busy && selected.id === latestId
        ? `${selected.id}  commit ${selected.hash}\n\n${[
            "09:41:02  INFO  Resolving dependencies",
            "09:41:03  INFO  Build complete; running tests",
            "09:41:04  INFO  248 tests passed; preparing preview",
            "09:41:05  INFO  Preview ready; promoting deployment",
          ]
            .slice(0, stage + 1)
            .join("\n")}\n\nPipeline running. Stage ${stage + 1} of 4.`
        : `${selected.id}  commit ${selected.hash}\n\n09:41:02  INFO  Build started for ${selected.branch}\n09:41:03  INFO  Dependencies resolved from cache\n09:41:04  INFO  248 tests passed, 0 failed\n09:41:05  INFO  Preview environment created\n09:41:06  INFO  Health check returned 200\n09:41:07  INFO  Deployment ready\n\n${selected.id === active.id ? `Active at ${info.domain}` : "Historical release. Available to restore."}`;

  return (
    <>
      <section
        className="workflow-section board-section"
        id="workflow"
        aria-labelledby="workflow-title"
      >
        <Reveal className="section-intro">
          <h2 id="workflow-title">
            One commit.
            <br />
            Every stage.
          </h2>
          <p>
            Push a change. Follow the build. Review the preview.
            <br className="desktop-break" /> Keep the context all the way to
            production.
          </p>
        </Reveal>
        <div className="workflow-board">
          {workflow.map(([name, title, description, cls], index) => (
            <Reveal
              key={name}
              className={`workflow-item workflow-item-${index}`}
              delay={index * 0.08}
            >
              <div className={`workflow-visual ${cls}`} data-ui>
                {index === 0 ? (
                  <>
                    <div className="mini-toolbar">
                      <span>Build output</span>
                      <span>Cached</span>
                    </div>
                    <pre>
                      <code>
                        {
                          "$ forge build\n\n  vite build\n  248 modules transformed\n\n  dist/index.html     1.3 kB\n  dist/assets/app.js  84.6 kB\n\n  Build complete in 4.2s"
                        }
                      </code>
                    </pre>
                  </>
                ) : index === 1 ? (
                  <>
                    <div className="mini-toolbar">
                      <span>Test suite</span>
                      <Check size={17} />
                    </div>
                    <div className="test-result">
                      <span>248</span>
                      <p>tests passed</p>
                    </div>
                    <div className="test-suites">
                      <span>
                        <Check size={14} /> Authentication
                      </span>
                      <span>
                        <Check size={14} /> Deployment API
                      </span>
                      <span>
                        <Check size={14} /> Environments
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mini-toolbar">
                      <GitBranch size={17} />
                      <span>feature/api</span>
                    </div>
                    <div className="preview-sheet">
                      <Mark />
                      <p>api-server</p>
                      <span>Pull request #42</span>
                      <div>
                        <Check size={16} /> Preview ready
                      </div>
                    </div>
                  </>
                )}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section
        className="workspace-section board-section"
        id="dashboard"
        aria-labelledby="workspace-title"
      >
        <Reveal className="section-intro">
          <h2 id="workspace-title">
            The whole release.
            <br />
            In one place.
          </h2>
          <p>
            The commit, the environment, the logs. Everything you need to
            understand what just shipped.
          </p>
        </Reveal>
        <Reveal className="workspace-shell" axis="x">
          <div className="workspace" data-ui>
            <aside className="workspace-sidebar">
              <span className="workspace-brand">
                <Mark /> forge
              </span>
              <span className="workspace-scope">Your workspace</span>
              <span className="workspace-project">
                <span>F</span> api-server <ChevronDown size={15} />
              </span>
              <nav aria-label="Demo workspace">
                {views.map((view, index) => (
                  <button
                    key={view}
                    aria-pressed={tab === index}
                    className={tab === index ? "active" : ""}
                    onClick={() => setTab(index)}
                  >
                    {index === 0 ? (
                      <GitBranch size={17} />
                    ) : index === 1 ? (
                      <Activity size={17} />
                    ) : (
                      <GitCommitHorizontal size={17} />
                    )}
                    {view}
                  </button>
                ))}
              </nav>
              <span className="workspace-sidebar-note">
                Local demonstration
                <br />
                No account needed.
              </span>
            </aside>
            <div className="workspace-main">
              <div className="workspace-top">
                <span>
                  api-server <span>/ {views[tab]}</span>
                </span>
                <span className="demo-tag">Demo workspace</span>
              </div>
              <div className="workspace-sheet">
                <div className="workspace-heading">
                  <h3>{views[tab]}</h3>
                  <label className="environment-select">
                    <span className="sr-only">Environment</span>
                    <span className="status-dot" />
                    <select
                      value={environment}
                      disabled={busy}
                      onChange={(event) =>
                        deployment.setEnvironment(event.target.value)
                      }
                    >
                      <option>Production</option>
                      <option>Staging</option>
                      <option>Preview</option>
                    </select>
                    <ChevronDown size={15} />
                  </label>
                </div>
                <Tabs
                  tabs={views}
                  active={tab}
                  onChange={setTab}
                  label="Workspace view"
                  id="workspace"
                />
                <div
                  role="tabpanel"
                  id={`workspace-panel-${tab}`}
                  aria-labelledby={`workspace-tab-${tab}`}
                  tabIndex={0}
                >
                  {tab === 0 && (
                    <>
                      <div className="release-summary">
                        <div>
                          <span>Current release</span>
                          <p>
                            <span
                              className={`status-dot ${busy ? "is-busy" : ""}`}
                            />
                            {busy ? "Deploying" : active.status}
                          </p>
                        </div>
                        <div>
                          <span>Environment</span>
                          <p>{environment}</p>
                        </div>
                        <div>
                          <span>Deploy ID</span>
                          <p>
                            <code>{active.id}</code>
                          </p>
                        </div>
                      </div>
                      <div className="release-history">
                        {releases.map((release) => (
                          <button
                            className={`release-row ${selected.id === release.id ? "selected" : ""}`}
                            key={release.id}
                            aria-pressed={selected.id === release.id}
                            onClick={() => inspect(release)}
                          >
                            <GitCommitHorizontal size={20} />
                            <span className="release-row-message">
                              <strong>{release.commit}</strong>
                              <span>
                                <code>{release.hash}</code>
                                <span>{release.branch}</span>
                                {active.id === release.id && (
                                  <span>Current</span>
                                )}
                              </span>
                            </span>
                            <span
                              className={`release-state ${release.status === "Failed" ? "failed" : ""}`}
                            >
                              {release.status === "Ready" && (
                                <Check size={14} />
                              )}
                              {release.status}
                            </span>
                            <span className="release-age">{release.ago}</span>
                          </button>
                        ))}
                      </div>
                      <div className="release-detail">
                        <span>
                          <code>{selected.id}</code> ·{" "}
                          {selected.status === "Failed"
                            ? "Build failed at dependency resolution."
                            : `${info.target}. ${info.replica}.`}
                        </span>
                        <button
                          className="text-link"
                          disabled={
                            busy ||
                            selected.status !== "Ready" ||
                            selected.id === active.id
                          }
                          onClick={restore}
                        >
                          <RotateCcw size={14} />
                          {selected.id === active.id
                            ? "Current release"
                            : "Restore release"}
                        </button>
                      </div>
                      <p className="restore-confirmation" role="status">
                        {restoreMessage}
                      </p>
                    </>
                  )}
                  {tab === 1 && (
                    <div className="workspace-logs">
                      <p>
                        Deployment output{" "}
                        <span>{environment.toLowerCase()}</span>
                      </p>
                      <pre>
                        <code>{logs}</code>
                      </pre>
                    </div>
                  )}
                  {tab === 2 && (
                    <div className="usage-view">
                      <div className="usage-heading">
                        <div>
                          <span>Build time</span>
                          <strong>
                            7.6 <small>seconds</small>
                          </strong>
                        </div>
                        <p>
                          Four stages.
                          <br />
                          One complete release.
                        </p>
                      </div>
                      <div
                        className="usage-bars"
                        aria-label="Build 4.2 seconds, tests 1.2 seconds, preview 0.8 seconds, deploy 1.4 seconds"
                      >
                        {[
                          ["Build", 4.2],
                          ["Tests", 1.2],
                          ["Preview", 0.8],
                          ["Deploy", 1.4],
                        ].map(([name, value]) => (
                          <div key={name}>
                            <span>{name}</span>
                            <div>
                              <span
                                style={{ width: `${(value / 4.2) * 100}%` }}
                              />
                            </div>
                            <strong>{value}s</strong>
                          </div>
                        ))}
                      </div>
                      <p className="usage-note">
                        Illustrative timings for a successful demo release, not
                        a service benchmark.
                      </p>
                    </div>
                  )}
                </div>
                <div className="workspace-bottom">
                  <span>
                    <span className="status-dot" /> {info.domain}
                  </span>
                  <button disabled={busy} onClick={deploy}>
                    {busy ? "Deploying…" : "New deployment"}{" "}
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="workspace-notes">
          <Reveal>
            <h3>Room for every environment.</h3>
            <p>
              Keep development, staging, and production separate. Switch the
              demo above to see each release in context.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3>A release you can trace.</h3>
            <p>
              Move from a deployment to its commit and output. Select a release,
              read its logs, or try restoring a successful build.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
