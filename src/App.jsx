import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";
import ReleaseBoard from "./sections/ReleaseBoard";
import Workspace from "./sections/Workspace";
import Developers from "./sections/Developers";
import Plans from "./sections/Plans";
import Questions from "./sections/Questions";
import { Mark, Reveal } from "./components/ForgeUI";

export const SOURCE = "https://github.com/NAIFDev1/forge-saas-landing";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [environment, setEnvironment] = useState("Production");
  const [stage, setStage] = useState(4);
  const [runs, setRuns] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const timer = useRef(null);
  const menuButton = useRef(null);
  const busy = stage < 4;
  useEffect(() => () => clearInterval(timer.current), []);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  function deploy() {
    if (busy) return;
    clearInterval(timer.current);
    setStage(0);
    setAnnouncement(
      `Starting a demo deployment to ${environment.toLowerCase()}.`,
    );
    let next = 0;
    timer.current = setInterval(() => {
      next += 1;
      setStage(next);
      if (next === 4) {
        clearInterval(timer.current);
        setRuns((value) => value + 1);
        setAnnouncement(
          `Demo deployment to ${environment.toLowerCase()} complete. All four stages passed.`,
        );
      }
    }, 750);
  }
  const deployment = { environment, setEnvironment, stage, busy, deploy, runs };
  const links = [
    ["Product", "#product"],
    ["Developers", "#developers"],
    ["Pricing", "#pricing"],
    ["Changelog", "#changelog"],
  ];
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Forge home">
          <Mark />
          <span>forge</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="source-link"
          href={SOURCE}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={17} />
          <span>Source code</span>
          <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-button"
          ref={menuButton}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
            <a href={SOURCE}>
              Source code
              <Github size={18} />
            </a>
          </nav>
        )}
      </header>
      <main id="main">
        <ReleaseBoard deployment={deployment} />
        <Workspace deployment={deployment} />
        <Developers />
        <Plans />
        <Questions />
        <section
          className="closing board-section"
          aria-labelledby="closing-title"
        >
          <Reveal>
            <h2 id="closing-title">Make your next move.</h2>
          </Reveal>
          <div>
            <p>One commit is a good place to start.</p>
            <a className="button button-light" href="#product">
              Run the demo <ArrowUpRight size={19} />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand" href="#top">
            <Mark />
            <span>forge</span>
          </a>
          <p>A little less between an idea and the internet.</p>
          <a className="text-link" href={SOURCE}>
            Explore the repository <ArrowUpRight size={17} />
          </a>
        </div>
        <p className="footer-word" aria-label="Forge">
          forge
        </p>
        <div className="footer-bottom">
          <p>
            A fictional platform. A real frontend project by{" "}
            <a href="https://github.com/NAIFDev1">Naif Alghamdi</a>.
          </p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <span className="sr-only" role="status" aria-live="polite">
        {announcement}
      </span>
    </>
  );
}
