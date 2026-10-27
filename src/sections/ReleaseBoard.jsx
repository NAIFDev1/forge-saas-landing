import {
  ArrowDown,
  ArrowUpRight,
  Check,
  GitBranch,
  GitCommitHorizontal,
  LoaderCircle,
  Play,
} from "lucide-react";
import { Mark, Reveal } from "../components/ForgeUI";
const stages = [
  ["Build", "Dependencies resolved. Assets compiled.", "4.2s"],
  ["Test", "248 passed. No failures.", "1.2s"],
  ["Preview", "A branch. Its own environment.", "0.8s"],
  ["Deploy", "Promoted to your chosen environment.", "1.4s"],
];
export default function ReleaseBoard({ deployment }) {
  const { environment, stage, busy, deploy, runs } = deployment;
  return (
    <section
      id="product"
      className="release-board"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy tile">
        <Reveal>
          <h1 id="hero-title">
            Your code.
            <br />
            In production.
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="hero-description">
            The developer platform that connects your repository, builds, and
            deployments in one continuous workflow.
          </p>
        </Reveal>
        <Reveal delay={0.16} className="hero-actions">
          <a className="button button-dark" href="#deployment" onClick={deploy}>
            Run the demo <ArrowUpRight size={20} />
          </a>
          <a className="text-link" href="#developers">
            Keep your terminal <ArrowDown size={17} />
          </a>
        </Reveal>
        <div className="hero-footnote">
          <span>Built for the way you build.</span>
        </div>
      </div>
      <Reveal className="deploy-tile tile" axis="x">
        <div className="deploy-console" data-ui id="deployment">
          <div className="console-title">
            <span>
              <Mark /> Forge deployment
            </span>
            <span className="demo-tag">Interactive demo</span>
          </div>
          <div className="project-heading">
            <h2>api-server</h2>
            <span className="environment-label">{environment}</span>
          </div>
          <div className="commit-summary">
            <GitBranch size={16} />
            <span>main</span>
            <GitCommitHorizontal size={17} />
            <code>4ff2a91</code>
          </div>
          <div className="pipeline-list" aria-label="Deployment stages">
            {stages.map(([name, description, duration], index) => (
              <div
                className={`pipeline-stage ${stage > index ? "is-done" : stage === index ? "is-running" : "is-waiting"}`}
                key={name}
              >
                <span className="stage-icon">
                  {stage > index ? (
                    <Check size={17} />
                  ) : stage === index ? (
                    <LoaderCircle size={17} className="spin" />
                  ) : (
                    <span className="waiting-mark" />
                  )}
                </span>
                <div>
                  <strong>{name}</strong>
                  <p>
                    {stage === index ? "Running in this browser…" : description}
                  </p>
                </div>
                <span className="duration">
                  {stage > index ? duration : "—"}
                </span>
              </div>
            ))}
          </div>
          <div className="deploy-outcome" aria-live="polite">
            <span className={`status-dot ${busy ? "is-busy" : ""}`} />
            <span>
              {busy
                ? `Running ${stages[stage]?.[0].toLowerCase()}…`
                : runs
                  ? `Deployment ${1842 + runs} is ready`
                  : "Ready when you are"}
            </span>
            <span>{busy ? "In progress" : "Browser-local"}</span>
          </div>
          <button
            className="button button-teal deploy-button"
            disabled={busy}
            onClick={deploy}
          >
            {busy ? (
              <LoaderCircle className="spin" size={18} />
            ) : (
              <Play size={17} />
            )}
            <span>
              {busy
                ? "Deploying…"
                : runs
                  ? "Deploy again"
                  : "Deploy this commit"}
            </span>
            <span className="button-end">
              {busy ? (
                `${Math.min(stage + 1, 4)}/4`
              ) : (
                <ArrowUpRight size={18} />
              )}
            </span>
          </button>
        </div>
      </Reveal>
      <Reveal className="board-note tile">
        <p>
          From a local idea
          <br />
          to a live URL.
        </p>
        <a href="#workflow" aria-label="Explore the deployment workflow">
          <ArrowDown size={28} />
        </a>
      </Reveal>
      <Reveal className="commit-tile tile" delay={0.08}>
        <div data-ui className="commit-fragment">
          <div className="fragment-label">
            <GitCommitHorizontal size={19} />
            <span>One source of truth</span>
          </div>
          <p className="commit-message">feat: ready for the world</p>
          <div className="commit-details">
            <code>4ff2a91</code>
            <span>main</span>
            <span>api-server</span>
          </div>
        </div>
      </Reveal>
      <Reveal className="stack-tile tile" delay={0.16}>
        <p>Your stack belongs here.</p>
        <div className="stack-names">
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>Docker</span>
          <span>PostgreSQL</span>
        </div>
      </Reveal>
      <p className="demo-disclosure">
        Forge is a fictional developer platform. All deployments, metrics, and
        commands on this page are illustrative.
      </p>
    </section>
  );
}
