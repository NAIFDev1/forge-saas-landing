import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Copy } from "lucide-react";

export function Mark({ className = "" }) {
  return (
    <svg
      className={`forge-mark ${className}`}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 4h20v5H9v5h12v5H9v5H4V4Z" fill="currentColor" />
      <path d="M17 23h7v-7l-7 7Z" fill="currentColor" />
    </svg>
  );
}
export function Reveal({ children, className = "", delay = 0, axis = "y" }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { [axis]: 22 }}
      whileInView={{ [axis]: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function CopyButton({ text, label = "Copy code" }) {
  const [message, setMessage] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(text);
      setMessage("Copied");
    } catch {
      setMessage("Select and copy the code below");
    }
    timer.current = setTimeout(() => setMessage(""), 3000);
  }
  return (
    <span className="copy-control">
      <button
        className="copy-button"
        onClick={copy}
        aria-label={message || label}
        title={message || label}
      >
        {message === "Copied" ? <Check size={17} /> : <Copy size={17} />}
        <span>{message === "Copied" ? "Copied" : "Copy"}</span>
      </button>
      <span className="copy-status" role="status">
        {message && message !== "Copied" ? message : ""}
      </span>
    </span>
  );
}
export function CodePanel({ code, name, className = "" }) {
  return (
    <div className={`code-panel ${className}`} data-ui>
      <div className="code-toolbar">
        <span>{name}</span>
        <CopyButton text={code} />
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
export function Tabs({ tabs, active, onChange, label, id }) {
  const refs = useRef([]);
  function handleKey(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      onChange(next);
      refs.current[next]?.focus();
    }
  }
  return (
    <>
      <div className="tabs" role="tablist" aria-label={label}>
        {tabs.map((tab, index) => (
          <button
            type="button"
            key={tab}
            ref={(el) => {
              refs.current[index] = el;
            }}
            id={`${id}-tab-${index}`}
            role="tab"
            aria-selected={active === index}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => onChange(index)}
            onKeyDown={(e) => handleKey(e, index)}
          >
            {tab}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) =>
        active !== index ? (
          <div
            hidden
            key={tab}
            id={`${id}-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${index}`}
          />
        ) : null,
      )}
    </>
  );
}
