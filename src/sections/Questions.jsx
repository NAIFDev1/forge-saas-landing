import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "../components/ForgeUI";
const questions = [
  [
    "What is Forge?",
    "Forge is a fictional developer platform built as a frontend portfolio project. It demonstrates a connected workflow for builds, tests, previews, production deployments, and diagnostics. The interactions on this page run locally in your browser.",
  ],
  [
    "Can I use my existing repository?",
    "The platform concept is designed around your existing Git workflow: connect a repository, push a branch, and follow a release through its pipeline. This portfolio demonstration does not connect to your Git provider or access your code.",
  ],
  [
    "Does the command line work here?",
    "The CLI playground shows sample output for login, initialization, development, tests, deployments, and logs. It does not run commands on your machine. The source repository contains this website, rather than an installable Forge CLI.",
  ],
  [
    "What about the API?",
    "The API section demonstrates deployment requests and responses in HTTP, JavaScript, Python, and cURL. The example domains use the reserved .example suffix. No credentials or network requests are sent by these examples.",
  ],
  [
    "Can I separate my environments?",
    "Yes, within the demo you can switch between production, staging, and preview to explore their different branches and release context. A real service would provide isolated settings and deployment history for each environment.",
  ],
  [
    "How would a team use Forge?",
    "The Team concept adds shared workflows, roles, audit logs, and support to the individual developer experience. The plan selector is illustrative; it does not create a team or a paid subscription.",
  ],
];
export default function Questions() {
  const [open, setOpen] = useState(null);
  return (
    <section
      className="faq-section board-section"
      id="faq"
      aria-labelledby="faq-title"
    >
      <Reveal>
        <h2 id="faq-title">A clearer answer.</h2>
        <p>
          Good tools should make sense.
          <br />
          So should the details.
        </p>
      </Reveal>
      <div className="faq-list">
        {questions.map(([question, answer], index) => (
          <Reveal key={question} delay={index * 0.04}>
            <div className={`faq-item ${open === index ? "is-open" : ""}`}>
              <h3>
                <button
                  aria-expanded={open === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  {question}
                  {open === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
              </h3>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={open !== index}
              >
                <p>{answer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
